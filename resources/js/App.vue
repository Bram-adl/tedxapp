<template>
  <div class="app">
    <transition name="fade">
      <router-view v-if="active" />
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      active: false
      // active: true,
    };
  },
  mounted() {
    this.pageLoading()
    this.checkAuth()
  },
  methods: {
    checkAuth() {
      const token = localStorage.getItem('_token')
      const uid = localStorage.getItem('_uid')
      if (token && uid) {
        this.storeUser(token, uid)
      }
    },
    pageLoading() {
      const loading = this.$vs.loading({
        background: "#000",
        color: "#fff",
        type: "circles",
      });
      setTimeout(() => {
        loading.close();
        this.active = true;
      }, 3000);
    },
    storeUser(token, uid) {
      axios.get(`/audiens/${uid}/verify/${token}`)
        .then(({ data }) => {
          if (data.success) {
            this.$store.dispatch("storeUser", data.data)
          }
        })
    },
  },
};
</script>

<style lang="scss">
.app {
  background: #18191c;
  font-family: "Poppins", sans-serif;
  min-height: 100vh;
}

.not-margin {
  margin: 0px;
  font-weight: normal;
  padding: 10px;
}
.con-form {
  width: 100%;

  .flex {
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      font-size: 0.8rem;
      opacity: 0.7;

      &:hover {
        opacity: 1;
      }
    }
  }

  .vs-checkbox-label {
    font-size: 0.8rem;
  }

  .vs-input-content {
    margin: 10px 0px;
    width: calc(100%);

    .vs-input {
      width: 100%;
    }
  }
}

.footer-dialog {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: calc(100%);

  .new {
    margin: 0px;
    margin-top: 20px;
    padding: 0px;
    font-size: 0.7rem;

    a {
      color: rgba(var(--vs-primary), 1) !important;
      margin-left: 6px;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .vs-button {
    margin: 0px;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: 0.4s ease-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
