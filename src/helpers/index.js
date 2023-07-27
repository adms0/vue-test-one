export default {
  methods: {
    getImageUrl(imagePath) {
      const urlRegex =
        /(http[s]*:\/\/)([a-z\-_0-9\\/.]+)\.([a-z.]{2,3})\/([a-z0-9\-_\\/._~:?#\\[\]@!$&'()*+,;=%]*)([a-z0-9]+\.)(jpg|jpeg|png)/i
      if (urlRegex.test(imagePath)) {
        return imagePath
      }
      try {
        return require(`@/assets/images/${imagePath}`)
      } catch (err) {
        console.log(err)
      }
    }
  }
}
