<template>
  <div>
    <vs-button
      animation-type="vertical"
      block
      :disabled="hasError"
      flat
      gradient
      square
      class="custom-button"
      @click="confirmDialog = !confirmDialog"
    >
      <p class="py-2 px-3 text-md">Lanjutkan Pembayaran</p>
      <template #animate> <i class="bx bx-mail-send"></i> Send </template>
    </vs-button>

    <vs-dialog not-center v-model="confirmDialog" width="576px">
      <template #header>
        <h4 class="px-4 text-center text-white font-bold mt-6">Mohon periksa kembali informasi anda!</h4>
      </template>

      <div class="con-content px-4">
        <table class="text-white">
          <tr>
            <td class="py-2">Nama</td>
            <td class="px-4">:</td>
            <td class="py-2">{{ formData.username }}</td>
          </tr>
          <tr>
            <td class="py-2">Email</td>
            <td class="px-4">:</td>
            <td class="py-2">{{ formData.email }}</td>
          </tr>
          <tr>
            <td class="py-2">Nomor Telepon</td>
            <td class="px-4">:</td>
            <td class="py-2">{{ formData.nomor_telepon }}</td>
          </tr>
          <tr>
            <td class="py-2">Alamat</td>
            <td class="px-4">:</td>
            <td class="py-2">{{ formData.alamat }}</td>
          </tr>
          <tr>
            <td class="py-2">Kelurahan</td>
            <td class="px-4">:</td>
            <td class="py-2">{{ formData.kelurahan }}</td>
          </tr>
          <tr>
            <td class="py-2">Kecamatan</td>
            <td class="px-4">:</td>
            <td class="py-2">{{ formData.kecamatan }}</td>
          </tr>
          <tr>
            <td class="py-2">Kota / Kabupaten</td>
            <td class="px-4">:</td>
            <td class="py-2">{{ formData.kota_kabupaten }}</td>
          </tr>
          <tr>
            <td class="py-2">Provinsi</td>
            <td class="px-4">:</td>
            <td class="py-2">{{ formData.provinsi }}</td>
          </tr>
          <tr>
            <td class="py-2">Kode Pos</td>
            <td class="px-4">:</td>
            <td class="py-2">{{ formData.kode_pos }}</td>
          </tr>
          <tr>
            <td class="py-2">Size</td>
            <td class="px-4">:</td>
            <td class="py-2">{{ formData.size }}</td>
          </tr>
          <tr>
            <td class="py-2">Color</td>
            <td class="px-4">:</td>
            <td class="py-2">{{ formData.color }}</td>
          </tr>
        </table>
      </div>

      <template #footer>
        <div class="con-footer flex flex-row items-center justify-end">
          <vs-button @click="proceedPayment" transparent> Ok </vs-button>
          <vs-button @click="confirmDialog = false" dark transparent>
            <span class="text-white">Cancel</span>
          </vs-button>
        </div>
      </template>
    </vs-dialog>
  </div>
</template>

<script>
export default {
  name: 'ConfirmDialog',
  props: {
    formData: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      confirmDialog: false,
    }
  },
  computed: {
    hasError() {
      for (let property in this.formData) {
        if (!this.formData[property].trim().length) {
          return true;
        }
      }

      return false;
    },
  },
  methods: {
    proceedPayment () {
      const loading = this.$vs.loading({
        background: '#000',
        color: '#fff',
        type: 'circles'
      })
      setTimeout(() => {
        loading.close()
      }, 1000)
    }
  }
};
</script>

<style scoped>
.vs-dialog {
  --vs-text-color: 255, 255, 255;
}
</style>