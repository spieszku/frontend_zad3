AppOne = angular.module('AppOne', ['ui.router']);
AppOne.controller('NameController', ['$scope', '$filter', function($scope, $filter){
	var orderBy = $filter('orderBy');
	$scope.name = 'Aga';
	$scope.notes = [
		{
			ocena: 5,
		przedmiot: 'Matematyka ekonomiczna',
		event: 'egzamin'
		},
		{
			ocena: 4,
			przedmiot: 'Ekonomia matematyczna',
			event: 'kolokwium'
		},
		{
			ocena: 3,
			przedmiot: 'Analiza matematyczna',
			event: 'egzamin'
		},
		{
			ocena: 2,
			przedmiot: 'Informatyka ekonomiczna',
			event: 'projekt'
		},
		{
			ocena: 3,
			przedmiot: 'Analiza finansowa',
			event: 'kolokwium'
		},
		{
			ocena: 3,
			przedmiot: 'Analiza ekonomiczna',
			event: 'kolokwium'
		},
		{
			ocena: 5,
			przedmiot: 'Statystyka opisowa',
			event: 'kolokwium'
		},
		{
			ocena: 3,
			przedmiot: 'Statystyka ekonomiczna',
			event: 'egzamin'
		},
		{
			ocena: 3,
			przedmiot: 'Matematyka finansowa',
			event: 'egzamin'
		},
		{
			ocena: 5,
			przedmiot: 'Analiza funkcji wielu zmiennych',
			event: 'egzamin'
		},
		{
			ocena: 4,
			przedmiot: 'Logika formalna',
			event: 'kolokwium'
		},
		{
			ocena: 4,
			przedmiot: 'Analiza systemow informacyjnych',
			event: 'projekt'
		},
		{
			ocena: 3,
			przedmiot: 'Projektowanie systemow informacyjnych',
			event: 'projekt'
		},
		{
			ocena: 5,
			przedmiot: 'Strategia informacyjna przedsiebiorstw',
			event: 'projekt'
		},
		{
			ocena: 4,
			przedmiot: 'Programowanie komputerow',
			event: 'egzamin'
		},
		{
			ocena: 3,
			przedmiot: 'Narzedzia informatyczne',
			event: 'kolokwium'
		},
		{
			ocena: 2,
			przedmiot: 'Problemy spoleczenstwa informacyjnego',
			event: 'egzamin'
		},
		{
			ocena: 3,
			przedmiot: 'Bazy danych',
			event: 'kolokwium'
		},
		{
			ocena: 2,
			przedmiot: 'Technologie informatyczne a rynek pracy',
			event: 'kolokwium'
		},
		{
			ocena: 3,
			przedmiot: 'Zarzadzanie procesami biznesowymi',
			event: 'projekt'
		},
		{
			ocena: 4,
			przedmiot: 'Rachunkowosc finansowa',
			event: 'egzamin'
		},
		{
			ocena: 5,
			przedmiot: 'Filozofia',
			event: 'egzamin'
		},
		{
			ocena: 3,
			przedmiot: 'Socjologia',
			event: 'kolokwium'
		},
		{
			ocena: 3,
			przedmiot: 'Programowanie obiektowe',
			event: 'projekt'
		},
		{
			ocena: 4,
			przedmiot: 'Technologie budowy aplikacji www',
			event: 'projekt'
		}

	];
	$scope.order= function(predicate, reverse){
		$scope.notes = orderBy($scope.notes, predicate, reverse);
	};
	$scope.order('-ocena', false);
}]);
AppOne.directive('ptrngName', function(){
	return{
		restrict: 'E',
		template: 'Your name is {{name}}'
	};
});
AppOne.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise("/name");
	$stateProvider
		.state('name',{
			url: "/name",
			templateUrl: "src/ptrng-name.html",
			controller: 'NameController'
	})
		.state('ambitnie',{
			url: "/ambitnie",
			templateUrl: "src/extra.html"
		})
});
