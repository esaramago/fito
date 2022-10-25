import { ref } from 'vue'

export default {
  props: {
    gap: {
      type: String,
      validator: value => {
        return ['sm', 'md'].includes(value)
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