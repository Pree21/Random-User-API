app.factory('dataService', function($q,$http){
	var api = {};
	
	api.getContacts = function(count){
		var deferred = $q.defer();
		$http.get('https://api.randomuser.me/?results='+count).then(function(response){
			deferred.resolve(response.data);
		});
		return deferred.promise;
	};
	
	return api;
});
