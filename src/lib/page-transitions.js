import { fade, fly, scale } from 'svelte/transition';


const defaults = {
    inTransition: () => {},
    inOptions: null,
    outTransition: () => {},
    outOptions: null,
    handleOutrostart: () => () => {}
}

export const cover = {
    ...defaults,
    inTransition: fly,
    inOptions: { x: 375, delay: 0, duration: 400, opacity: 1 },
    outTransition: scale,
    outOptions: { start: .5, delay: 0, duration: 400, opacity: .5 },
}

export const coverBack = {
    ...defaults,
    inTransition: fly,
    inOptions: { x: -375, delay: 0, duration: 400, opacity: 1 },
    outTransition: scale,
    outOptions: { start: .5, delay: 0, duration: 400, opacity: .5 },
}


export const coverV = {
    ...defaults,
    inTransition: fly,
    inOptions: { y: 667, delay: 0, duration: 400, opacity: 1 },
    outTransition: scale,
    outOptions: { start: .5, delay: 0, duration: 400, opacity: .5 },
}

export const fadeOut = {
    ...defaults,
    inTransition: () => {},
    inOptions: null,
    outTransition: fade,
    outOptions: { delay: 0, duration: 400, opacity: .5 },
}

export const parallax = {
    ...defaults,
    inTransition: fly,
    inOptions: { x: 375, delay: 0, duration: 600, opacity: 1 },
    outTransition: fly,
    outOptions: { x: -175, delay: 0, duration: 600, opacity: 0.35 },
    handleOutrostart: (ref) => (e) => {
        ref.style.zIndex = -1        
    }
}

export const push = {
    ...defaults,
    inTransition: fly,
    inOptions: { x: 375, delay: 0, duration: 600, opacity: 1 },
    outTransition: fly,
    outOptions: { x: -375, delay: 0, duration: 600, opacity: .35 },
}

export const pushBack = {
    ...defaults,
    inTransition: fly,
    inOptions: { x: -375, delay: 0, duration: 600, opacity: .35 },
    outTransition: fly,
    outOptions: { x: 375, delay: 0, duration: 600, opacity: .1 },
}