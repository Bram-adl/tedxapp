<template>
  <div class="center absolute left-0 top-0 w-full">
    <LoginForm />
    <RegisterForm />
    
    <vs-navbar
      v-model="navbar"
      center-collapsed
      class="p-4"
      color="dark"
      text-white
      not-line
    >
      <template #left>
        <img src="/img/tedx.png" class="w-24 md:w-48" />
      </template>
      <template #right>
        <vs-button
          class="focus:outline-none"
          flat
          @click="openDialog('loginDialog')"
        >Login</vs-button>
        <vs-button
          class="focus:outline-none"
          gradient
          @click="openDialog('registerDialog')"
        >Register</vs-button>
      </template>
    </vs-navbar>
    <div class="square">
      <div class="child">child 1</div>
      <div class="child">child 2</div>
      <div class="child">child 3</div>
    </div>
  </div>
</template>

<script>
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";

export default {
  name: 'Navbar',
  components: {
    LoginForm,
    RegisterForm,
  },
  data: () => ({
    navbar: "guide",
  }),
  methods: {
    openDialog (target) {
      $eventBus.$emit('openDialog', target)
    }
  }
};
</script>

    