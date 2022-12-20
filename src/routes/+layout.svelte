<div id="app">
    <nav>
        <a href="/page1">Page 1</a> | <a href="/page2">Page 2</a>
    </nav>
    <main>
        <slot />
    </main>
    <footer>Footer</footer>
</div>

<style>
    :global(body) {
        box-sizing: border-box;
        margin: 0;
    }
    #app {
        display: grid;
        height: 100vh;
        overflow: hidden;
        grid-template:
            'nav' 3rem
            'main' 1fr
            'footer' 3rem;
    }
    nav {
        grid-area: nav;
    }
    main {
        grid-area: main;
        display: grid;
        grid-template-rows: 1fr;
        grid-template-columns: 1fr;
    }
    /* use :global since the Route element may be in another component */
    main > :global(*) {
        grid-row: 1;
        grid-column: 1;
    }
    footer { 
        grid-area: footer;
        background-color: cyan;
    }
</style>
