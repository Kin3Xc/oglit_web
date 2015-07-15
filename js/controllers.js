var app = angular.module('oglit.controllers', ['ui.router'])

// controladr para home
app.controller('HomeCtrl', ['$scope', function($scope){
	$scope.tagLine = 'Proyectos que extienden posibilidades';
}]);

// controladr para servicios
app.controller('ServiciosCtrl', ['$scope', function($scope){
	$scope.title = 'Nuestros servicios';

}]);

// controladr para prtafolio
app.controller('PortafolioCtrl', ['$scope', function($scope){
	$scope.title = 'Nuestros clientes';
}]);

// controladr para contacto
app.controller('ContactoCtrl', ['$scope', function($scope){
	$scope.title = 'Formulario de contacto';

	$scope.sendMail = function(){
		
	}

}]);