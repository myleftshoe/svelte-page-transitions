<script>
    import { cover, coverBack, coverV, fadeOut, parallax, parallaxBack, push, pushBack } from '$lib/page-transitions'
    const { inTransition, inOptions, outTransition, outOptions, handleOutrostart} = coverBack
    let ref
</script>

<page
    bind:this={ref}
    in:inTransition={inOptions} 
    out:outTransition={outOptions} 
    on:outrostart={handleOutrostart(ref)}
>
    <slot/>
</page>

<style>
    page { 
        display:grid;
        background-color: #eee;
    }
</style>