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

        return {
            isButton,
        }
    }
}