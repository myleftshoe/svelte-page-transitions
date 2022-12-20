import { fade, fly, scale } from 'svelte/transition';


const device = {
    get width() { return window.innerWidth },
    get height() { return window.innerHeight },
}


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
    inOptions: { get x() { return device.width }, delay: 0, duration: 400, opacity: 1 },
    outTransition: scale,
    outOptions: { start: .5, delay: 0, duration: 400, opacity: .5 },
}

export const coverBack = {
    ...defaults,
    inTransition: fly,
    inOptions: { get x() { return -device.width }, delay: 0, duration: 400, opacity: 1 },
    outTransition: scale,
    outOptions: { start: .5, delay: 0, duration: 400, opacity: .5 },
}


export const coverV = {
    ...defaults,
    inTransition: fly,
    inOptions: { get y() { return device.height }, delay: 0, duration: 400, opacity: 1 },
    outTransition: scale,
    outOptions: { start: .5, delay: 0, duration: 400, opacity: .5 },
}

export const fadeOut = {
    ...defaults,
    inTransition: fade,
    inOptions: { delay: 250, duration: 300, opacity: .5 },
    outTransition: fade,
    outOptions: { delay: 0, duration: 300, opacity: .5 },
}

export const parallax = {
    ...defaults,
    inTransition: fly,
    inOptions: { get x() { return device.width }, delay: 0, duration: 600, opacity: 1 },
    outTransition: fly,
    outOptions: { get x() { return -device.width / 3 }, delay: 0, duration: 600, opacity: 0.35 },
    handleOutrostart: (ref) => (e) => {
        ref.style.zIndex = -1        
    }
}

export const parallaxBack = {
    ...defaults,
    inTransition: fly,
    inOptions: { get x() { return -device.width }, delay: 0, duration: 600, opacity: 1 },
    outTransition: fly,
    outOptions: { get x() { return device.width / 3 }, delay: 0, duration: 600, opacity: 0.35 },
    handleOutrostart: (ref) => (e) => {
        ref.style.zIndex = -1        
    }
}

export const push = {
    ...defaults,
    inTransition: fly,
    inOptions: { get x() { return device.width }, delay: 0, duration: 600, opacity: 1 },
    outTransition: fly,
    outOptions: { get x() { return -device.width }, delay: 0, duration: 600, opacity: .35 },
}

export const pushBack = {
    ...defaults,
    inTransition: fly,
    inOptions: { get x() { return -device.width }, delay: 0, duration: 600, opacity: .35 },
    outTransition: fly,
    outOptions: { get x() { return device.width }, delay: 0, duration: 600, opacity: .1 },
}