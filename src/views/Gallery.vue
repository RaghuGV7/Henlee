<template>
  <div>
    <EventGallery />
    <hr class="pb-3" />
    <EventGallery />
    <hr class="pb-3" />
    <EventGallery />
  </div>
</template>

<script>
import EventGallery from "@/components/shared/EventGallery";

export default {
  components: {
    EventGallery
  }
};
</script>
