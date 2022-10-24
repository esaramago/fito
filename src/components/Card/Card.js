

export default {
  name: 'Card',
  props: {
    title: String,
    subTitle: String,
  },
  setup(props) {

    return {
      title: props.title,
      subTitle: props.subTitle,
    }
  }
}