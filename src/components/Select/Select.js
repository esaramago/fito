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
    source: {
      type: Array,
      required: true,
    },
  },
  setup(props, { emit }) {

    const selectedItem = ref(props.value)
    
    watch(props => {
      selectedItem.value = props.value
    })

    const onSelect = (e) => {
      selectedItem.value = e.currentTarget.value
      e.value = e.currentTarget.value
      emit('update:value', e)
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