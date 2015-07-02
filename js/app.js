var app = angular.module("compwnentApp", ['firebase', 'ngRoute']);

	app.controller("compwnentCtrl", ['$scope', '$firebaseArray', function($scope, $firebaseArray){
		var ref = new Firebase("https://compwnents.firebaseio.com/");
		$scope.compwnents = $firebaseArray(ref);
		$scope.compName = "";
		$scope.compType = "";
		$scope.compTypeImg = "img/html5Png.png";
		$scope.compDemo = "";
		$scope.compDocs = "";
		$scope.compDesc = "";
		$scope.compExamples = "";
		$scope.compPic = "";
		$scope.compPaid = false;
		$scope.compPrice = "";


		$scope.checkTypeImg = function(){
			if($scope.compType == "HTML5") {
				$scope.compTypeImg = "img/html5Png.png";
			}
			if($scope.compType == "CSS") {
				$scope.compTypeImg = "img/css3Png.png";
			}
			if($scope.compType == "Bootstrap") {
				$scope.compTypeImg = "img/bootstraPng.png";
			}
			if($scope.compType == "Foundation") {
				$scope.compTypeImg = "img/foundationPng.svg";
			}
			if($scope.compType == "Javascript") {
				$scope.compTypeImg = "img/javascriptPng.png";
			}
		}

          $scope.addMessage = function(e) {

				//Send compwnent
            	$scope.compwnents.$add({ 
              					compName: $scope.compName, 
              					compType: $scope.compType, 
              					compTypeImg: $scope.compTypeImg, 
              					compDemo: $scope.compDemo, 
              					compDocs: $scope.compDocs, 
              					compDesc: $scope.compDesc, 
              					compExamples: $scope.compExamples, 
              					compPic: $scope.compPic, 
              					compPaid: $scope.compPaid, 
              					compPrice: $scope.compPrice
              });

				//Reset compwnent
				$scope.compwnents = $firebaseArray(ref);
				$scope.compName = "";
				$scope.compType = "";
				$scope.compTypeImg = "";
				$scope.compDemo = "";
				$scope.compDocs = "";
				$scope.compDesc = "";
				$scope.compExamples = "";
				$scope.compPic = "";
				$scope.compPaid = false;
				$scope.compPrice = "";
          };


		$scope.compwnents.$add({ 
							compName: $scope.compName, 
							compType: $scope.compType, 
							compTypeImg: $scope.compTypeImg, 
							compDemo: $scope.compDemo, 
							compDocs: $scope.compDocs, 
							compDesc: $scope.compDesc, 
							compExamples: $scope.compExamples, 
							compPic: $scope.compPic, 
							compPaid: $scope.compPaid, 
							compPrice: $scope.compPrice
		});


	}]);