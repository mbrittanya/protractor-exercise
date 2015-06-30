var app = angular.module('app', []);

app.controller('myCtrl', ['$scope', 'getConcerts', function ($scope, getConcerts) {
    getConcerts.concerts().then(function(response){
    	$scope.concerts = response.data.results;
    	console.log($scope.concerts);
    });

}]);

app.factory('getConcerts', ['$http', function($http) {
    var holder = {};

    holder.concerts = function(){
    	return $http.get('http://apis.is/concerts');
    };

    return holder;
  }]);

/* old code
$http.get('http://apis.is/concerts').
    		success(function(data, status, headers, config) {
      			$scope.concerts = resutls.data;
    	});*/

