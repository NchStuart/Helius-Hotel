<template>
  <main>
    <ReservasForm ref="form" v-if="formPage" @change="changeStatusFormShow()" />
    <ReservasOption v-if="optionPage" @change="changeStatusOptionShow()" />
    <ReservasOrder v-if="orderPage" />
  </main>
</template>

<script>
import ReservasForm from "../components/reservation/ReservationForm.vue";
import ReservasOption from "../components/reservation/ReservationOption.vue";
import ReservasOrder from "../components/reservation/ReservationOrder.vue";

export default {
  name: "ReservasView",
  components: { ReservasForm, ReservasOption, ReservasOrder },
  data() {
    return {
      formPage: false,
      optionPage: false,
      orderPage: false,
    };
  },
  methods: {
    changeStatusFormShow() {
      this.formPage = false;
      this.optionPage = true;
    },
    changeStatusOptionShow() {
      this.optionPage = false;
      this.orderPage = true;
    },
    pageNumber() {
      if (this.formPage) return 1;
      if (this.optionPage) return 2;
      if (this.orderPage) return 3;
    },
  },
  created() {
    if (this.$route.path == "/reservas" && this.$store.state.login == true) {
      this.formPage = true;
      this.orderPage = false;
      this.optionPage = false;
      return;
    } else if(this.$route.path == "/reservas" && this.$store.state.login == false) {
      this.$router.push("/");
      alert("Você precisa estar logado para fazer uma reserva.");
      return;
    }

    if (
      this.$route.path == "/reservas/acomodacoes" &&
      this.$store.state.reservationsSent == true &&
      this.$store.state.login == true
    ) {
      this.formPage = false;
      this.orderPage = false;
      this.optionPage = true;
      return;
    }

    if (
      this.$route.path == "/reservas/pedido-finalizado" &&
      this.$store.state.reservationsSent == true &&
      this.$store.state.login == true
    ) {
      this.formPage = false;
      this.optionPage = false;
      this.orderPage = true;
      return;
    }

    this.$router.push("/reservas");
  },
};
</script>


<style lang="scss" scoped>
section {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
}

main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>