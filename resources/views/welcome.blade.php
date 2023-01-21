<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="icon" href="{{ url('../images/page-icon.png') }}">
        
        <script src="https://kit.fontawesome.com/571855e1c3.js" crossorigin="anonymous"></script>
        @vite(['resources/css/app.css', 'resources/js/app.js'])

        <title>Portfolio - Home</title></title>

    </head>
    <body>
        <div id="app" class="global-container">
            <router-view></router-view>
        </div>
    </body>
</html>
