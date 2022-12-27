<script>
    import { back } from '$lib/stores/navigation'
    import { scale } from 'svelte/transition'
    import { fly } from '$lib/transition'
    import { afterUpdate, beforeUpdate } from 'svelte'

    let ref
    let inOptions 
    let outOptions

    beforeUpdate(() => {
        console.log('beforeUpdate', $back)
        inOptions = $back ? { x: '-100%', opacity: 1 } :  { x: '100%', opacity: 1 }
        if (ref) ref.style.zIndex = -1
    })
    afterUpdate(() => {
        console.log('afterUpdate', $back)
        outOptions = $back ? { x: '100%', opacity: 1 } :  { x: '-100%', opacity: 1 }
    })
</script>

<main bind:this={ref} in:fly={inOptions} out:fly={outOptions}>
    <slot />
</main>

<style>
    main {
        grid-area: main;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #0f07;
    }
</style>
