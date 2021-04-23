<template>
  <default-layout>
    <!-- Main Section -->
    <main
      class="h-screen flex items-center justify-center"
      style="background: linear-gradient(to bottom, #18191c, #0d0e0f)"
    >
      <div class="px-8 md:px-0 md:w-3/4 lg:w-1/2 mx-auto text-center">
        <div>
          <h2 class="ml12 text-xs md:text-base text-white font-light">
            TEDxUniversitasBrawijaya
          </h2>
        </div>
      
        <div class="my-8">
          <h1 class="ml1 text-4xl md:text-8xl text-white font-extralight">
            <span class="text-wrapper w-full">
              <span class="line line1"></span>
              <span class="letters">Gerai Sorai</span>
              <span class="line line2"></span>
            </span>
          </h1>
        </div>

        <div class="my-4">
          <p class="ml12 text-xs md:text-base text-white font-light">
            Keinginan kami untuk terkoneksi denganmu kami wujudkan dalam Gerai
            Sorai. Ramaikan perayaan ini dengan membeli Merchandise
            TEDxUniversitasBrawijaya!
          </p>
        </div>

        <div class="flex justify-center">
          <transition name="fade">
            <div v-if="animationDone">
              <vs-button
                class="focus:outline-none cursor-pointer"
                gradient
                square
              >
                <a href="#products" class="px-8 py-2 text-md">
                  Beli Sekarang!
                </a>
              </vs-button>
            </div>
          </transition>
        </div>
      </div>
    </main>
    <!-- ./Main Section -->

    <!-- Products Section -->
    <section id="products" style="background: linear-gradient(to bottom, #0d0e0f, #18191c)">
      <div class="container mx-auto">
        <vs-row class="pb-5 pt-10">
          <vs-col type="flex" justify="center" vs-align="center" w="12">
            <h1 class="px-8 py-4 text-4xl text-white font-bold">
              Daftar Produk Kami
              <div class="mt-4 bg-red-800 rounded-md px-4 py-3 text-white font-bold uppercase text-center text-sm">
                Closed Order
              </div>
            </h1>
          </vs-col>
        </vs-row>

        <vs-row class="pt-5 pb-10">
          <vs-col type="flex" justify="center" vs-align="center" w="12">
            <Products />
          </vs-col>
        </vs-row>
      </div>
    </section>
    <!-- ./Products Section -->

    <!-- FAQs -->
    <section class="min-h-screen" style="background: #18191c">
      <div class="container mx-auto">
        <vs-row class="pb-5 pt-10">
          <vs-col type="flex" justify="center" vs-align="center" w="12">
            <h1 class="px-8 py-4 text-4xl text-white font-bold">FAQs</h1>
          </vs-col>
        </vs-row>

        <vs-row class="pt-5 pb-10">
          <vs-col>
            <FAQs />
          </vs-col>
        </vs-row>
      </div>
    </section>
    <!-- ./FAQs -->

    <TermsCondition />
  </default-layout>
</template>

<script>
import DefaultLayout from "../layouts/default";
import FAQs from "../components/FAQs";
import Products from "../components/Products";
import TermsCondition from "../components/TermsCondition"

export default {
  name: "Home",
  components: {
    DefaultLayout,
    FAQs,
    Products,
    TermsCondition
  },
  data() {
    return {
      animationDone: false,
    };
  },
  mounted() {
    this.runAnimation();
  },
  methods: {
    runAnimation() {
      var title = document.querySelector(".ml1 .letters");
      title.innerHTML = title.textContent.replace(
        /\S/g,
        "<span class='letter'>$&</span>"
      );

      var subtitle = document.querySelector(".ml12");
      subtitle.innerHTML = subtitle.textContent.replace(
        /\S/g,
        "<span class='letter'>$&</span>"
      );

      anime
        .timeline({ loop: false })
        .add({
          targets: ".ml1 .letter",
          scale: [0.3, 1],
          opacity: [0, 1],
          translateZ: 0,
          easing: "easeOutExpo",
          duration: 1000,
          delay: (el, i) => 70 * (i + 1),
        })
        .add({
          targets: ".ml1 .line",
          scaleX: [0, 1],
          opacity: [0.5, 1],
          easing: "easeOutExpo",
          duration: 800,
          offset: "-=875",
          delay: (el, i, l) => 80 * (l - i),
        });

      anime.timeline({ loop: false }).add({
        targets: ".ml12 .letter",
        translateX: [40, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 1000,
        delay: (el, i) => 10 * i
      });

      setTimeout(() => {
        this.animationDone = true
      }, 1000)
    },
  },
};
</script>

<style>
.ml1 .letter {
  display: inline-block;
  font-family: "Poppins", sans-serif;
}

.ml1 .text-wrapper {
  position: relative;
  display: inline-block;
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.ml1 .line {
  opacity: 0;
  position: absolute;
  left: 0;
  height: 1px;
  width: 100%;
  background-color: #fff;
  transform-origin: 0 0;
}

.ml1 .line1 {
  top: 0;
}
.ml1 .line2 {
  bottom: 0;
}

.ml12 .letter {
  display: inline-block;
  line-height: 1em;
}

.vs-card__img {
  height: 250px !important;
}
</style>
