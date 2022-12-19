<script>
    import { cover, coverV, fadeOut, parallax, push } from '$lib/page-transitions'
    const { inTransition, inOptions, outTransition, outOptions, handleOutrostart} = parallax
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
        background-color: #0007;
    }
</style>