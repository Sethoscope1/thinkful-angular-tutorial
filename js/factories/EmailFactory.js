// Factory: Email Factory

angular.module('EmailApp')
	.factory('EmailFactory', function EmailFactory ($http, $q) {
		var exports = {};

		exports.getMessage = function (params) {
			if ( params.id ) {
				var deferred = $q.defer();
				$http.get('json/message/' + params.id + '.json')
					.success(function (data) {
						deferred.resolve(data);
					})
					.error(function (data) {
						deferred.reject(data);
					});
				return deferred.promise;
			}
		};

		exports.reply = function (message) {
			if (message) {
				alert(message);
				console.log(message);
			}
		};

		return exports;
	});