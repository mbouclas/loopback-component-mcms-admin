(function(){
    'use strict';

    angular.module('mcms.components')
        .directive('uploadBox',['configuration', function (Config){
            return {
                require: "ngModel",
                scope: {
                    model : '=ngModel',
                    config : '=?config',
                    callback : '&?callback',
                    onProgress : '&?onProgress'
                },
                templateUrl: Config.templatesDir + "Components/uploadBox.directive.html",
                link: function(scope, element, attributes, ngModel) {
                    scope.accept = attributes.accept || 'image/*,application/pdf';
                    scope.acceptSelect = attributes.acceptSelect || 'image/*,audio/*,video/*';
                    scope.imgagePreview = attributes.imagePreview || false;
                    scope.progressBar = attributes.progressBar || false;
                    scope.multiple = attributes.multiple || false;
                    scope.autoStart = attributes.autoStart || false;
                    scope.progressBarDuration = attributes.progressBarDuration || 5000;
                    scope.id = attributes.id || Math.random(0,3000);
                },
                controller : uploadBoxController,
                controllerAs : 'VM'
            };
        }]);

    uploadBoxController.$inject = ['$scope','Upload','configuration','$timeout','lodashFactory','$rootScope'];

    function uploadBoxController($scope,Upload,Config,$timeout,lo,$rootScope){
        var vm = this,
          fileList = [],
            tmpObj = {
                headers: {
                    '_csrf': Config.CSRF || ''
                },
                method: 'POST',
                file : '',
                fileFormDataName: 'uploadedFile',
                fields : {}
            };//this directive expects a config object
        tmpObj = lo.merge($scope.config,tmpObj);


        $scope.$watch('files', function (files) {
            $scope.formUpload = false;
            if (files != null) {
                $rootScope.$broadcast('file.upload.added',files);

                if ($scope.autoStart){
                    startUpload(files);
                }
            }
        });

        function startUpload(files){
          if (!lo.isArray(files)){//single file

            $scope.errorMsg = null;
            upload(files);
            return;
          }

            for (var i in files) {
                $scope.errorMsg = null;
              fileList.push(files[i]);

              (function (file) {
                upload(file);
              })(files[i]);
            }
        }

        $rootScope.$on('file.upload.startUpload',function(e,id,files){//new files added
          if (id != $scope.id){
            return;
          }
            startUpload(files)
        });

        function upload(file) {
            vm.errorMsg = null;
            uploadUsingUpload(file);
        }

        function uploadUsingUpload(file) {
            var configObj = lo.clone(tmpObj);
            configObj.fields._csrf = Config.CSRF;
            configObj.file = file;
            file.show = true;

            file.upload = Upload.upload(configObj);

            file.upload.then(function (response) {
                $rootScope.$broadcast('file.upload.complete',$scope.id,file,response);

                if (typeof $scope.callback == 'function'){
                    $scope.callback.apply(this,[{file : file,response : response.data}]);
                }

                $timeout(function () {
                    file.result = response.data;
                });

                $timeout(function(){
                    file.show = false;
                },$scope.progressBarDuration);

            }, function (response) {
                if (response.status > 0){
                    $scope.errorMsg = response.status + ': ' + response.data;
                }

                $rootScope.$broadcast('file.upload.error' ,$scope.id,file,$scope.errorMsg);
            });

            file.upload.progress(function (evt) {
                // Math.min is to fix IE which reports 200% sometimes
                file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));

                $rootScope.$broadcast('file.upload.progress',$scope.id,file,file.progress);

              if (typeof $scope.onProgress == 'function'){
                $scope.onProgress.apply(this,[{file : file,progress : file.progress}  ]);
              }
            });

            file.upload.xhr(function (xhr) {
                // xhr.upload.addEventListener('abort', function(){console.log('abort complete')}, false);
            });
        }

    }
})();
