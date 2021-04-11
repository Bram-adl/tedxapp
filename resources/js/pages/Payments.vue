<template>
  <div class="px-8 ld:px-0 container mx-auto">
    <div class="py-8 border-b">
      <div class="md:flex items-center justify-between">
        <div>
          <h1 class="font-bold text-4xl">Invoice</h1>
        </div>
        <div class="text-sm">
          <h2>
            Payment ID: <strong>{{ order.id }}</strong>
          </h2>
        </div>
      </div>
    </div>

    <div class="py-8 border-b">
      <div class="md:flex items-center justify-between">
        <div>
          <h1 class="text-xl font-bold uppercase">TEDxUniversitasBrawijaya</h1>
        </div>
        <div>
          <button
            class="px-4 py-3 border rounded text-white text-sm"
            @click="printInvoice"
          >
            Download Invoice
          </button>
        </div>
      </div>

      <div class="mt-6 text-sm text-white">
        <div class="lg:grid grid-cols-2 gap-16">
          <table class="w-full">
            <tr>
              <td class="border-b border-gray-600 py-4">Nama Depan</td>
              <td class="w-3/4 border-b border-gray-600 py-4">
                {{ user.first_name }}
              </td>
            </tr>
            <tr>
              <td class="border-b border-gray-600 py-4">Nama Belakang</td>
              <td class="w-3/4 border-b border-gray-600 py-4">
                {{ user.last_name }}
              </td>
            </tr>
            <tr>
              <td class="border-b border-gray-600 py-4">Username Akun</td>
              <td class="w-3/4 border-b border-gray-600 py-4">
                {{ user.username }}
              </td>
            </tr>
            <tr>
              <td class="border-b border-gray-600 py-4">Nama Pembeli</td>
              <td class="w-3/4 border-b border-gray-600 py-4">
                {{ order.username }}
              </td>
            </tr>
            <tr>
              <td class="border-b border-gray-600 py-4">Email Pembeli</td>
              <td class="w-3/4 border-b border-gray-600 py-4">
                {{ user.email_address }}
              </td>
            </tr>
            <tr>
              <td class="border-b border-gray-600 py-4">Kelurahan</td>
              <td class="w-3/4 border-b border-gray-600 py-4">
                {{ order.kelurahan }}
              </td>
            </tr>
            <tr>
              <td class="border-b border-gray-600 py-4">Kecamatan</td>
              <td class="w-3/4 border-b border-gray-600 py-4">
                {{ order.kecamatan }}
              </td>
            </tr>
            <tr>
              <td class="border-b border-gray-600 py-4">Kota / Kabupaten</td>
              <td class="w-3/4 border-b border-gray-600 py-4">
                {{ order.kabupaten }}
              </td>
            </tr>
            <tr>
              <td class="border-b border-gray-600 py-4">Provinsi</td>
              <td class="w-3/4 border-b border-gray-600 py-4">
                {{ order.provinsi }}
              </td>
            </tr>
          </table>
          <table class="w-full">
            <tr>
              <td class="border-b border-gray-600 py-4">Nomor Telepon</td>
              <td class="w-3/4 border-b border-gray-600 py-4">
                {{ order.nomor_telepon }}
              </td>
            </tr>
            <tr>
              <td class="border-b border-gray-600 py-4">Alamat</td>
              <td class="w-3/4 border-b border-gray-600 py-4">
                {{ order.address }}
              </td>
            </tr>
            <tr>
              <td class="border-b border-gray-600 py-4">Kode Pos</td>
              <td class="w-3/4 border-b border-gray-600 py-4">
                {{ order.kode_pos }}
              </td>
            </tr>
            <tr>
              <td class="border-b border-gray-600 py-4">Nama Produk</td>
              <td class="w-3/4 border-b border-gray-600 py-4">
                {{ order.product }}
              </td>
            </tr>
            <tr>
              <td class="border-b border-gray-600 py-4">Jumlah Produk</td>
              <td class="w-3/4 border-b border-gray-600 py-4">1</td>
            </tr>
            <tr>
              <td class="border-b border-gray-600 py-4">Warna Produk</td>
              <td class="w-3/4 border-b border-gray-600 py-4">
                {{ order.color }}
              </td>
            </tr>
            <tr>
              <td class="border-b border-gray-600 py-4">Harga Produk</td>
              <td class="w-3/4 border-b border-gray-600 py-4">
                Rp {{ order.price | formatPrice }}
              </td>
            </tr>
            <tr>
              <td class="border-b border-gray-600 py-4">Ongkos Kirim</td>
              <td class="w-3/4 border-b border-gray-600 py-4">
                Rp {{ orderFee ? orderFee.ongkir : "" | formatPrice }}
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>

    <div class="py-8 border-b">
      <div class="md:flex items-center justify-between">
        <div>
          <h1 class="text-xl font-bold uppercase">Metode Pembayaran</h1>
        </div>

        <div>
          <vs-button
            :icon="success"
            :upload="sending"
            :color="success ? 'success' : 'primary'"
            class="focus:outline-none"
          >
            <label for="payment_proof" v-if="!success">
              <i class="bx bx-mail-send"></i>
              Upload Bukti Pembayaran
            </label>

            <i class="bx bx-check" v-else></i>
          </vs-button>
          <input
            type="file"
            name="payment_proof"
            id="payment_proof"
            class="hidden"
            @change="uploadPaymentProof"
          />
        </div>
      </div>

      <div class="md:inline-grid grid-cols-2 gap-10 mt-12">
        <div
          class="inline-flex items-center justify-center px-4 py-6 rounded border cursor-pointer hover:bg-gray-50 hover:text-gray-900 transition ease-out duration-300"
        >
          <div class="text-center">
            <p>Bank Mandiri</p>
            <span class="text-sm"
              >A/N Sheila Istiningtyas Padmarini <br />
              1240007458095‬</span
            >
          </div>
        </div>
        <div
          class="inline-flex items-center justify-center px-4 py-6 rounded border cursor-pointer hover:bg-gray-50 hover:text-gray-900 transition ease-out duration-300"
        >
          <div class="text-center">
            <p>Bank BCA</p>
            <span class="text-sm"
              >A/N Sheila Istiningtyas Padmarini <br />
              3151179299
            </span>
          </div>
        </div>
      </div>
    </div>

    <div class="py-8">
      <vs-button
        block
        square
        border
        :disabled="!success"
        @click="confirmPayment"
      >
        <p class="py-4 text-sm">Konfirmasi Pembayaran</p>
      </vs-button>
    </div>
  </div>
