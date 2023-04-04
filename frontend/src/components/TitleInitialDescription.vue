<template>
  <div>
    <slot>
      <div>
        <h1>{{ title }}</h1>
        <p>{{ desc }}</p>
      </div>
  </slot>
  </div>
</template>

<script>
export default {
  name: "TitleInitialDescription",
  props: {
    title: {
      type: String,
      default: "Helius Hotel",
    },
    desc: {
      type: String,
      default:
        "Para mais informações entre em contato com heliushotel@gmail.com",
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

h1 {
  font-size: 40px;
  margin-bottom: 30px;
  font-weight: normal;
  text-align: center;
}

p {
  font-size: 17px;
  font-weight: bold;
  min-width: 250px;
  margin-bottom: 50px;
  text-align: center;
}

hr {
  width: 100%;
}
</style>