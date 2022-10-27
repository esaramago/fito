import { computed } from 'vue'

export default {
    props: {
        icon: {
            type: String,
            required: true,
        },
        href: String,
    },
    setup(props, context) {
        const isButton = computed(() => {
          return !!context.attrs.onClick
        })
        const isSvg = computed(() => {
          return props.icon === 'inline-svg'
        })

        return {
            isButton,
            isSvg,
        }
    }
}