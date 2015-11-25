var app = angular.module('serviceModule', ['ngRoute']);

app.config(function($routeProvider){
  
  $routeProvider.when('/input',
  	{
  		controller: 'controlinput',
		templateUrl: 'input.html'
  	});
  
    $routeProvider.when('/display',
    {
    	controller: 'controldisplay',
    	templateUrl: 'display.html'
  	});

  	$routeProvider.otherwise({redirectTo:'/input'});
  
});

