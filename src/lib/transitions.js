import { elasticOut } from 'svelte/easing';

  
export function fade(node, {
	delay = 0,
	duration = 400
}) {
	const o = +getComputedStyle(node).opacity;

	return {
		delay,
		duration,
		css: t => `opacity: ${t * o}`
	};
}


export function spin(node, { duration }) {
    return {
        duration,
        css: (t) => {
            const eased = elasticOut(t)

            return `
                transform: scale(${eased}) rotate(${eased * 1080}deg);
                color: hsl(
                    ${Math.trunc(t * 360)},
                    ${Math.min(100, 1000 - 1000 * t)}%,
                    ${Math.min(50, 500 - 500 * t)}%
                );`
        },
    }
}