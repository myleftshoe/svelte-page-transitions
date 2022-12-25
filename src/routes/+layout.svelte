<script>
    import { beforeNavigate } from '$app/navigation'
    import { pageRef, out, outt } from '$lib/store'
    import { cover, coverBack, coverV, fadeOut, parallax, parallaxBack, push, pushBack } from '$lib/page-transitions'
    const { outTransition, outOptions, handleOutrostart} = cover
    beforeNavigate(() => {
        console.log($pageRef)
        $outt = outTransition
        $out = { ...outOptions }
    })
    function goBack() {
        history.back()
    }
</script>

<div id="app">
    <slot/>
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
