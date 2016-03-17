(function() {
    angular.module('mcms.components')
        .directive('thumbUploadBox', thumbUploadBox);

    thumbUploadBox.$inject = ['$rootScope','configuration','$timeout'];
    function thumbUploadBox($rootScope,Config,$timeout){

        return {
            require : 'ngModel',
            templateUrl: Config.templatesDir  + "Components/thumbUploadBox.component.html",
            scope: {
                model : '=ngModel',
                thumbModel : '=thumb',
                options : '=?options'
            },
            restrict : 'EA',
            link : function(scope, element, attrs, controllers){
                var defaults  = {
                    id : attrs.id || 'thumbUploadBox',
                    uploadOptions : Config.fileTypes.image,
                    uploadConfig : {
                        url : Config.apiUrl + 'uploadThumb',
                        fields : {}
                    },
                    onUploadDone : onUploadDone,
                    onProgress : onProgress
                },
                    Uploader = {};

                if (typeof scope.options == 'undefined'){
                    scope.options = {};
                }

                Uploader = angular.extend(defaults,scope.options);

                scope.id = Uploader.id;
                scope.uploadOptions = Uploader.uploadOptions;
                scope.uploadConfig = Uploader.uploadConfig;
                scope.onUploadDone = Uploader.onUploadDone;
                scope.onProgress = Uploader.onProgress;



                function onUploadDone(file,response){//handle the after upload shit
                    $timeout(function(){

                      scope.model = (response.files) ? response.files[0].result :  response;
                      scope.thumbModel = scope.model.copies.big_thumb.imageUrl;
                      scope.f = null;
                    },100);
                }

              function onProgress(file,progress){//handle the progress
                $timeout(function(){
                  scope.f = file;
                });
              }

                $rootScope.$on('file.upload.added',function(e,files){
                    scope.files = files;
                });


            }
        };
    }

})();
