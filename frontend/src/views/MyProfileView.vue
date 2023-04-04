<template>
  <section>
    <MenuProfile
      :emailUser="email"
      :nameUser="nome"
      descContent="Você pode gerenciar seus dados cadastrais, suas reservas e consumos a partir do nosso dashboard."
    />
  </section>
</template>

<script>
import MenuProfile from "../components/profile/MenuTypeProfile.vue";
export default {
  name: "MyProfileView",
  components: { MenuProfile },
  data() {
    return {
      email: this.$store.state.loggedUser.email,
      nome: this.$store.state.loggedUser.name,
    };
  },
  created() {
    if (this.$store.state.login == true) {
      if (this.$store.state.loggedUser == null) {
        alert("Você precisa estar logado para acessar o seu perfil.");
        this.$router.push("/");
        return;
      }

      if (this.$route.params.email != this.$store.state.loggedUser.email) {
        alert(
          `Você não está logado com ${this.$route.params.email}, tente novamente.`
        );
        this.$router.push("/");
        return;
      }

      this.$router.push(`/perfil/${this.$store.state.loggedUser.email}`);
    } else {
      alert("Você precisa estar logado para acessar seu perfil.");
      this.$router.push("/");
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
</style>