<template>
  <vs-dialog v-model="registerDialog" blur overflow-hidden>
    <template #header>
      <h4 class="not-margin text-white">
        Welcome to <b>TEDxUniversitasBrawijaya</b>
      </h4>
    </template>

    <div class="con-form">
      <vs-input
        v-model="registerForm.firstName"
        type="text"
        placeholder="First Name *"
      >
        <template #icon>
          <i class="bx bxs-user" />
        </template>
      </vs-input>
      <div v-if="hasError.first_name" class="text-xs text-red-400 mb-2">
        {{ hasError.first_name }}
      </div>
      
      <vs-input
        v-model="registerForm.lastName"
        type="text"
        placeholder="Last Name"
      >
        <template #icon>
          <i class="bx bxs-user" />
        </template>
      </vs-input>
      
      <vs-input v-model="registerForm.email" type="email" placeholder="Email *">
        <template #icon> @ </template>
      </vs-input>
      <div v-if="hasError.email_address" class="text-xs text-red-400 mb-2">
        {{ hasError.email_address }}
      </div>

      <vs-input
        type="password"
        v-model="registerForm.password"
        placeholder="Password *"
      >
        <template #icon>
          <i class="bx bxs-lock" />
        </template>
      </vs-input>
      <div v-if="hasError.password" class="text-xs text-red-400 mb-2">
        {{ hasError.password }}
      </div>
      
      <div class="flex">
        <vs-checkbox v-model="registerForm.agree">
          <small class="text-white">I agree with the terms & conditions</small>
        </vs-checkbox>
      </div>
    </div>

    <template #footer>
      <div class="footer-dialog">
        <vs-button :disabled="!registerForm.agree" block class="focus:outline-none" @click="register">
          Register
        </vs-button>
      </div>
    </template>
  </vs-dialog>
</template>

<script>
import dialogMixins from "../mixins/dialogMixins";
import notificationMixins from "../mixins/notificationMixins";

export default {
  name: "RegisterForm",
  mixins: [dialogMixins, notificationMixins],
  data() {
    return {
      hasError: {},
    };
  },
  methods: {
    async register() {
      const loading = this.$vs.loading({
        background: "#000",
        color: "#fff",
        type: "circles",
      });
      try {
        const { data } = await axios.post("/auth/register", {
          first_name: this.registerForm.firstName,
          last_name: this.registerForm.lastName,
          email_address: this.registerForm.email,
          password: this.registerForm.password,
        });

        if (data.success) {
          loading.close();
          this.openNotification("top-right", "primary", "Account Registered Successfully!", "Please sign in to your account!");
        }
      } catch ({ response }) {
        loading.close();
        this.hasError = response.data.errors;
      }
    },
  },
};
</script>

<style></style>
