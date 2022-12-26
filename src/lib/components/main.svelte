<script>
    import { back } from '$lib/stores/navigation'
    import { fly, scale } from 'svelte/transition'
    import { afterUpdate, beforeUpdate } from 'svelte'

    let ref
    let inOptions = { x: 375, opacity: 1 }
    let outOptions = { x: -375, opacity: 1 }

    beforeUpdate((args) => {
        console.log('beforeUpdate', ref, args)
        if ($back) {
            inOptions = { x: -375, opacity: 1 }
        } else {
            inOptions = { x: 375, opacity: 1 }
        }
    })
    afterUpdate((args) => {
        console.log('afterUpdate', ref, args)
        if ($back) {
            outOptions = { x: 375, opacity: 1 }
        } else {
            outOptions = { x: -375, opacity: 1 }
        }
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
