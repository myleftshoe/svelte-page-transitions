<script>
    import { cover, coverBack, coverV, fadeOut, parallax, parallaxBack, push, pushBack } from '$lib/page-transitions'
    const { inTransition, inOptions, outTransition, outOptions, handleOutrostart} = push
    import { pageRef, out, outt } from '$lib/store'
    $outt = outTransition
    $out = outOptions
</script>

<page
    bind:this={$pageRef}
    in:inTransition={inOptions} 
    out:$outt={$out} 
    on:outrostart={handleOutrostart($pageRef)}
>
    <slot/>
</page>

<style>
    page { 
        display:grid;
        background-color: #eee;
    }
</style>