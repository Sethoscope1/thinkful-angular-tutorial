// Directive Inbox <inbox></inbox>

angular.module('EmailApp')
	.directive('inbox', function InboxDrctv () {
		'use strict';

		return {
			restrict: 'EA',
			replace: true,
			scope: true,
			templateUrl: 'js/directives/inbox.tmpl.html',
			controllerAs: 'inbox',

			controller: function (InboxFactory) {
				this.messages = [];

				this.deleteMessage = function (id, index) {
					InboxFactory.deleteMessage(id, index);
				};

				this.goToMessage = function (id) {
					InboxFactory.goToMessage(id);
				};

				InboxFactory.getMessages()
					.then( angular.bind( this, function then() {
						this.messages = InboxFactory.messages;
					}) );

			},

			link: function (scope, element, attrs, ctrl) {

			}
		}
	})