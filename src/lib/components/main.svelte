<script>
    import { back } from '$lib/stores/navigation'
    import { scale } from 'svelte/transition'
    import { fly } from '$lib/transition'
    import { afterUpdate, beforeUpdate } from 'svelte'

    let ref
    let inFunc, inOptions 
    let outFunc, outOptions

    beforeUpdate(() => {
        console.log('beforeUpdate', $back)
        inFunc =  $back ? scale : fly
        inOptions = $back ? { start: 0.75, opacity: 1, duration: 450 } : { x: '100%', opacity: 1, duration: 450 }
    })
    afterUpdate(() => {
        console.log('afterUpdate', $back)
        outFunc =  $back ? fly : scale
        outOptions = $back ? { x: '100%', opacity: 1, duration: 450 } : { start: 0.75, opacity: 1, duration: 450 }
    })

    function handleOutrostart() {
        console.log('handleOutrostart')
        ref.style.zIndex = $back ? 1 : -1
    }
</script>

<main bind:this={ref} in:inFunc={inOptions} out:outFunc={outOptions} on:introstart={handleIntrostart} on:outrostart={handleOutrostart}>
    <slot />
</main>

<style>
    main {
        grid-area: main;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #fff;
    }
</style>
