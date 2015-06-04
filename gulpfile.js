var elixir = require('laravel-elixir');


elixir(function(mix) {
    mix.sass('app.scss');
	
	mix.styles([
		'vendor/bootstrap.css',
		'app.css'
	], null, 'public/css');
	
	mix.browserify('app.js');
	
/* 	mix.scripts([
		'bundle.js',
		'vendor/bootstrap.js'
	], null, 'public/js'); */
});





    




