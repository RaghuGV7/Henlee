<template>
  <b-navbar toggleable="lg" type="dark" variant="transparent" class="navbar-bg">
    <div class="container">
      <!-- <b-navbar-brand to="/" class="p-0">
          <img src="@/assets/logo 2.png" class="brand-logo" />
        </b-navbar-brand> -->
      <b-navbar-brand to="/" class="p-0">
        <h2>Henlee</h2>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-navbar-nav class="ml-auto">
            <b-nav-item to="/" right><i class="fa fa-home"></i></b-nav-item>
            <b-nav-item to="/events" right>Events</b-nav-item>
            <b-nav-item right to="/gallery">Gallery</b-nav-item>
            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template v-slot:button-content>Sessions</template>
              <b-dropdown-item href="#">Learn Kananda</b-dropdown-item>
              <b-dropdown-item href="#">Cultural</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item right to="/contact">Contact Us</b-nav-item>
          </b-navbar-nav>
        </b-navbar-nav>
      </b-collapse>
    </div>
  </b-navbar>
</template>

<script>
export default {};
</script>

<style></style>
