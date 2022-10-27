import { ref } from 'vue'

export default {
  props: {
    gap: {
      type: String,
      validator: value => {
        return ['xs', 'sm', 'md'].includes(value)
      }
    }
  },
  setup(props) {
    const gapClass = ref(props.gap ? `stack--${props.gap}` : '')

    return {
      gapClass
    }
  }
}