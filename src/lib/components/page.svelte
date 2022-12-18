<script>
    import { fly } from 'svelte/transition';

    function handleOutrostart() {
        // ensure that outgoing page is behind incoming
        ref.style.zIndex = -1
    }
    let ref

</script>
<page
    bind:this={ref}
    in:fly={{ x: 375, delay: 0, duration: 400, opacity: 1 }} 
    out:fly={{ x: -375, delay: 0, duration: 400, opacity: 1 }} 
    on:outrostart={handleOutrostart}
>
    <slot/>
</page>

<style>
    page { 
        display:grid;
        background-color: #0007;
    }
</style>