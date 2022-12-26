<script>
    import { fly, scale } from 'svelte/transition'
</script>

<main in:fly={{ x: 375 }} out:scale>
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
