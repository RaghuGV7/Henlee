<template>
  <div class="home">
    <carousal />
    <Upcoming />
  </div>
</template>

<script>
import Carousal from "@/components/Carousal";
import Upcoming from "@/components/Upcoming";
export default {
  name: "Home",
  components: {
    Carousal,
    Upcoming
  }
};
</script>
