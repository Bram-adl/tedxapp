<template>
  <vs-card-group>
    <vs-card
      v-for="product in products"
      :key="product.id"
      @click="redirectToProductDetailPage(product.link_to)"
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
        <vs-button gradient style="min-width: 60px" warn animation-type="scale">
          <i class="bx bxs-shopping-bag"></i>
          <template #animate> Beli </template>
        </vs-button>
      </template>
    </vs-card>
  </vs-card-group>
</template>

<script>
export default {
  name: "Products",
  data () {
    return {
      products: [
        {
          id: 0,
          title: 'T-Shirt',
          price: 90000,
          img_urls: [
            'tshirt_black_front.png'
          ],
          tag: 'tshirt',
          link_to: '/products/detail?tag=tshirt'
        },
        {
          id: 1,
          title: 'Totte Bag',
          price: 60000,
          img_urls: [
            'totte_bag_black_front.png'
          ],
          tag: 'totte_bag',
          link_to: '/products/detail?tag=totte_bag'
        },
        {
          id: 2,
          title: 'E Money',
          price: 50000,
          img_urls: [
            'e_money_front.png'
          ],
          tag: 'e_money',
          link_to: '/products/detail?tag=e_money'
        },
        {
          id: 5,
          title: 'Sticker',
          price: 25000,
          img_urls: [
            'sticker.png'
          ],
          tag: 'sticker',
          link_to: '/products/detail?tag=sticker'
        },
        {
          id: 6,
          title: 'Lanyard',
          price: 25000,
          img_urls: [
            'lanyard.png'
          ],
          tag: 'lanyard',
          link_to: '/products/detail?tag=lanyard'
        },
        {
          id: 7,
          title: 'Bundle A',
          price: 160000,
          img_urls: [
            'tshirt_black_front.png',
            'totte_bag_black_front.png',
            'sticker.png'
          ],
          tag: 'bundle_a',
          link_to: '/products/detail?tag=bundle_a'
        },
        {
          id: 8,
          title: 'Bundle B',
          price: 120000,
          img_urls: [
            'totte_bag_white_front.png',
            'e_money_front.png',
            'lanyard.png'
          ],
          tag: 'bundle_a',
          link_to: '/products/detail?tag=bundle_a'
        },
      ]
    }
  },
  filters: {
    formatPrice(price) {
      let reverse = price.toString().split("").reverse().join("");
      let ribuan = reverse.match(/\d{1,3}/g);
      ribuan = ribuan.join(".").split("").reverse().join("");

      return ribuan;
    },
  },
  methods: {
    redirectToProductDetailPage(link) {
      this.$router.push(link);
    },
  }
};
</script>

<style>
</style>