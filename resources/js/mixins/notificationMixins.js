export default {
  methods: {
    openNotification(position = null, color, title, text) {
      this.$vs.notification({
        color,
        position,
        title,
        text,
      });
    },
  }
}