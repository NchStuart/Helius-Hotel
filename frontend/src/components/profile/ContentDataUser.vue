<template>
  <div class="container">
    <div class="container-column">
      <div class="column-left">
        <p>Nome:</p>
        <br />
        <p>{{nameUser}}</p>
      </div>
      <div class="column-mid">
        <p>Email:</p>
        <br />
        <p>{{emailUser}}</p>
      </div>
      <div class="column-right">
        <p>Senha:</p>
        <br />
        <p>**********</p>
      </div>
    </div>
    <button @click="$emit('changeEdit')">Editar dados cadastrais</button>
  </div>
</template>

<script>
export default {
  name: "ContentDataUser",
  props: {
    nameUser: {
      type: String,
    },
    emailUser: {
      type: String,
    },
  },
  emits: ['changeEdit']
};
</script>

<style lang="scss" scoped>
.container-column {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
}
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  font-size: 20px;

  & .column-left {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px;
  }

  & .column-mid {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px;
  }

  & .column-right{
        display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px;
  }
}

button {
  margin-top: 10px;
  background-color: #153131;
  color: #fff;
  border: none;
  border-radius: 20px;
  padding: 15px;
  transition: 0.1s;
  cursor: pointer;

  &:hover {
    background-color: #224b4b;
  }
}
</style>