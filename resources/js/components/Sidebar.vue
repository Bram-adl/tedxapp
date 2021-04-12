
<template>
  <div class="block">
    <vs-navbar
      shadow
      square
      center-collapsed
      v-model="active"
      color="dark"
      text-white
      class="py-4"
    >
      <template #left>
        <vs-button @click="activeSidebar = !activeSidebar" flat icon>
          <i class="bx bx-menu"></i>
        </vs-button>
      </template>
      <template #right>
        <vs-avatar :color="getRandomColor">
          <template #text>
            {{ username }}
          </template>
        </vs-avatar>
      </template>
    </vs-navbar>

    <vs-sidebar
      absolute
      v-model="active"
      :open.sync="activeSidebar"
      background="dark"
      text-white
    >
      <template #logo>
        <img src="/img/tedx.png" alt="TEDxLogo" />
      </template>
      <vs-sidebar-item to="/dashboard" id="dashboard" class="focus:outline-none">
        <template #icon>
          <i class="bx bx-grid"></i>
        </template>
        Dashboard
      </vs-sidebar-item>
      <vs-sidebar-item to="/" id="home" class="focus:outline-none">
        <template #icon>
          <i class="bx bx-home"></i>
        </template>
        Home
      </vs-sidebar-item>
      <vs-sidebar-item id="market" class="focus:outline-none">
        <template #icon>
          <i class="bx bx-calendar"></i>
        </template>
        Timeline TEDxUB
      </vs-sidebar-item>
      <vs-sidebar-group>
        <template #header>
          <vs-sidebar-item arrow class="focus:outline-none">
            <template #icon>
              <i class="bx bx-cart"></i>
            </template>
            Pembelian Produk
          </vs-sidebar-item>
        </template>
        <vs-sidebar-item :to="{ name: 'dashboard.merchandise' }" id="Merchandise" class="focus:outline-none">
          <template #icon>
            <i class="bx bxl-shopify"></i>
          </template>
          Merchandise
        </vs-sidebar-item>
        <vs-sidebar-item id="Ticket" class="focus:outline-none">
          <template #icon>
            <i class="bx bxs-purchase-tag-alt"></i>
          </template>
          Ticket
        </vs-sidebar-item>
      </vs-sidebar-group>
      <vs-sidebar-group>
        <template #header>
          <vs-sidebar-item arrow class="focus:outline-none">
            <template #icon>
              <i class="bx bx-group"></i>
            </template>
            Social media
          </vs-sidebar-item>
        </template>
        <vs-sidebar-item id="Instagram" class="focus:outline-none" href="https://instagram.com/tedxuniversitasbrawijaya" target="_blank">
          <template #icon>
            <i class="bx bxl-instagram"></i>
          </template>
           Instagram
        </vs-sidebar-item>
        <vs-sidebar-item id="twitter" class="focus:outline-none" href="https://twitter.com/TEDxBrawijaya" target="_blank">
          <template #icon>
            <i class="bx bxl-twitter"></i>
          </template>
          Twitter
        </vs-sidebar-item>
        <vs-sidebar-item id="Linkedin" class="focus:outline-none" href="https://www.linkedin.com/company/tedxuniversitasbrawijaya/" target="_blank">
          <template #icon>
            <i class="bx bxl-linkedin"></i>
          </template>
          Linkedin
        </vs-sidebar-item>
      </vs-sidebar-group>
      <template #footer>
        <vs-row justify="space-between">
          <vs-avatar color="danger" class="cursor-pointer">
            <i
              class="bx bx-power-off text-white w-full h-full inline-flex items-center justify-center"
              @click="logout"
            />
          </vs-avatar>
        </vs-row>
      </template>
    </vs-sidebar>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  data: () => ({
    active: "dashboard",
    activeSidebar: false,
  }),
  computed: {
    getRandomColor() {
      let hex = "#";
      let codes = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
      ];

      for (let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * codes.length);
        hex += codes[index];
      }

      return hex;
    },
    username() {
      return this.$store.state.user.first_name + this.$store.state.user.last_name
    },
  },
  methods: {
    logout() {
      const token = localStorage.getItem("_token");
      const uid = localStorage.getItem("_uid");

      axios.delete(
        `/audiens/${uid}/logout/${token}`
      )
        .then(({ data }) => {
          if (data.success) {
            localStorage.removeItem("_token");
            localStorage.removeItem("_uid");
            this.$store.dispatch("removeUser");
            this.$router.replace("/");
          }
        });
    },
  },
};
</script>

        