var app=angular.module("myModule",['ui.router']);
  app.config(function ($stateProvider, $urlRouterProvider,$locationProvider) {

  	
  	 $locationProvider.html5Mode(true);
  	 $locationProvider.hashPrefix('');

     $urlRouterProvider.when("", "/home");
     $urlRouterProvider.otherwise("/home");

     $stateProvider
        .state("home", {
            url: "/home",
            templateUrl: "views/home.html"
        })
        .state("about", {
            url:"/about",
            templateUrl: "views/about.html"
        })
        

        
});

