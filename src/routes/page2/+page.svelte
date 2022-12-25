<script>
    import { fly, scale } from 'svelte/transition'
    const items = Array(4).fill('Item').map((item, index) => `${item} ${index}`)
</script>

<nav>
    <div in:fly={{x:375}} out:fly={{x:-375, duration: 4000}}>
        <a href="#">Back</a> | <a href="/page1">Page 1</a> | <a href="/page2">Page 2</a>
    </div>
</nav>
<main in:fly={{x:375}} out:scale>
    <h1>PAGE 2</h1>
    {#each items as item}
        <item>{item}</item>
    {/each}
</main>
<footer>
    <div in:fly={{y:40}} out:fly={{y:40, duration: 4000}}>
        Footer
    </div>
</footer>
<style>
    div { 
        background-color: red;
        z-index: 10;
    }
    nav {
        grid-area: nav;
        display: grid;
        place-content: center;
        background-color: cyan;
    }
    main {
        grid-area: main;
        display:flex;
        flex-direction: column;
        align-items: center;        
        background-color: #0f07;
    }
    item {
        background-color: #00f7;
        margin: 1px;
        padding: 8px;
        width: 100%;
        text-align: center;
    }
    footer {
        grid-area: footer;
        display: grid;
        place-content: center;
        background-color: pink;
    }
</style>
