<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Laravel</title>

	<link href="{{ asset('/css/all.css') }}" rel="stylesheet">
	

</head>
<body>
	@include('partials.nav')
	
	<div class="container">
		@yield('content')
	</div>
	
	

<!-- 	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script> -->
<!-- 	<script src="/public/js/vendor/jquery.js"></script>
	<script src="/public/js/all.js"></script> -->
	
	<script src="/public/js/vendor/jquery.js"></script>
	<script src="/public/js/vendor/bootstrap.js"></script>
	<script src="/public/js/bundle.js"></script>
</body>
</html>
