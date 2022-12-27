<script>
    import { back } from '$lib/stores/navigation'
    import { fade as _fade, scale } from 'svelte/transition'
    import { fly } from '$lib/transition'
    import { afterUpdate, beforeUpdate } from 'svelte'

    function fade(back) {
        const duration = 500
        const inFunc = _fade
        const inOptions = { duration }
        const outFunc = _fade
        const outOptions = { duration }
        return { inFunc, inOptions, outFunc, outOptions }
    }

    function cover(back) {
        const duration = 450
        const inFunc = back ? scale : fly
        const inOptions = back ? { start: 0.75, opacity: 1, duration } : { x: '100%', opacity: 1, duration }
        const outFunc = back ? fly : scale
        const outOptions = back ? { x: '100%', opacity: 1, duration } : { start: 0.75, opacity: 1, duration }
        return { inFunc, inOptions, outFunc, outOptions }
    }

    function coverV(back) {
        const duration = 450
        const inFunc = back ? scale : fly
        const inOptions = back ? { start: 0.75, opacity: 1, duration } : { y: '100%', opacity: 1, duration }
        const outFunc = back ? fly : scale
        const outOptions = back ? { y: ' 100%', opacity: 1, duration } : { start: 0.75, opacity: 1, duration }
        return { inFunc, inOptions, outFunc, outOptions }
    }

    function push(back) {
        const duration = 500
        const inFunc = fly
        const inOptions = back ? { x: '-100%', opacity: 1, duration } : { x: '100%', opacity: 1, duration }
        const outFunc = fly
        const outOptions = back ? { x: '100%', opacity: 1, duration } : { x: '-100%', opacity: 1, duration }
        return { inFunc, inOptions, outFunc, outOptions }
    }

    function parallax(back) {
        const duration = 450
        const inFunc = fly
        const inOptions = back ? { x: '-20%', opacity: 1, duration } : { x: '100%', opacity: 1, duration }
        const outFunc = fly
        const outOptions = back ? { x: '100%', opacity: 1, duration } : { x: '-20%', opacity: 1, duration }
        return { inFunc, inOptions, outFunc, outOptions }
    }

    const ios = parallax

    function android(back) {
        const duration = 250
        const inFunc = fly
        const inOptions = back ? { } : { y: 56, duration } 
        const outFunc = fly
        const outOptions = back ? { y: 56, duration } : { delay: duration, duration: 0 }
        return { inFunc, inOptions, outFunc, outOptions }
    }

    const preset = android

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
        background-color: #fff;
    }
</style>
