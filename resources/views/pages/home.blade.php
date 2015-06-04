@extends('app')



@section('content')

<h3>
	Home Page
</h3>


{!! Form::open() !!}
	{!! Form::label('name', 'testing forms facade package:') !!}
	{!! Form::text('name') !!}
{!! Form::close() !!}

    <h1 class="page-heading">
        Gulp sass testing   
	</h1>




</br>

<p>
	test "taylorotwell"
</p>
<div id="app"></div>
</br>
<div id="hello"></div>
</br>
<div id="avatar"></div>
</br>
<div id="tasklist"></div>
</br>
<div id="exampletime"></div>
</br>
<div id="elementexample"></div>
</br>
<div id="likebutton"></div>
</br>
<div id="avatarprofile"></div>

@endsection