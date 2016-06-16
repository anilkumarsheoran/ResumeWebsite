var app = angular.module('resume', ['ui.router','appControllers']);

/***State Routing Start***/  
app.config(function($stateProvider, $urlRouterProvider,$locationProvider) {
    
    
    $stateProvider
        .state('home', {
          url: '/',
          views: {
            'home': { templateUrl: 'index.html',controller:'MyController'},
            'header@home': { templateUrl: 'partials/header.html' },
            'body@home': { templateUrl: 'partials/body.html'},
            'footer@home': { templateUrl: 'partials/footer.html' }
         }
      });
        
   $locationProvider.html5Mode(true);
  
});


