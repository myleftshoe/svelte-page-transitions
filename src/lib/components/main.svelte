<script>
    import { back } from '$lib/stores/navigation'
    import { fly, scale } from 'svelte/transition'
    import { afterUpdate, beforeUpdate } from 'svelte'

    let ref
    let inOptions 
    let outOptions

    beforeUpdate(() => {
        console.log('beforeUpdate', $back)
        const vw = window.innerWidth
        inOptions = $back ? { x: -vw, opacity: 1 } :  { x: vw, opacity: 1 }
        if (ref) ref.style.zIndex = -1
    })
    afterUpdate(() => {
        console.log('afterUpdate', $back)
        const vw = window.innerWidth
        outOptions = $back ? { x: vw, opacity: 1 } :  { x: -vw, opacity: 1 }
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
