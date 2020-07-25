<template>
  <div class="row mt-2">
    <div class="col-12">
      <div>
        <h2 class="text-primary">Upcoming Events</h2>
        <hr />
        <EventCard />
        <EventCard />
        <p>
          <a href>
            More Events
            <i class="fas fa-external-link-alt" aria-hidden="true"></i>
          </a>
        </p>
      </div>
    </div>
    <div class="col-12">
      <div>
        <h2 class="text-primary">Upcoming Sessions</h2>
        <hr />
        <SessionCard />
        <SessionCard />
        <p>
          <a href>
            More Sessions
            <i class="fas fa-external-link-alt" aria-hidden="true"></i>
          </a>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import EventCard from "@/components/shared/EventCard";
import SessionCard from "@/components/shared/SessionCard";

export default {
  components: {
    EventCard,
    SessionCard
  }
};
</script>
