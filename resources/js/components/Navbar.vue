<template>
  <div class="center absolute left-0 top-0 w-full">
    <LoginForm />
    <RegisterForm />

    <vs-navbar
      v-model="navbar"
      center-collapsed
      class="py-2 md:py-4"
      color="dark"
      text-white
      not-line
    >
      <template #left>
        <img src="/img/tedx.png" class="w-24 md:w-48 -mb-2" />
      </template>

      <template #right>
        <vs-navbar-group class="block md:hidden">
          <i class="bx bx-sm bx-menu"></i>
          <template #items>
            <vs-navbar-item :active="navbar == 'home'" id="home">
              <router-link to="/">
                Home
              </router-link>
            </vs-navbar-item>
            <vs-navbar-item :active="navbar == 'docs'" id="docs">
              <a href="#products">
                Products
              </a>
            </vs-navbar-item>
            <vs-navbar-item :active="navbar == 'docs'" id="docs">
              <p @click="openDialog('loginDialog')">
                Login
              </p>
            </vs-navbar-item>
            <vs-navbar-item :active="navbar == 'docs'" id="docs">
              <p @click="openDialog('registerDialog')">
                Register
              </p>
            </vs-navbar-item>
          </template>
        </vs-navbar-group>

        <div v-if="!hasLoggedIn" class="hidden md:flex items-center">
          <vs-button
            class="focus:outline-none"
            flat
            @click="openDialog('loginDialog')"
            >Login</vs-button
          >
          <vs-button
            class="focus:outline-none"
            gradient
            @click="openDialog('registerDialog')"
            >Register</vs-button
          >
        </div>
        <div v-else>
          <vs-button
            class="focus:outline-none"
            gradient
            to="/dashboard"
            >Home</vs-button
          >
        </div>
      </template>
    </vs-navbar>
  </div>
</template>

<script>
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";

export default {
  name: "Navbar",
  components: {
    LoginForm,
    RegisterForm,
  },
  data: () => ({
    navbar: "home",
  }),
  computed: {
    hasLoggedIn () {
      const token = localStorage.getItem('_token')
      const uid = localStorage.getItem('_uid')
      
      if (!token && !uid) {
        return false
      }

      return true
    }
  },
  methods: {
    openDialog(target) {
      $eventBus.$emit("openDialog", target);
    },
  },
};
</script>

<style>
.vs-navbar__group__item {
  padding: 0 !important;
  display: flex;
  align-items: center;
}

.vs-navbar__group__items {
  left: unset !important;
  right: 0 !important;
}
</style>
    