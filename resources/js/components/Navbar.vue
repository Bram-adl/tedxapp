<template>
  <div class="center absolute left-0 top-0 w-full">
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
      <vs-navbar-item
        :active="navbar == 'guide'" id="guide"
        class="focus:outline-none"
      >
        Home
      </vs-navbar-item>
      <vs-navbar-item
        :active="navbar == 'about'" id="about"
        class="focus:outline-none"
      >
        About
      </vs-navbar-item>
      <vs-navbar-item
        :active="navbar == 'store'" id="store"
        class="focus:outline-none"
      >
        Store
      </vs-navbar-item>
      <vs-navbar-item
        :active="navbar == 'faqs'" id="faqs"
        class="focus:outline-none"
      >
        FAQs
      </vs-navbar-item>
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
export default {
  name: 'Navbar',
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

    