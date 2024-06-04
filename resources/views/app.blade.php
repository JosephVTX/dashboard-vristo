<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" dir="ltr">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title inertia>{{ config('app.name', 'Laravel') }}</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"])
    @inertiaHead
</head>

<body>
    @inertia

    <script>

        const theme = localStorage.getItem('theme') 

        const system = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

        if (!theme) {
            document.body.classList.add(system)
        } else if (theme === 'dark') {
            document.body.classList.add('dark')
        } else if (theme === 'light') {
            document.body.classList.remove('dark')
        } else if (theme === 'system') {
            document.body.classList.add(system)
        }

        document.documentElement.dir = localStorage.getItem('rtlClass') || 'ltr';
    </script>
</body>

</html>