<template>
  <vs-card-group>
    <vs-card
      v-for="product in products"
      :key="product.id"
      @click="redirectToProductDetailPage(product)"
    >
      <template #title>
        <h3>{{ product.title }}</h3>
      </template>
      <template #img>
        <img
          v-for="(img, index) in product.img_urls"
          :key="index"
          :src="`/img/products/${img}`"
          :alt="product.tag"
          class="w-full h-full object-contain"
        />
      </template>
      <template #text>
        <p>Rp {{ product.price | formatPrice }}</p>
      </template>
      <template #interactions>
        <vs-button v-if="product.available" gradient style="min-width: 60px" warn animation-type="scale">
          <i class="bx bxs-shopping-bag"></i>
          <template #animate> Beli </template>
        </vs-button>
        <vs-button v-else gradient style="min-width: 60px" danger animation-type="scale">
          <i class="bx bxs-shopping-bag"></i>
          <template #animate> Sold Out </template>
        </vs-button>
      </template>
    </vs-card>
  </vs-card-group>
</template>

<script>
import productMixins from "../mixins/productMixins"

export default {
  name: "Products",
  mixins: [
    productMixins
  ],
  methods: {
    redirectToProductDetailPage(product) {
      const { link_to, available } = product
      if (available) {
        this.$router.push(link_to);
      }
    },
  }
};
</script>

<style>
</style>