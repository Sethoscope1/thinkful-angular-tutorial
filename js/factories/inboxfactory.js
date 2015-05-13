angular.module('EmailApp')
	.factory('InboxFactory', function InboxFactory ($q, $http, $location) {
		'use strict';
		var exports = {};

		exports.messages = [];

		exports.getMessages = function () {
			var deferred = $q.defer(); // Promise
			return $http.get('json/emails.json')
				.success(function (data) {
					exports.messages = data;
					deferred.resolve(data); // Promise fullfilled, resolve data
				})
				.error(function (data) {
					deferred.reject(data); // Promise rejected
				});
			return deferred.promise;
		};

		exports.goToMessage = function (id) {
			if ( angular.isNumber(id) ) {
				console.log( 'inbox/email/' + id )
				$location.path('inbox/email/' + id)
			}
		};

		exports.deleteMessage = function (id, index) {
			this.messages.splice(index, 1);
		};

		return exports;
	});