<script>
    import Page from '$lib/components/page.svelte'
    const items = Array(10).fill('Item').map((item, index) => `${item} ${index}`)
    console.log(items)
</script>

<Page>
    <section>
        <h1>PAGE 1</h1>
        {#each items as item}
            <item>{item}</item>
        {/each}
    </section>
</Page>    

<style>
    section {
        display:flex;
        flex-direction: column;
        align-items: center;        
    }
    item {
        color: black;
        display: block; 
        background-color: white;
        margin: 1px;
        padding: 8px;
        width: 90%;
        text-align: center;
        /* width: 100%; */
    }
</style>
