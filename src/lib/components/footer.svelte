<script>
    import { fly } from 'svelte/transition'
</script>

<footer>
    <div in:fly={{ y: 40 }} out:fly={{ y: 40, duration: 4000 }}>
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
