<template>
  <div>
    <Sidebar />
    <slot />
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar"

export default {
  name: 'dashboard',
  components: {
    Sidebar
  }
}
</script>

<style></style>
