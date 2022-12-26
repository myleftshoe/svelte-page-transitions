<script>
    import { beforeNavigate } from '$app/navigation'
    import { back } from '$lib/stores/navigation'

    beforeNavigate(({ to, from }) => {
        console.log('beforeNavigate page3', from, to)
        const fromTabNumber = Number(from.url.pathname.split('/tab').at(-1))
        const toTabNumber = Number(to.url.pathname.split('/tab').at(-1))
        console.log('beforeNavigate page3--', toTabNumber)
        $back = toTabNumber < fromTabNumber ? true : $back
    })    
</script>

<slot/>