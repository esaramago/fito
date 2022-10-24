export default url => {
  return new Promise(resolve => {
    var img = new Image()
    img.addEventListener('load', () => resolve(true))
    img.addEventListener('error', () => resolve(false))
    img.src = url
  })
}