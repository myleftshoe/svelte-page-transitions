<script>
    import { back } from '$lib/stores/navigation'
    import { beforeNavigate } from '$app/navigation'

    beforeNavigate(({ to }) => {
        $back = to.url.pathname === '/' ? true : false
    })

    function popState(e) {
        console.log(e)
        $back = true
    }
</script>

<svelte:window on:popstate={popState}/>

<div id="app">
    <slot />
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
</style>
