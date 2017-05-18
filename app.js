var myAP = angular.module('myAPP', [ 'ngRoute' ]);

myAP.config(['$routeProvider',
    function (
        $routeProvider
    ) {
          $routeProvider.
              when('/home', {
                  template: '<p>hi</p>' ,
                  controller: 'HomeController'
              }).
              when('/about', {

                  templateUrl: './About.html',
                  controller: 'AboutController'
              }).
              when('/contact', {

                  template: '<h1> Contact </h1><br>{{message}}',
                  controller: 'ContactController'
              }).
              otherwise(
                {
                  redirectTo: '/home'
              });
}]);
