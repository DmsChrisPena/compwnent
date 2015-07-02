angular.module('filters', []).
    filter('truncate', function () {
        return function (text, length, end) {
            if (isNaN(length))
                length = 10;

            if (end === undefined)
                end = "...";

            if (text.length <= length || text.length - end.length <= length) {
                return text;
            }
            else {
                return String(text).substring(0, length-end.length) + end;
            }

        };
    });


var app = angular.module("compwnentApp", ['firebase', 'ngRoute', 'filters']);

	app.controller("compwnentCtrl", ['$scope', '$firebaseArray', function($scope, $firebaseArray){
		var ref = new Firebase("https://compwnents.firebaseio.com/");
		$scope.compwnents = $firebaseArray(ref);
		$scope.compName = "";
		$scope.compType = "";
		$scope.compTypeImg = "img/html5Png.png";
    $scope.compHeadingColor = "";
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


    $scope.checkTypeColor = function(){
      if($scope.compType == "HTML5") {
        $scope.compHeadingColor = "#E44D26";
      }
      if($scope.compType == "CSS") {
        $scope.compHeadingColor = "#0170BA";
      }
      if($scope.compType == "Bootstrap") {
        $scope.compHeadingColor = "#50244A";
      }
      if($scope.compType == "Foundation") {
        $scope.compHeadingColor = "#29A9DF";
      }
      if($scope.compType == "Javascript") {
        $scope.compHeadingColor = "#F0BB1C";
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
              					compPrice: $scope.compPrice,
                        compHeadingColor: $scope.compHeadingColor
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

          $scope.filterTypeJavascript = function(compType) {
          	if(compType === "Javascript") {
          		return true
          	} else {
          		return false
          	}
          }
          $scope.filterTypeHtml = function(compType) {
          	if(compType === "HTML5") {
          		return true
          	} else {
          		return false
          	}
          }
          $scope.filterTypeCss = function(compType) {
          	if(compType === "CSS") {
          		return true
          	} else {
          		return false
          	}
          }
          $scope.filterTypeBootstrap = function(compType) {
          	if(compType === "Bootstrap") {
          		return true
          	} else {
          		return false
          	}
          }
          $scope.filterTypeFoundation = function(compType) {
          	if(compType === "Foundation") {
          		return true
          	} else {
          		return false
          	}
          }



	}]);