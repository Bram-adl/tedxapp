// @ts-nocheck

export default {
  data () {
    return {
      loginDialog: false,
      registerDialog: false,
      loginForm: {
        email: "",
        password: "",
        remember: false,
      },
      registerForm: {
        email: "",
        password: "",
        remember: false,
      },
    }
  },
  mounted () {
    $eventBus.$on('openDialog', (target) => this.openDialog(target))
  },
  beforeDestroy () {
    $eventBus.$off('openDialog', (target) => this.openDialog(target))
  },
  methods: {
    openDialog (target) {
      this[target] = !this[target]
    }
  }
}