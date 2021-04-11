<template>
  <dashboard-layout> HALO </dashboard-layout>
</template>

<script>
import DashboardLayout from "../layouts/dashboard";

export default {
  name: "Dashboard",
  components: {
    DashboardLayout,
  },
  mounted() {
    this.checkIsLoggedIn()
  },
  methods: {
    redirectIfUnauthenticated() {
      this.$router.replace('/')
    },
    async checkIsLoggedIn() {
      const token = localStorage.getItem('_token')
      if (!token) {
        return this.redirectIfUnauthenticated()
      }

      const uid = localStorage.getItem('_uid')
      if (!uid) {
        return this.redirectIfUnauthenticated()
      }
    }
  }
};
</script>

<style>
</style>