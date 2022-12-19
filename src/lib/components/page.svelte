<script>
    import { cover, coverV, fadeOut, parallax, push } from '$lib/page-transitions'
    
    // function handleOutrostart() {
    //     // ensure that outgoing page is behind incoming
    //     ref.style.zIndex = -1
    // }
    let ref

    const { inTransition, inOptions, outTransition, outOptions, handleOutrostart} = fadeOut
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