<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">

    <title>TEDxUniversitasBrawijaya 2021</title>

    <!-- Favicons -->
    <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="192x192" href="/favicon/android-chrome-192x192.png">
    <link rel="icon" type="image/png" sizes="512x512" href="/favicon/android-chrome-512x512.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" href="/favicon/favicon.ico">
    <meta name="theme-color" content="#ffffff">

    <!-- Box Icons -->
    <link href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' rel='stylesheet'>
    <!-- Google Fonts: Poppins -->
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,600;0,700;1,500&display=swap" rel="stylesheet">

    <!-- ========== Styles ========== -->
    <!-- Main Styles -->
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">

    <!-- ========== Scripts ========== -->
    <!-- AnimeJS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"></script>
    <!-- Main Script -->
    <script src="{{ asset('js/app.js') }}" defer></script>
</head>

<body>
    <div id="app"></div>
    
    <script>window.Laravel = {csrfToken: '{{ csrf_token() }}'}</script>
</body>

</html>