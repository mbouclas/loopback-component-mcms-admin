(function(){
    'use strict';

    var core = angular.module('mcms.core');
    var assetsUrl = '/assets/',
        appUrl = '/app/',
        componentsUrl = appUrl + 'Components/';

    var config = {
        apiUrl : '/api/',
        prefixUrl : '/manage',
        templatesDir : appUrl + '/templates/',
        imageUploadUrl: '/manage/uploadImage/',
        imageBasePath: assetsUrl + 'img',
        appUrl : appUrl,
        componentsUrl : componentsUrl,
        VAT : 0,
      fileTypes : {
        image : {
          accept : 'image/*',
          acceptSelect : 'image/jpg,image/JPG,image/jpeg,image/JPEG,image/PNG,image/png,image/gif,image/GIF'
        },
        document : {
          accept : 'application/pdf,application/doc,application/docx',
          acceptSelect : 'application/pdf,application/doc,application/docx'
        },
        file : {
          accept : 'application/*',
          acceptSelect : 'application/*'
        },
        audio : {
          accept : 'audio/*',
          acceptSelect : 'audio/*'
        }
      }
    };

    core.value('config', config);
    core.constant('configuration',config);
})();