</template>

<script>
import provincesMixins from "../mixins/provincesMixins";
import notificationMixins from "../mixins/notificationMixins";

export default {
  name: "payments",
  mixins: [provincesMixins, notificationMixins],
  data() {
    return {
      user: {},
      order: {},
      sending: false,
      success: false,
      payment_proof: null,
    };
  },
  computed: {
    orderFee() {
      return this.provinces.filter(
        (province) => province.value === this.order.provinsi
      )[0];
    },
  },
  watch: {
    payment_proof() {
      this.sending = true;
      setTimeout(() => {
        this.sending = false;
        this.success = !this.success;
      }, 2000);
    },
  },
  mounted() {
    this.fetchInvoice();
  },
  methods: {
    confirmPayment() {
      const loading = this.$vs.loading({
        background: "#000",
        color: "#fff",
        types: "circles"
      })
      
      axios
        .post(`http://localhost:8001/api/payments`, {
          user_id: this.user.id,
          order_id: this.order.id,
          payment_proof: this.payment_proof,
          status: "pending",
          total: +this.order.price + +this.orderFee.ongkir,
        })
        .then(({ data }) => {
          if (data.success) {
            loading.close()
            this.openNotification(
              "top-right",
              "success",
              "Pembayaran berhasil dilakukan!",
              "Mohon menunggu konfirmasi dari admin dalam waktu 1x24jam. Kamu dapat melihat status pembelian kamu di halaman dashboard kamu."
            )

            setTimeout(() => {
              this.$router.replace('/dashboard')
            }, 1000)
          }
        })
        .catch(({ response }) => {
          loading.close()
        });
    },
    fetchInvoice() {
      const uid = this.$route.params.id;
      const username = this.$route.params.username;
      const payment_id = this.$route.query.payment_id;

      axios
        .get(
          `http://localhost:8001/api/orders/${uid}/${username}?payment_id=${payment_id}`
        )
        .then(({ data }) => {
          if (!data.success) {
            return this.$router.replace("/");
          } else {
            this.user = data.data.user;
            this.order = data.data.order;
          }
        })
        .catch(({ response }) => {
          console.log(response.data);
        });
    },
    printInvoice() {
      window.print();
    },
    uploadPaymentProof(event) {
      const file = event.target.files[0];
      if (!file.type.startsWith("image")) {
        this.payment_proof = null
        return this.openNotification(
          "top-right",
          "danger",
          "Invalid file type!",
          "Please make sure to upload only images with .jpg, .jpeg, and .png extension!"
        );
      }

      const fileReader = new FileReader();

      fileReader.onloadend = () => {
        this.payment_proof = fileReader.result;
      };

      fileReader.readAsDataURL(file);
    },
  },
};
</script>

<style>
</style>