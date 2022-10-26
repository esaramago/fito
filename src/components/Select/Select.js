import { ref, watchEffect } from 'vue'

export default {
  emits: ['update:modelValue', 'update:change'],
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
    source: {
      type: Array,
      required: true,
    },
  },
  setup(props, { emit }) {

    const selectedItem = ref(props.value)
    
    watchEffect(props => {
      selectedItem.value = props.value
    })

    const onSelect = (e) => {
      selectedItem.value = e.currentTarget.value
      e.value = selectedItem.value
      emit('update:modelValue', selectedItem.value)
      //emit('update:change', e)
    }

    return {
      id: props.id,
      label: props.label,
      source: props.source,
      selectedItem,
      onSelect,
    }
  },
}