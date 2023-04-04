<template>
  <section>
    <TitleInitialDescription
      title="Pedido Finalizado"
      desc="Obrigado pela preferência e confiança."
    />
    <button @click="skipPage()">
      Clique aqui para visualizar suas reservas
    </button>
  </section>
</template>

<script>
import TitleInitialDescription from "../TitleInitialDescription.vue";
import CounterPage from "../CounterPage.vue";

export default {
  name: "ReservasOrder",
  components: { TitleInitialDescription },
  methods: {
    skipPage() {
      if (this.$store.state.loggedUser) {
        this.$router.push(
          `/perfil/${this.$store.state.loggedUser.email}/minhas-reservas`
        );
      }
    },
  },
  created() {
    if (this.$store.state.reservationsSent == false && this.$store.state.login == true) {
      this.$router.push("/reservas");
    }
  },
};
</script>

<style lang="scss" scoped>
button {
  background-color: #153131;
  color: #fff;
  border: none;
  padding: 20px;
  border-radius: 20px;
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    background-color: #0a4141;
    transform: scale(1.01);
  }
}
</style>