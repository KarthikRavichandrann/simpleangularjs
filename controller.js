angular.module('myAPP')
    .controller('HomeController', function ($scope) {
       // create a message to display in our view
       $scope.message = 'Everyone come and see how good I look!';
    });
    angular.module('myAPP')
     .controller('ContactController', function ($scope) {
            $scope.message = 'Contact us! JK. This is just a demo.';
     });
     angular.module('myAPP')
      .controller('AboutController', function ($scope) {
             $scope.message = 'Look! I am an about page.';
      });
