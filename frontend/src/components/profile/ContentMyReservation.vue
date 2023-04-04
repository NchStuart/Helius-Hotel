<template>
  <div class="container">
    <p
      class="empty"
      v-if="showEmpty"
      @click="$router.push({ name: 'reservas' })"
    >
      Não há reservas cadastradas, para fazer sua reserva clique aqui.
    </p>
  </div>
</template>

<script>
export default {
  name: "ContentMyReservation",
  data() {
    return {
      showEmpty: true,
      objectDataUser: JSON.parse(localStorage.getItem(`reservaUserData:${this.$store.state.loggedUser.email}`)),
      objectPaymentUser: JSON.parse(localStorage.getItem(`reservaPaymentData:${this.$store.state.loggedUser.email}`)),
    };
  },
  computed: {
    verifyData() {
      if (this.objectDataUser && this.objectPaymentUser) {
        return false;
      } else {
        true
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.empty {
  margin-top: 20px;
  cursor: pointer;
}
</style>