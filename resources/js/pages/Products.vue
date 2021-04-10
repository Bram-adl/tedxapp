<template>
  <default-layout>
    <main class="min-h-screen flex items-center justify-center">
      <div class="container mx-auto mt-16">
        <vs-row type="flex" align="center">
          <vs-col w="6">
            <carousel :per-page="1">
              <template v-if="hasVariant">
                <template v-if="form.color === 'black'">
                  <slide v-for="(img, index) in images[0].black_variant" :key="index">
                    <img :src="`/img/products/${img}`" class="w-full h-96 object-contain">
                  </slide>
                </template>
                <template v-else>
                  <slide v-for="(img, index) in images[0].white_variant" :key="index">
                    <img :src="`/img/products/${img}`" class="w-full h-96 object-contain">
                  </slide>
                </template>
              </template>
              <template v-else>
                <slide v-for="image in images" :key="image">
                  <img :src="`/img/products/${image}`" class="w-full h-96 object-contain" />
                </slide>
              </template>
            </carousel>
          </vs-col>
          <vs-col w="6">
            <div>
              <div class="my-6">
                <h1 class="font-bold text-xl text-white mb-8">
                  {{ productName }} {{ variant }}
                  <p v-if="isBundle" class="font-light text-sm opacity-50">
                    <span v-html="bundleDescription"></span>
                  </p>
                </h1>
              </div>

              <div class="my-6">
                <div class="grid grid-cols-2 gap-4">
                  <vs-input
                    label-placeholder="Name"
                    v-model="form.username"
                    type="text"
                    class="custom-input"
                  />
                  <vs-input
                    label-placeholder="Email"
                    v-model="form.email"
                    type="email"
                    class="custom-input"
                  />
                </div>
              </div>

              <div class="my-6">
                <div class="grid grid-cols-2 gap-3">
                  <vs-input
                    label-placeholder="Nomor Telepon"
                    v-model="form.nomor_telepon"
                    type="number"
                    class="custom-input"
                  />
                  <vs-input
                    label-placeholder="Alamat"
                    v-model="form.alamat"
                    type="text"
                    class="custom-input"
                  />
                </div>
              </div>

              <div class="my-6">
                <div class="grid grid-cols-3 gap-4">
                  <vs-input
                    label-placeholder="Kelurahan"
                    v-model="form.kelurahan"
                    type="text"
                    class="custom-input"
                  />
                  <vs-input
                    label-placeholder="Kecamatan"
                    v-model="form.kecamatan"
                    type="text"
                    class="custom-input"
                  />
                  <vs-input
                    label-placeholder="Kota/Kabupaten"
                    v-model="form.kota_kabupaten"
                    type="text"
                    class="custom-input"
                  />
                </div>
              </div>

              <div class="my-6">
                <div class="grid grid-cols-2 gap-4">
                  <vs-select
                    placeholder="Provinsi"
                    v-model="form.provinsi"
                    class="custom-select"
                  >
                    <vs-option
                      v-for="province in provinces"
                      :key="province.id"
                      :label="province.label"
                      :value="province.value"
                    >
                      {{ province.label }}
                    </vs-option>
                  </vs-select>
                  <vs-input
                    label-placeholder="Kode Pos"
                    v-model="form.kode_pos"
                    type="number"
                    class="custom-input"
                  />
                </div>
              </div>

              <div v-if="hasSizeChart" class="my-6">
                <div class="grid grid-cols-2 gap-4">
                  <vs-button
                    flat
                    class="focus:outline-none"
                    @click="sizeDialog = !sizeDialog"
                  >
                    Open Size Chart
                  </vs-button>
                  <vs-select
                    placeholder="Select Size"
                    v-model="form.size"
                    class="custom-select"
                  >
                    <vs-option
                      v-for="size in sizes"
                      :key="size.value"
                      :label="size.size"
                      :value="size.value"
                    >
                      {{ size.size }}
                    </vs-option>
                  </vs-select>
                </div>
              </div>

              <div v-if="hasVariant" class="my-6">
                <div class="flex items-center justify-start">
                  <vs-radio v-model="form.color" val="white">
                    <span class="text-sm text-white"> White </span>
                  </vs-radio>
                  <vs-radio v-model="form.color" val="black">
                    <span class="text-sm text-white"> Black </span>
                  </vs-radio>
                </div>
              </div>

              <div class="my-6">
                <ConfirmDialog :form-data="form" />
              </div>
            </div>

            <vs-dialog
              v-if="hasSizeChart"
              v-model="sizeDialog"
              blur
              overflow-hidden
            >
              <template #header>
                <h4 class="not-margin text-white">Size Chart</h4>
              </template>

              <SizeChartTable />
            </vs-dialog>
          </vs-col>
        </vs-row>
      </div>
    </main>
  </default-layout>
