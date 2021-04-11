<template>
  <div class="px-8 ld:px-0 container mx-auto">
    <div class="py-8 border-b">
      <div class="md:flex items-center justify-between">
        <div>
          <h1 class="font-bold text-4xl">Invoice</h1>
        </div>
        <div class="text-sm">
          <h2>Payment ID: <strong>1092381203981</strong></h2>
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
              <td class="w-3/4 border-b border-gray-600 py-4">Bram</td>
            </tr>
            <tr>
              <td class="border-b border-gray-600 py-4">Nama Belakang</td>
              <td class="w-3/4 border-b border-gray-600 py-4">Adl</td>
            </tr>
            <tr>
              <td class="border-b border-gray-600 py-4">Username</td>
              <td class="w-3/4 border-b border-gray-600 py-4">bramadl</td>
            </tr>
            <tr>
              <td class="border-b border-gray-600 py-4">Email Address</td>
              <td class="w-3/4 border-b border-gray-600 py-4">
                Thenamesbram@gmail.com
              </td>
            </tr>
            <tr>
              <td class="border-b border-gray-600 py-4">Kelurahan</td>
              <td class="w-3/4 border-b border-gray-600 py-4">Penggilingan</td>
            </tr>
            <tr>
              <td class="border-b border-gray-600 py-4">Kecamatan</td>
              <td class="w-3/4 border-b border-gray-600 py-4">Cakung</td>
            </tr>
            <tr>
              <td class="border-b border-gray-600 py-4">Kota / Kabupaten</td>
              <td class="w-3/4 border-b border-gray-600 py-4">Jakarta Timur</td>
            </tr>
            <tr>
              <td class="border-b border-gray-600 py-4">Provinsi</td>
              <td class="w-3/4 border-b border-gray-600 py-4">DKI Jakarta</td>
            </tr>
          </table>
          <table class="w-full">
            <tr>
              <td class="border-b border-gray-600 py-4">Nomor Telepon</td>
              <td class="w-3/4 border-b border-gray-600 py-4">081283709830</td>
            </tr>
            <tr>
              <td class="border-b border-gray-600 py-4">Alamat</td>
              <td class="w-3/4 border-b border-gray-600 py-4">
                Perumahan Aneka Elok, Blok GXI no 11
              </td>
            </tr>
            <tr>
              <td class="border-b border-gray-600 py-4">Kode Pos</td>
              <td class="w-3/4 border-b border-gray-600 py-4">19340</td>
            </tr>
            <tr>
              <td class="border-b border-gray-600 py-4">Nama Produk</td>
              <td class="w-3/4 border-b border-gray-600 py-4">T-Shirt</td>
            </tr>
            <tr>
              <td class="border-b border-gray-600 py-4">Jumlah Produk</td>
              <td class="w-3/4 border-b border-gray-600 py-4">1</td>
            </tr>
            <tr>
              <td class="border-b border-gray-600 py-4">Warna Produk</td>
              <td class="w-3/4 border-b border-gray-600 py-4">Hitam</td>
            </tr>
            <tr>
              <td class="border-b border-gray-600 py-4">Harga Produk</td>
              <td class="w-3/4 border-b border-gray-600 py-4">Rp 90.000</td>
            </tr>
            <tr>
              <td class="border-b border-gray-600 py-4">Ongkos Kirim</td>
              <td class="w-3/4 border-b border-gray-600 py-4">Rp 40.000</td>
            </tr>
          </table>
        </div>
      </div>
    </div>

    <div class="py-8 border-b">
      <div class="md:flex items-center justify-between">
        <div>
          <h1 class="text-xl font-bold uppercase">
            Metode Pembayaran
          </h1>
        </div>
      </div>

      <div class="md:inline-grid grid-cols-2 gap-10 mt-12">
        <div class="inline-block px-16 py-12 rounded border cursor-pointer hover:bg-gray-50 hover:text-gray-900 transition ease-out duration-300">
          <p class="text-center">Bank Mandiri</p>
        </div>
        <div class="inline-block px-16 py-12 rounded border cursor-pointer hover:bg-gray-50 hover:text-gray-900 transition ease-out duration-300">
          <p class="text-center">Bank BCA</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "payments",
  methods: {
    printInvoice() {
      window.print();
    },
  },
};
</script>

<style>
</style>