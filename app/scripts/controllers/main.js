'use strict';

angular.module('timesheetdashboardApp')
	.controller('MainCtrl', function ($scope, $http) {
		$scope.awesomeThings = [
			'HTML5 Boilerplate',
			'AngularJS',
			'Karma'
		];

		$http.get('http://timesheetservice.herokuapp.com/dashboard/lastuserlocation').success(function (data) {
			$scope.userlocations = data;
		});

		$http.get('http://timesheetservice.herokuapp.com/dashboard/last10').success(function (data) {
			$scope.last10 = data;
		});

		$http.get('http://timesheetservice.herokuapp.com/dashboard/count').success(function (data) {
			$scope.count = data;
		});

		$http.get('http://timesheetservice.herokuapp.com/dashboard/trackedminutes').success(function (minutes) {
			var seconds = minutes * 60;
			var numdays = Math.floor(seconds / 86400);
			var numhours = Math.floor((seconds % 86400) / 3600);
			var numminutes = Math.floor(((seconds % 86400) % 3600) / 60);
			$scope.days = numdays;
			$scope.hours = numhours;
			$scope.minutes = numminutes;
		});
	});