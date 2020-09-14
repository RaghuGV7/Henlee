<template>
  <b-navbar toggleable="lg" fixed="top" type="light" class="navbar-bg">
    <div class="top-logo"></div>
    <b-navbar-brand to="/" class="p-0">
      <h2 class="brand-title">Henlee Ltd</h2>
      <!-- <small class="brand-caption">The Data Service Provider</small> -->
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#home" right>Home</b-nav-item>
          <b-nav-item-dropdown right>
            <template v-slot:button-content>Services</template>
            <b-dropdown-item href="#services"><i class="fa fa-angle-double-up"></i> Business Process Improvement</b-dropdown-item>
            <b-dropdown-item href="#"><i class="fa fa-wrench"></i> Change Management</b-dropdown-item>
            <b-dropdown-item href="#"><i class="fa fa-cogs"></i> ERP Implementations</b-dropdown-item>
            <b-dropdown-item href="#"><i class="fa fa-chart-line"></i> Data Management & Business Intelligence</b-dropdown-item>
            <b-dropdown-item href="#"><i class="fa fa-sync"></i> Data Integrations</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item-dropdown right>
            <template v-slot:button-content>Technologies</template>
            <b-dropdown-item href="#">Microsoft Dynamics AX 2012</b-dropdown-item>
            <b-dropdown-item href="#">Microsoft Dynamics 365 F&O</b-dropdown-item>
            <b-dropdown-item href="#">Microsoft Dynamics 365 Sales</b-dropdown-item>
            <b-dropdown-item href="#">Microsoft Dynamics 365 Field Service</b-dropdown-item>
            <b-dropdown-item href="#">Power BI</b-dropdown-item>
            <b-dropdown-item href="#">SQL Services</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item right href="#contact">Contact</b-nav-item>
          <b-nav-item right href="#about">About Us</b-nav-item>
        </b-navbar-nav>
      </b-navbar-nav>
    </b-collapse>
    <!-- <div class="container">
      <b-navbar-brand to="/" class="p-0">
          <img src="@/assets/logo 2.png" class="brand-logo" />
        </b-navbar-brand>
    </div> -->
  </b-navbar>
</template>

<script>
export default {};
</script>

<style></style>
