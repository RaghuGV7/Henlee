<template>
  <div>
    <h2 class="text-primary">Upcoming Events</h2>
    <hr />
    <EventCard />
    <EventCard />

    <h2 class="text-primary">Recent Events</h2>
    <hr />
    <EventCard />
    <EventCard />
    <EventCard />
    <EventCard />
  </div>
</template>

<script>
import EventCard from "@/components/shared/EventCard";
export default {
  components: {
    EventCard
  }
};
</script>
