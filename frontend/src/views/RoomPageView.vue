<template>
  <div>
    <h1>aaa</h1>
  </div>
</template>

<script>
export default {
  name: "RoomPage",
  data() {
    return {
      name: "",
      desc1: "",
      desc2: "",
      desc3: "",
      accommodations: this.$store.getters.getAccommodations
    };
  },
  beforeMount() {
    accommodations.forEach((v) => {
      if (this.$route.path == `/acomodacoes/${v.name}`) {
        console.log(v.name);
      } else {
        this.$router.push("/acomodacoes");
        return;
      }
    });
  },
};
</script>

<style lang="scss" scoped>
</style>