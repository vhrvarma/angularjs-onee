app.controller('aboutController',['$scope','$http',function ($scope,$http) {

            $scope.showAlert = function () {
            		alert('this is about page');
            		$http({
                method : "GET",
                url : "/user/series"
              }).then(function mySuccess(response) {
                  console.log(response);
                }, function myError(response) {
                  console.log(response);
              });
            }
            

        }]);

