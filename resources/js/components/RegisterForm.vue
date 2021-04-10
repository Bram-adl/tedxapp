<template>
  <vs-dialog v-model="registerDialog" blur overflow-hidden>
    <template #header>
      <h4 class="not-margin">Welcome to <b>TEDxUniversitasBrawijaya</b></h4>
    </template>

    <div class="con-form">
      <vs-input
        v-model="registerForm.username"
        type="text"
        placeholder="Username"
      >
        <template #icon>
          <i class="bx bxs-user" />
        </template>
      </vs-input>
      <vs-input
        v-model="registerForm.email"
        type="email"
        placeholder="Email"
      >
        <template #icon>
          @
        </template>
      </vs-input>
      <vs-input
        type="password"
        v-model="registerForm.password"
        placeholder="Password"
      >
        <template #icon>
          <i class="bx bxs-lock" />
        </template>
      </vs-input>
      <div class="flex">
        <vs-checkbox
          v-model="registerForm.remember"
        >
          <small>I agree with the terms & conditions</small>
        </vs-checkbox>
      </div>
    </div>

    <template #footer>
      <div class="footer-dialog">
        <vs-button block class="focus:outline-none"> Register </vs-button>
      </div>
    </template>
  </vs-dialog>
</template>

<script>
import dialogMixins from "../mixins/dialogMixins"

export default {
  name: 'RegisterForm',
  mixins: [
    dialogMixins
  ]
}
</script>

<style></style>
