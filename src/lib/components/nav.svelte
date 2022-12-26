<script>
    import { fly } from 'svelte/transition'
</script>

<nav>
    <slot name="start"><div/></slot>
    <div in:fly={{ x: 375 }} out:fly={{ y: -80 }}>
        <slot />
    </div>
    <slot name="end"><div/></slot>
</nav>

<style>
    nav {
        grid-area: nav;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1em;
        background-color: cyan;
    }
</style>
