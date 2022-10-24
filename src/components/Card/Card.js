import imageExists from '@/helpers/imageExists'
import { reactive, ref, onMounted } from 'vue'

export default {
  name: 'Card',
  props: {
    title: String,
    subTitle: String,
    code: String,
  },
  setup(props) {

    const imagesPath = '/images/trees'
    const imageUrl = ref('')

    onMounted(async () => {
      imageUrl.value = await getImageUrl()
    })

    const getImageUrl = async () => {
      const imageUrl = `${imagesPath}/${props.code}.png`
      const image = await imageExists(imageUrl)
      
      if (image) {
        return imageUrl
      } else {
        return `${imagesPath}/placeholder.png`
      }
    }

    return {
      title: props.title,
      subTitle: props.subTitle,
      code: props.code,
      imageUrl,
    }
  },
}


