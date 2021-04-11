<template>
  <div>
    <vs-alert :hidden-content.sync="questionOne">
      <template #title>
        Dimana merchandise TEDxUniversitasBrawijaya dapat dibeli?
      </template>
      <div>
        Merchandise bisa didapatkan di halaman website kami
        www.tedxuniversitasbrawijaya.com/merch
      </div>
    </vs-alert>
    <vs-alert :hidden-content.sync="questionTwo">
      <template #title>
        Dapatkah saya mengembalikan barang?
      </template>
      <div>
        Barang yang sudah dibeli tidak dapat dikembalikan.
      </div>
    </vs-alert>
    <vs-alert :hidden-content.sync="questionThree">
      <template #title>
        Ada berapa banyak produk merchandise TEDxUniversitasBrawijaya?
      </template>
      <div>
        Ada 5 produk yaitu t-shirt, tote bag, sticker pack, lanyard, dan E-money. <br>
        Jika Anda memiliki keluhan tentang pelayanan atau produk kami silakan hubungi narahubung terkait.
      </div>
    </vs-alert>
    <vs-alert :hidden-content.sync="questionFour">
      <template #title>
        Kenapa ada produk di website yang tidak bisa saya beli online?
      </template>
      <div>
        Sebagian besar rangkaian produk TEDxUniversitasBrawijaya tersedia di toko online kami. Namun, hanya produk dengan stok yang tersedia yang akan muncul dengan tombol “Beli Sekarang”. 
      </div>
    </vs-alert>
    <vs-alert :hidden-content.sync="questionFive">
      <template #title>
        Bagaimana cara mengembalikan atau menukarkan barang?
      </template>
      <div>
        Barang yang sudah dibeli tidak dapat dikembalikan.
      </div>
    </vs-alert>
    <vs-alert :hidden-content.sync="questionSix">
      <template #title>
        Metode pembayaran apa saja yang bisa dilakukan?
      </template>
      <div>
        Anda dapat membayar dengan metode transfer ke Bank Mandiri dan Bank BCA.
      </div>
    </vs-alert>
    <vs-alert :hidden-content.sync="questionSeven">
      <template #title>
        Berapa lama pesanan saya akan sampai?
      </template>
      <div>
        Pengiriman berlangsung dalam waktu 8 hingga 10 hari kerja sejak waktu pre-order berakhir. Waktu pengiriman dapat bervariasi sesuai dengan tujuan Anda.
      </div>
    </vs-alert>
    <vs-alert :hidden-content.sync="questionEight">
      <template #title>
        Jika saya ada kendala, ke mana saya harus menghubungi?
      </template>
      <div>
        Perihal kendala dalam pemesanan, Anda bisa menghubungi Sheila melalui Whatsapp: +62 812-8737-4970 atau melalui email kami <a href="mailto:tedxbrawijaya@gmail.com">tedxbrawijaya@gmail.com</a>
      </div>
    </vs-alert>
  </div>
</template>

<script>
export default {
  name: "FAQs",
  data () {
    return {
      questionOne: true,
      questionTwo: true,
      questionThree: true,
      questionFour: true,
      questionFive: true,
      questionSix: true,
      questionSeven: true,
      questionEight: true,
    }
  }
};
</script>

<style>
</style>