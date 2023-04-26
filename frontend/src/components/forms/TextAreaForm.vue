<template>
  <label :for="classTxtArea">
    <p>{{ labelTitle }}</p>
    <textarea
      :class="classTxtArea"
      :cols="column"
      :rows="rows"
      :placeholder="placeHolder"
    ></textarea>
  </label>
</template>

<script>
export default {
  name: "inputForm",
  props: {
    classTxtArea: {
      type: String,
      default: "txtArea",
    },
    labelTitle: {
      type: String,
    },
    column: {
      type: [String, Number],
    },
    rows: {
      type: [String, Number],
    },
    placeHolder: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
label {
  font-size: 12px;
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 5px;
  text-align: left;
}

textarea {
  font-size: 15px;
  padding: 10px;
  margin-top: 10px;
  width: 100%;
  min-width: 300px;
  height: 100px;
  border: 1px solid #000;
}
</style>