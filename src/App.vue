<template>
  <div id="app">
    <Header />
    <main class="main-container">
      <fade-transition origin="center" mode="out-in" :duration="150">
        <router-view />
      </fade-transition>
    </main>
    <Footer />
  </div>
</template>
<script>
import { FadeTransition } from "vue2-transitions";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  components: {
    FadeTransition,
    Header,
    Footer
  }
};
</script>
