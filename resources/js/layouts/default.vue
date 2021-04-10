<template>
  <div>
    <header class="relative">
      <Navbar />
      <slot />
    </header>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";

export default {
  name: "Default",
  components: {
    Navbar,
  }
};
</script>

<style></style>
