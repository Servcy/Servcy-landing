<template>
  <section id="why-servcy">
    <div class="wave-block text-center">
      <div class="servcy-sub-headline-font s-bold font-castoro pt-10 pb-6">
        Why Servcy, you ask?
      </div>
      <div class="s-subheading why-servcy-desc s-semibold font-castoro pb-6">
        Because we understand the true challenges you face while onboarding
        clients, sending invoices, communicating, managing project timelines,
        managing contracts and more.
      </div>
      <div class="d-flex flex-row align-center justify-center">
        <img
          src="@/assets/icons/servcy-universe.svg"
          alt="servcy universe"
          width="80%"
          height="80%"
        />
      </div>
    </div>
    <div class="d-flex flex-wrap align-center justify-center">
      <v-sheet
        color="white"
        elevation="2"
        :height="$vuetify.breakpoint.smAndDown ? '' : '430px'"
        width="350px"
        rounded="xl"
        class="pa-6 card-bounce ma-4 text-center"
      >
        <img
          src="@/assets/icons/calendly-logo.svg"
          alt="gear"
          class="mx-auto d-block align-items-center"
          width="100px"
        />
        <div class="dark--text s-title s-bold mt-3">
          Schedule meetings with less back and forth
        </div>
        <div class="dark--text mt-6 s-body">
          Simply set your availability and share your link so clients can find a
          time that works. Your clients will thank (and book) you.
        </div>
        <div class="dark--text mt-4 s-body">
          Meeting with your client increases your chances of winning their
          business by 40%
        </div>
      </v-sheet>
      <v-sheet
        color="white"
        elevation="2"
        :height="$vuetify.breakpoint.smAndDown ? '' : '450px'"
        width="350px"
        rounded="xl"
        class="pa-6 ma-4 card-bounce text-center"
      >
        <img
          src="@/assets/icons/gear.svg"
          alt="gear"
          class="mx-auto d-block align-items-center"
          width="100px"
        />
        <div class="dark--text s-title s-bold mt-3">
          All-In-One Place. Consolidate Your Software Stack
        </div>
        <div class="dark--text mt-6 s-body">
          One login. One platform. One software. No more splitting your efforts
          throughout multiple apps just because your clients are on different
          platforms.
        </div>
        <div class="dark--text mt-4 s-body">
          Manage finances, tasks, projects, and take your business to next
          level.
        </div>
      </v-sheet>
      <v-sheet
        color="white"
        elevation="2"
        :height="$vuetify.breakpoint.smAndDown ? '' : '430px'"
        width="350px"
        rounded="xl"
        class="pa-6 ma-4 card-bounce text-center"
      >
        <img
          src="@/assets/icons/client-face.svg"
          alt="gear"
          class="mx-auto d-block align-items-center"
          width="100px"
        />
        <div class="dark--text s-title s-bold mt-3">
          Keep Your Clients Always Up-To-Date
        </div>
        <div class="dark--text mt-6 s-body">
          Eliminate another client concern 'what are you working on?' with the
          Client Dashboard: an instant and intuitive way for your client to
          check on work progress, tasks, projects, results and more.
        </div>
        <div class="dark--text mt-4 s-body">
          Reduce unnecessary communication and increase your client's
          satisfaction. No more manual updates or pestering emails.
        </div>
      </v-sheet>
    </div>
  </section>
</template>

<script>
export default {
  name: "WhyServcy",
};
</script>

<style scoped>
#why-servcy {
  margin-bottom: 50px;
}
.why-servcy-desc {
  padding-left: 10%;
  padding-right: 10%;
  letter-spacing: 0.08em !important;
}
.why-servcy-padding-x {
  padding-left: 5%;
  padding-right: 5%;
}
.wave-block {
  margin-bottom: 50px;
  background-image: url("@/assets/icons/wave.svg");
  background-repeat: no-repeat;
  background-size: cover;
}
.card-bounce {
  transition: 0.6s cubic-bezier(0.47, 2.02, 0.31, -0.36);
}
.card-bounce:hover,
.card-bounce:focus,
.card-bounce:active {
  transform: scale(1.1);
}
@media screen and (max-width: 768px) {
  .wave-block {
    background-color: #26542f;
    padding-bottom: 30px;
  }
}
</style>
