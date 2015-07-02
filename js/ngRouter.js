app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){

// Need to change these because it's in wrong directory
	$routeProvider.when("/everything", {
						templateUrl:"../partials/views/everything.html",
						controller: 'compwnentCtrl'
						})
				  	.when('/html5', {
						templateUrl:"../partials/views/html5.html",
						controller: 'compwnentCtrl'
						})
			  	  	.when('/bootstrap', {
			  			templateUrl:"../partials/views/bootstrap.html",
			  			controller: 'compwnentCtrl'
			  			})
		  	  	  	.when('/javascript', {
		  	  			templateUrl:"../partials/views/javascript.html",
		  	  			controller: 'compwnentCtrl'
		  	  			})
	  	  	  	  	.when('/css', {
	  	  	  			templateUrl:"../partials/views/css.html",
	  	  	  			controller: 'compwnentCtrl'
	  	  	  			})
  	  	  	  	  	.when('/foundation', {
  	  	  	  			templateUrl:"../partials/views/foundation.html",
  	  	  	  			controller: 'compwnentCtrl'
  	  	  	  			})
  	  	  	  	  	.when('/', {
  	  	  	  			templateUrl:"../partials/views/componentsNav.html",
  	  	  	  			controller: 'compwnentCtrl'
  	  	  	  			})
				  .otherwise({redirectTo: "/"});

	$locationProvider.html5Mode({enabled: true, requireBase: false});

}]);