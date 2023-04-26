<template>
  <label :for="classInput">
    <p>{{ labelTitle }}</p>
    <select :class="classInput">
      <option value="0" class="firstOption" selected>
        {{placeHolder}}
      </option>
      <option v-for="list in optionsList" :key="list" :value="list">{{list}}</option>
    </select>
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
    optionsList: {
      type: [Array, Object],
    },
    placeHolder: {
      type: String
    }
  },
};
</script>

<style lang="scss" scoped>
select {
  margin-bottom: 40px;
  height: 60px;
  width: 280px;
  margin-top: 5px;
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