<script>
    import { back } from '$lib/stores/navigation'
    import { beforeNavigate, afterNavigate } from '$app/navigation'

    let updateBack = true
    beforeNavigate(({ to }) => {
        if (!updateBack) return
        updateBack = false
        $back = (to.url.pathname === '/') 
        console.log('beforeNavigate +layout', $back)
    })
    afterNavigate(() => {
        console.log('afterNavigate')
        updateBack = true
    })

    function popState(e) {
        // console.log(e)
        if (!updateBack) return
        updateBack = false
        $back = true
        console.log('popState +layout', $back)
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
        background-color: #000;
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
