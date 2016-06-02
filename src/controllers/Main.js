module.exports = function($scope, $http) {
    $scope.query = '';

    $scope.doSearch = function(){
    	$http({
    		method: 'GET',
    		url: '/api/ingredient/' + $scope.query
    	}).then(function(result){
    		$scope.data = result;
    	});
    }
}