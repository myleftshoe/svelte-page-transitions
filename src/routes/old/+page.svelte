<script>
    import html2canvas from 'html2canvas'
    import { afterUpdate } from 'svelte'
    import { scale } from 'svelte/transition'
    let captureRef, copyRef
    let canvasEl
    function handleCaptureClick() {
        html2canvas(captureRef).then((canvas) => {
            canvasEl = canvas
            console.log('test')
        })
    }
    let k = false
    afterUpdate(() => {
        k = !k
        canvasEl && copyRef.appendChild(canvasEl)
        console.log('fdsfsdsd')
    })
</script>

<main bind:this={copyRef}>
    <div bind:this={captureRef}>
        <button on:click={handleCaptureClick}>Capture</button>
    </div>
    {#if canvasEl}
        <div
            transition:scale
            id="copy"
        />
    {/if} 

    <!-- {#key k}
        <div
            in:fly={{ x: 640, delay: 0, duration: 6000 }}
            out:fly={{ x: -640, duration: 6000, opacity: 1 }}
            bind:this={copyRef}
            id="copy"
        >
            <h1>Welcome to SvelteKit</h1>
            <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

            <div bind:this={captureRef} id="capture" style="padding: 10px; background: #f5da55">
                <h4 style="color: #000; ">Hello world!>>>>>>>>>>>>>>>>>>>>></h4>
            </div>
            <button on:click={handleCaptureClick}>Capture</button>
        </div>
    {/key}
    {#key canvasEl}
        <div
            in:fly={{ x: 640, delay: 0, duration: 6000 }}
            out:fly={{ x: -640, duration: 6000, opacity: 1 }}
            bind:this={copyRef}
            id="copy"
        />
    {/key} -->
</main>

<style>
    :global(body) {
        margin:0;
        padding:0;
    }
    main {
        position: relative;
        height: 100%;
        top: 0;
        right:0;
        bottom:0;
        left:0;
        background-color: red;
    }
    div { 
        position: absolute;
        height: 100vh;
        width:100vw;
        inset:0;
        background-color: green;
    }
    #copy {
        background: #0000ff;
        position: fixed;
        top: 0;
    }
</style>
