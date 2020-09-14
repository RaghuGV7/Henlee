<template>
  <div class="home">
    <Hero />
    <Services />
    <About />
    <Technologies />
    <ContactUs />
  </div>
</template>

<script>
// import Carousal from "@/components/Carousal";
import Hero from "@/components/Hero";
import ContactUs from "@/components/ContactUs";
import About from "@/components/About";
import Technologies from "@/components/Technologies";
import Services from "@/components/Services";
export default {
  name: "Home",
  components: {
    Hero,
    Services,
    Technologies,
    About,
    ContactUs
  }
};
</script>
