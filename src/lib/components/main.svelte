<script>
    import { afterUpdate, beforeUpdate } from 'svelte'
    import { back } from '$lib/stores/navigation'
    import { parallax as preset } from '$lib/transition/preset'

    let ref
    let inFunc, inOptions
    let outFunc, outOptions

    beforeUpdate(() => {
        console.log('beforeUpdate', $back)
        ;({ inFunc, inOptions } = preset($back))
    })
    afterUpdate(() => {
        console.log('afterUpdate', $back)
        ;({ outFunc, outOptions } = preset($back))
    })

    function handleIntrostart() {
        console.log('handleIntrostart')
    }

    function handleOutrostart() {
        console.log('handleOutrostart')
        ref.style.zIndex = $back ? 1 : -1
    }
</script>

<main
    bind:this={ref}
    in:inFunc={inOptions}
    out:outFunc={outOptions}
    on:introstart={handleIntrostart}
    on:outrostart={handleOutrostart}
>
    <slot />
</main>

<style>
    main {
        grid-area: main;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #efeff4;
        /* background-color: #000; */
        border-left: 1px solid #7777;
    }
</style>
