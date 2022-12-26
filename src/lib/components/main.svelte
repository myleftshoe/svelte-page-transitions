<script>
    import { back } from '$lib/stores/navigation'
    import { fly, scale } from 'svelte/transition'
    import { afterUpdate, beforeUpdate } from 'svelte'

    let inOptions = { x: 375, opacity: 1 }
    let outOptions = { x: -375, opacity: 1 }

    beforeUpdate(() => {
        console.log('beforeUpdate', $back)
        inOptions = $back ? { x: -375, opacity: 1 } :  { x: 375, opacity: 1 }
    })
    afterUpdate(() => {
        console.log('afterUpdate', $back)
        outOptions = $back ? { x: 375, opacity: 1 } :  { x: -375, opacity: 1 }
    })
</script>

<main in:fly={inOptions} out:fly={outOptions}>
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
