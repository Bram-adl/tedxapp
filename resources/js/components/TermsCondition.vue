<template>
  <div>
    <div class="fixed right-8 bottom-8">
      <vs-button
        transparent
        @click="termsDialog = !termsDialog"
      >
        Syarat dan Ketentuan
        <i class="bx bx-plus ml-2"></i>
      </vs-button>
    </div>

    <vs-dialog overflow-hidden full-screen v-model="termsDialog">
      <template #header>
        <h4 class="text-white text-4xl mt-8 mb-4">
          Syarat dan Ketentuan
        </h4>
      </template>

      <ol class="list-decimal text-white container mx-auto px-8 md:px-16 lg:px-0">
        <li class="py-3 px-4">
          Setiap akun email hanya dapat <strong>mendaftar sekali</strong>, namun
          bila saat mendaftar dan pembayaran Anda hangus, Anda dapat menggunakan
          email yang sama untuk mendaftar ulang.
        </li>
        <li class="py-3 px-4">
          Anda hanya bisa <strong>mendaftar secara online</strong> untuk menjadi
          audiens TEDx Universitas Brawijaya. Harap diingat bahwa kami tidak
          menjual secara offline.
        </li>
        <li class="py-3 px-4">
          Dengan meregistrasi TEDx Universitas Brawijaya, Anda menerima bahwa
          sebagian besar <strong>komunikasi</strong> dengan TEDx Universitas
          Brawijaya dan audiensnya akan berlangsung
          <strong>secara elektronik</strong>.
        </li>
        <li class="py-3 px-4">
          Pada saat pendaftaran, Anda diwajibkan untuk
          <strong>mengisi seluruh kolom pertanyaan</strong>.
        </li>
        <li class="py-3 px-4">
          Harap teliti saat mengisi data pribadi dan
          <strong>diisi sebenar-benarnya</strong>.
        </li>
        <li class="py-3 px-4">
          TEDx Universitas Brawijaya
          <strong
            >tidak akan memberikan atau memperjualbelikan informasi pengguna
            kepada pihak ketiga</strong
          >.
        </li>
        <li class="py-3 px-4">
          Anda wajib
          <strong
            >melaporkan kepada Kami jika Anda, atas sebab apapun, kehilangan
            kendali atas akun Anda.</strong
          >
        </li>
        <li class="py-3 px-4">
          Anda
          <strong
            >bertanggung jawab terhadap penggunaan atau penyalahgunaan</strong
          >
          yang dilakukan oleh akun Anda.
        </li>
        <li class="py-3 px-4">
          <strong>
            Anda dilarang untuk membahayakan, menyalahgunakan, mengubah, atau
            memodifikasi Website dengan data apapun, termasuk menyebarkan virus,
            worm, spyware, maupun kode komputer lainnya, file, teknologi, atau
            program yang ditujukan untuk merusak maupun mengambil alih
            pengoperasian hardware dan/atau perlengkapan telekomunikasi.
          </strong>
        </li>
        <li class="py-3 px-4">
          Anda
          <strong
            >dilarang untuk mengambil atau mengumpulkan Data Pribadi dari pengguna
            lain</strong
          >.
        </li>
      </ol>
    </vs-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      termsDialog: false,
    }
  }
};
</script>

<style>
.vs-dialog {
  background: rgb(30,32,35) !important;
}
</style>