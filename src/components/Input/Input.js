import { ref, watch } from 'vue'

export default {
  props: {
    value: String,
    id: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    placeholder: String,
  },
  setup(props, { emit }) {

    const text = ref(props.value)
    
    watch(props => {
      text.value = props.value
    })

    const onInput = (e) => {
      text.value = e.currentTarget.value
      e.value = e.currentTarget.value
      emit('update:value', e)
    }

    return {
      id: props.id,
      label: props.label,
      placeholder: props.placeholder,
      text,
      onInput,
    }
  },
}