</template>

<script>
import ConfirmDialog from "../components/ConfirmDialog";
import DefaultLayout from "../layouts/default";
import productMixins from "../mixins/productMixins";
import provincesMixins from "../mixins/provincesMixins";
import SizeChartTable from "../components/SizeChartTable";
import sizesMixins from "../mixins/sizesMixins";

export default {
  name: "products.detail",
  mixins: [
    productMixins,
    provincesMixins,
    sizesMixins,
  ],
  components: {
    ConfirmDialog,
    DefaultLayout,
    SizeChartTable,
  },
  data() {
    return {
      form: {
        username: "",
        email: "",
        nomor_telepon: "",
        alamat: "",
        kelurahan: "",
        kecamatan: "",
        kota_kabupaten: "",
        provinsi: "",
        kode_pos: "",
        size: "",
        color: "white",
      },
      sizeDialog: false,
      confirmDialog: false,
    };
  },
  computed: {
    bundleDescription () {
      if (this.$route.query.tag.endsWith('_a')) {
        return `Beli Bundle A untuk mendapatkan T-Shirt, Totte Bag, dan Sticker Pack sekaligus <strong>Gratis</strong> Sticker TEDx dan potongan ongkos kirim sampai dengan Rp 15.000!`
      } else {
        return `Beli Bundle B untuk mendapatkan Totte Bag, E-Money, dan Lanyard sekaligus <strong>Gratis</strong> Sticker TEDx dan potongan ongkos kirim sampai dengan Rp 15.000!`
      }
    },
    hasSizeChart() {
      if (
        this.$route.query.tag === "tshirt" ||
        this.$route.query.tag === 'bundle_a'
      ) {
        return true;
      }
    },
    hasVariant() {
      if (
        this.$route.query.tag === "tshirt" ||
        this.$route.query.tag === "totte_bag" ||
        this.$route.query.tag.startsWith('bundle_')
      ) {
        return true;
      }
    },
    images() {
      return this.products.filter(
        (product) => product.tag === this.$route.query.tag
      )[0].images;
    },
    isBundle () {
      return this.$route.query.tag.startsWith('bundle_') ? true : false
    },
    productName() {
      return this.products.filter(
        (product) => product.tag === this.$route.query.tag
      )[0].title;
    },
    variant() {
      if (
        this.$route.query.tag === "tshirt" ||
        this.$route.query.tag === "totte_bag"
      ) {
        return `(${this.form.color === "white" ? "White" : "Black"} Variant)`;
      }
    },
  },
};
</script>

<style>
.custom-button.vs-button {
  margin: 0 !important;
}

.custom-input input.vs-input {
  width: 100% !important;
  background: #24262b;
  color: #ffffff;
}

.vs-select {
  --vs-background: 36, 38, 43;
}

.vs-select-content {
  max-width: 100% !important;
}

.vs-select__options {
  --vs-background: 36, 38, 43;
  --vs-text: 255, 255, 255;
}

.vs-select__input {
  --vs-gray-2: 36, 38, 43;
  --vs-text: 255, 255, 255;
}
</style>