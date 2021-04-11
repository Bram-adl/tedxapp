<template>
  <vs-dialog v-model="loginDialog" blur overflow-hidden>
    <template #header>
      <h4 class="not-margin text-white">Welcome to <b>TEDxUniversitasBrawijaya</b></h4>
    </template>

    <div class="con-form">
      <vs-input
        v-model="loginForm.email"
        type="email"
        placeholder="Email"
      >
        <template #icon>
          @
        </template>
      </vs-input>
      <div v-if="hasError.email" class="text-xs text-red-400 mb-2">
        {{ hasError.email }}
      </div>
      
      <vs-input
        type="password"
        v-model="loginForm.password"
        placeholder="Password"
      >
        <template #icon>
          <i class="bx bxs-lock" />
        </template>
      </vs-input>
      <div v-if="hasError.password" class="text-xs text-red-400 mb-2">
        {{ hasError.password }}
      </div>
      
      <div class="flex">
        <vs-checkbox
          v-model="loginForm.remember"
        >
          <small class="text-white">Remember me</small>
        </vs-checkbox>
      </div>
    </div>

    <template #footer>
      <div class="footer-dialog">
        <vs-button block class="focus:outline-none" @click="login"> Login </vs-button>
      </div>
    </template>
  </vs-dialog>
</template>

<script>
import dialogMixins from "../mixins/dialogMixins"
import notificationMixins from "../mixins/notificationMixins";

export default {
  name: 'LoginForm',
  mixins: [
    dialogMixins,
    notificationMixins
  ],
  data () {
    return {
      hasError: {}
    }
  },
  methods: {
    async login () {
      const loading = this.$vs.loading({
        background: "#000",
        color: "#fff",
        types: "circles"
      })
      try {
        const { data } = await axios.post("/auth/login", {
          email_address: this.loginForm.email,
          password: this.loginForm.password,
        })

        if (!data.success) {
          loading.close()
          return this.openNotification("top-right", "danger", "Login Failed!", data.message);
        }

        if (data.success) {
          loading.close()
          const token = data.token
          const userId = data.user

          localStorage.setItem('_token', token)
          localStorage.setItem('_uid', userId)

          this.$router.replace('/dashboard')
        }
      } catch ({ response }) {
        loading.close()
        console.log(response.data)
      }
    }
  }
}
</script>

<style></style>
