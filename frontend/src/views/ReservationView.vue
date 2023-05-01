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
  const routePath = this.$route.path;
  const isLoggedIn = this.$store.state.login;
  const reservationsSent = this.$store.state.reservationsSent;

  if (routePath === '/reservas') {
    if (isLoggedIn) {
      this.formPage = true;
      this.orderPage = false;
      this.optionPage = false;
    } else {
      this.$router.push('/');
      alert('Você precisa estar logado para fazer uma reserva.');
    }
  } else if (routePath === '/reservas/acomodacoes' && isLoggedIn && reservationsSent) {
    this.formPage = false;
    this.orderPage = false;
    this.optionPage = true;
  } else if (routePath === '/reservas/pedido-finalizado' && isLoggedIn && reservationsSent) {
    this.formPage = false;
    this.optionPage = false;
    this.orderPage = true;
  } else {
    this.$router.push('/');
  }
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