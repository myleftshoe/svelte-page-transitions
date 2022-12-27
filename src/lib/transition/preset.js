import { fade as _fade, scale } from 'svelte/transition'
import { fly } from '$lib/transition'

export function fade(back) {
    const duration = 500
    const inFunc = _fade
    const inOptions = { duration }
    const outFunc = _fade
    const outOptions = { duration }
    return { inFunc, inOptions, outFunc, outOptions }
}

export function cover(back) {
    const duration = 450
    const inFunc = back ? scale : fly
    const inOptions = back ? { start: 0.75, opacity: 1, duration } : { x: '100%', opacity: 1, duration }
    const outFunc = back ? fly : scale
    const outOptions = back ? { x: '100%', opacity: 1, duration } : { start: 0.75, opacity: 1, duration }
    return { inFunc, inOptions, outFunc, outOptions }
}

export function coverV(back) {
    const duration = 450
    const inFunc = back ? scale : fly
    const inOptions = back ? { start: 0.75, opacity: 1, duration } : { y: '100%', opacity: 1, duration }
    const outFunc = back ? fly : scale
    const outOptions = back ? { y: ' 100%', opacity: 1, duration } : { start: 0.75, opacity: 1, duration }
    return { inFunc, inOptions, outFunc, outOptions }
}

export function push(back) {
    const duration = 500
    const inFunc = fly
    const inOptions = back ? { x: '-100%', opacity: 1, duration } : { x: '100%', opacity: 1, duration }
    const outFunc = fly
    const outOptions = back ? { x: '100%', opacity: 1, duration } : { x: '-100%', opacity: 1, duration }
    return { inFunc, inOptions, outFunc, outOptions }
}

export function parallax(back) {
    const duration = 450
    const inFunc = fly
    const inOptions = back ? { x: '-20%', opacity: 1, duration } : { x: '100%', opacity: 1, duration }
    const outFunc = fly
    const outOptions = back ? { x: '100%', opacity: 1, duration } : { x: '-20%', opacity: 1, duration }
    return { inFunc, inOptions, outFunc, outOptions }
}

export const ios = parallax

export function android(back) {
    const duration = 250
    const inFunc = fly
    const inOptions = back ? { } : { y: 56, duration } 
    const outFunc = fly
    const outOptions = back ? { y: 56, duration } : { delay: duration, duration: 0 }
    return { inFunc, inOptions, outFunc, outOptions }
}
