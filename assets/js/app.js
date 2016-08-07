(function () {
	const app = angular.module('entrance', []);

	app.controller('UserController', function ($scope) {;

		$scope.filterFunction = function(element) {
			return element.name.match(/^Ma/) ? true : false;
		};

		$scope.users = [
			{
				name: 'Phillip J. Fry',
				email: 'pjfryman@arcade.com',
				seat: 14,
				arrived: true
			},
			{
				name: 'Amy Wong',
				email: 'amy@wongcorp.com',
				seat: 23,
				arrived: false
			},{
				name: 'Hubert Farnsworth',
				email: 'ceo@planetexpress.com',
				seat: 1,
				arrived: false
			},
			{
				name: 'Hermes Conrad',
				email: 'operations@planetexpress.com',
				seat: 2,
				arrived: true
			},
			{
				name: 'Bender B. Rodríguez',
				email: 'bender@benderisgreat.com',
				seat: 15,
				arrived: true
			},
			{
				name: 'Turanga Leela',
				email: 'oneeyedmutant@gmail.com'
			}];
	});


})();
