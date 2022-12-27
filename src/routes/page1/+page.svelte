<script>
    import Main from '$lib/components/main.svelte'
    import Nav from '$lib/components/nav.svelte'
    import Footer from '$lib/components/footer.svelte'
    const items = Array(10).fill('Item').map((item, index) => `${item} ${index}`)
</script>

<Nav>
    <a href="/" slot="start">Home</a>
    <a href="/page2">Page 2</a>
    <a href="#" slot="end" on:click={() => history.back()}>Back</a>
</Nav>
<Main>
    <h1>PAGE 1</h1>
    <section>
        {#each items as item}
            <item>{item}</item>
        {/each}
    </section>
</Main>
<Footer>Footer</Footer>

<style>
    section {
        display: flex;
        flex-direction: column;
        width: 100%;
    }
    item {
        background-color: #fff;
        border-bottom: 1px solid #7777;
        padding: 8px;
        width: 100%;
        text-align: center;
    }
    item:first-child {
        border-top: 1px solid #c7c7c7;
    }
</style>
