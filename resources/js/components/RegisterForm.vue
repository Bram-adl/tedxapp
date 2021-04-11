<template>
  <vs-dialog v-model="registerDialog" blur overflow-hidden>
    <template #header>
      <h4 class="not-margin text-white">Welcome to <b>TEDxUniversitasBrawijaya</b></h4>
    </template>

    <div class="con-form">
      <vs-input
        v-model="registerForm.firstName"
        type="text"
        placeholder="First Name"
      >
        <template #icon>
          <i class="bx bxs-user" />
        </template>
      </vs-input>
      <vs-input
        v-model="registerForm.lastName"
        type="text"
        placeholder="Last Name *"
      >
        <template #icon>
          <i class="bx bxs-user" />
        </template>
      </vs-input>
      <vs-input
        v-model="registerForm.email"
        type="email"
        placeholder="Email *"
      >
        <template #icon>
          @
        </template>
      </vs-input>
      <vs-input
        type="password"
        v-model="registerForm.password"
        placeholder="Password *"
      >
        <template #icon>
          <i class="bx bxs-lock" />
        </template>
      </vs-input>
      <div class="flex">
        <vs-checkbox
          v-model="registerForm.agree"
        >
          <small class="text-white">I agree with the terms & conditions</small>
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
