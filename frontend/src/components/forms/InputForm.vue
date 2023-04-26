<template>
  <label :for="classInput">
    <p>{{ labelTitle }}</p>
    <input :class="classInput" :type="type" :placeholder="placeHolder" :value="valueForm" :pattern="patternTxt"/>
  </label>
</template>

<script>
export default {
  name: "inputForm",
  props: {
    classInput: {
      type: String,
      default: "inputForm",
    },
    labelTitle: {
      type: String,
    },
    type: {
      type: String,
    },
    placeHolder: {
      type: String,
    },
    valueForm: {
      type: String
    },
    patternTxt: {
      type: String
    },
  }
};
</script>

<style lang="scss" scoped>
input {
  margin-bottom: 40px;
  height: 60px;
  width: 280px;
  margin-top: 10px;
  font-size: 17px;
  padding: 10px;
  border: 1px solid #000;
}

label {
  font-size: 12px;
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 5px;
  text-align: left;
}
</style>