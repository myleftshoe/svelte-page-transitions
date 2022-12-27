<script>
    import { fly } from 'svelte/transition'
    export let noTransition = false
</script>

<nav>
    <slot name="start"><div/></slot>
    {#if noTransition} 
        <div>
            <slot />
        </div>
    {:else}
        <div in:fly={{ x: window.innerWidth }} out:fly={{ y: 40 }}>
            <slot />
        </div>
    {/if}
    <slot name="end"><div/></slot>
</nav>

<style>
    nav {
        grid-area: nav;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1em;
        background-color: #f7f7f8;
        border-bottom: 1px solid #b9b9ba;
        z-index: 10;
    }
</style>
