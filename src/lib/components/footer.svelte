<script>
    import { fly } from 'svelte/transition'
    export let noTransition = false
</script>

<footer>
    {#if noTransition}
        <div>
            <slot />
        </div>
    {:else}
        <div in:fly={{ x: window.innerWidth }} out:fly={{ y: 20 }}>
            <slot />
        </div>
    {/if}
</footer>

<style>
    footer {
        grid-area: footer;
        display: grid;
        place-content: center;
        background-color: pink;
        z-index: 10;
    }
</style>
