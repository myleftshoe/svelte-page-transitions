<script>
    import { fly } from 'svelte/transition'
</script>

<footer>
    <div in:fly={{ x: 375 }} out:fly={{ y: 80 }}>
        <slot />
    </div>
</footer>

<style>
    footer {
        grid-area: footer;
        display: grid;
        place-content: center;
        background-color: pink;
    }
</style>
