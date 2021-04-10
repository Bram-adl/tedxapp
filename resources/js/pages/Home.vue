<template>
  <default-layout>
    <LoginForm />
    <RegisterForm />

    <main class="h-screen flex items-center justify-center">
      <div class="md:w-full lg:w-1/2 text-center">
        <div class="my-8 px-8 md:px-0 md:w-3/4 mx-auto">
          <h1 class="ml1 text-4xl md:text-8xl text-white font-extralight">
            <span class="text-wrapper w-full">
              <span class="line line1"></span>
              <span class="letters"
                >Gerai Sorai</span
              >
              <span class="line line2"></span>
            </span>
          </h1>
        </div>

        <div class="my-4 px-8 md:px-0 md:w-3/4 mx-auto">
          <p class="ml12 text-xs md:text-base text-white font-light">
            Keinginan kami untuk terkoneksi denganmu kami wujudkan dalam Gerai
            Sorai. Ramaikan perayaan ini dengan membeli Merchandise
            TEDxUniversitasBrawijaya!
          </p>
        </div>

        <div class="flex justify-center">
          <transition name="fade">
            <vs-button
              v-show="animationDone"
              class="focus:outline-none cursor-pointer"
              gradient
            >
              Beli Sekarang!
            </vs-button>
          </transition>
        </div>
      </div>
    </main>
  </default-layout>
</template>

<script>
import DefaultLayout from "../layouts/default";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";

export default {
  name: "Home",
  components: {
    DefaultLayout,
    LoginForm,
    RegisterForm,
  },
  data () {
    return {
      animationDone: false
    }
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

      var subtitle = document.querySelector('.ml12');
      subtitle.innerHTML = subtitle.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

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
        })
        
      anime
        .timeline({ loop: false})
        .add({
          targets: ".ml12 .letter",
          translateX: [40, 0],
          translateZ: 0,
          opacity: [0, 1],
          easing: "easeOutExpo",
          duration: 1000,
          delay: (el, i) => 10 * i,
          complete: () => {
            this.animationDone = !this.animationDone
          }
        })
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
</style>
