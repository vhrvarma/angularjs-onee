app.controller('homeController',['$scope','$http',function ($scope,$http) {

            $scope.showAlert = function () {
            		alert('this is home');
            		$http({
                method : "GET",
                url : "/user/parallel"
              }).then(function mySuccess(response) {
                  console.log(response);
                }, function myError(response) {
                  console.log(response);
              });
            }
            

        }]);

