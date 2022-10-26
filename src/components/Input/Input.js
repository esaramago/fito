export default {
  emits: ['update:modelValue'],
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

    const onInput = (e) => {
      emit('update:modelValue', e.currentTarget.value)
    }

    return {
      id: props.id,
      label: props.label,
      placeholder: props.placeholder,
      searchText: props.searchText,
      onInput,
    }
  },
}