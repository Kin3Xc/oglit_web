var app = angular.module('oglit', ['oglit.controllers', 'oglit.services']);

//Configuración de rutas de la aplicacion web
app.config(function($stateProvider, $urlRouterProvider){
	
	// defino rutas
	$stateProvider
		// ruta para el home principal
		.state('home', {
			url: '/',
			templateUrl: 'partials/home.html',
			controller: 'HomeCtrl'
		})
		// ruta para la pagina de servicios
		.state('servicios', {
			url: '/servicios',
			templateUrl: 'partials/servicios.html',
			controller: 'ServiciosCtrl'
		})
		// ruta para el portafolio de servicios
		.state('portafolio',{
			url: '/portafolio',
			templateUrl: 'partials/portafolio.html',
			controller: 'PortafolioCtrl'
		})
		// ruta para el formulario de contacto
		.state('contacto',{
			url: '/contacto',
			templateUrl: 'partials/contacto.html',
			controller: 'ContactoCtrl'
		});

		// si no ingresan ninguna de las rutas anteriores lo mando por default al home
		$urlRouterProvider.otherwise('/');

});