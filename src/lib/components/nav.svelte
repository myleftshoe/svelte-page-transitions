<script>
    import { fly } from 'svelte/transition'
</script>

<nav>
    <div in:fly={{x:375}} out:fly={{x:-375, duration: 4000}}>
        <slot/>
    </div>
</nav>

<style>
    nav {
        grid-area: nav;
        display: grid;
        place-content: center;
        background-color: cyan;
    }
</style>