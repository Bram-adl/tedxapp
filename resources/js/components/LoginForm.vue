<template>
  <vs-dialog v-model="loginDialog" blur overflow-hidden>
    <template #header>
      <h4 class="not-margin">Welcome to <b>TEDxUniversitasBrawijaya</b></h4>
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
      <vs-input
        type="password"
        v-model="loginForm.password"
        placeholder="Password"
      >
        <template #icon>
          <i class="bx bxs-lock" />
        </template>
      </vs-input>
      <div class="flex">
        <vs-checkbox
          v-model="loginForm.remember"
        >
          <small>Remember me</small>
        </vs-checkbox>
      </div>
    </div>

    <template #footer>
      <div class="footer-dialog">
        <vs-button block class="focus:outline-none"> Login </vs-button>
      </div>
    </template>
  </vs-dialog>
</template>

<script>
import dialogMixins from "../mixins/dialogMixins"

export default {
  name: 'LoginForm',
  mixins: [
    dialogMixins
  ]
}
</script>

<style></style>
