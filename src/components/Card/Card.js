import { computed } from 'vue'

export default {
  name: 'Card',
  props: {
    title: String,
    subTitle: String,
    code: String,
  },
  setup(props) {

    const imagesPath = '/images/trees'

    const imageUrl = computed(() => {
      return `${imagesPath}/${props.code}.jpg`
    })

    return {
      title: props.title,
      subTitle: props.subTitle,
      code: props.code,
      imageUrl,
    }
  },
}


