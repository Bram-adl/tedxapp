<template>
  <div class="pt-40 pb-20 h-screen overflow-auto">
    <div class="container mx-auto">
      <div class="md:grid grid-cols-3 gap-12">
        <vs-card v-for="merchandise in merchandises" :key="merchandise.id" class="tx-vs-card">
          <template #title>
            <h3>{{ merchandise.product }}</h3>
          </template>
          <template #img>
            <div v-for="(img, index) in getImage(merchandise.id)" :key="index">
              <img
                :src="img"
              />
              {{ img }}
            </div>
          </template>
          <template #text>
            <p>Rp {{ merchandise.price | formatPrice }}</p>
          </template>
          <template #interactions>
            <vs-button
              gradient
              style="min-width: 60px"
              :danger="merchandise.status === 'declined'"
              :warn="merchandise.status === 'pending'"
              :success="merchandise.status === 'confirmed'"
              animation-type="scale"
            >
              <span>Check Status</span>
              <template #animate>
                {{ merchandise.status }}
              </template>
            </vs-button>
          </template>
        </vs-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Merchandise",
  data() {
    return {
      merchandises: []
    }
  },
  created() {
    this.fetchProducts()
  },
  methods: {
    fetchProducts() {
      const userId = localStorage.getItem('_uid');
      
      axios.get(`/audiens/${userId}/orders`)
        .then(({ data }) => {
          this.merchandises = data.merchandises
        })
        .catch(({ response }) => {
          console.log(response.data)
        })
    },
    getImage(id) {
      const merchandise = this.merchandises.filter(merchandise => merchandise.id === id)[0]

      if (merchandise.product === "T-Shirt") {
        return merchandise.color === "black"
          ? ['/img/products/tshirt_black_front.png']
          : ['/img/products/tshirt_white_front.png']
      } else if (merchandise.product === "Totte Bag") {
        return merchandise.color === "black"
          ? ['/img/products/totte_bag_black_front.png']
          : ['/img/products/totte_bag_white_front.png']
      } else if (merchandise.product === "E Money") {
        return ['/img/products/e_money_front.png']
      } else if (merchandise.product === "Sticker") {
        return ['/img/products/sticker.png']
      } else if (merchandise.product === "Lanyard") {
        return ['/img/products/lanyard.png']
      } else if (merchandise.product === "Bundle A") {
        return merchandise.color === "black"
          ? [
              '/img/products/tshirt_black_front.png',
              '/img/products/totte_bag_black_front.png',
              '/img/products/sticker.png',
            ]
          : [
              '/img/products/tshirt_white_front.png',
              '/img/products/totte_bag_white_front.png',
              '/img/products/sticker.png',
            ]
      } else if (merchandise.product === "Bundle B") {
        return merchandise.color === "black"
          ? [
              '/img/products/totte_bag_black_front.png',
              '/img/products/e_money_front.png',
              '/img/products/lanyard.png',
            ]
          : [
              '/img/products/totte_bag_white_front.png',
              '/img/products/e_money_front.png',
              '/img/products/lanyard.png',
            ]
      }
    }
  }
};
</script>

<style>
.tx-table {
  width: 100%;
  text-align: center;
}
.tx-table th {
  background-color: rgb(160, 8, 8);
  padding: 1rem;
}
.tx-table td {
  padding: 1rem;
  border-bottom: 1px solid white;
  width: 400px;
}

.tx-vs-card {
  width: 300px;
  margin-left: 50px;
}
</style>