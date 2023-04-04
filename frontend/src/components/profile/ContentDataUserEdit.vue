<template>
  <div class="container">
    <div class="container-column">
      <div class="column-left">
        <InputForm
          classInput="nameUser"
          labelTitle="Nome:"
          type="text"
          :valueForm="nameUser"
        />
      </div>
      <div class="column-mid">
        <InputForm
          classInput="emailUser"
          labelTitle="Email:"
          type="email"
          :valueForm="emailUser"
        />
      </div>
      <div class="column-right">
        <InputForm
          classInput="passBefore"
          labelTitle="Senha Atual:"
          type="password"
        />
        <InputForm
          classInput="passAfter"
          labelTitle="Nova Senha:"
          type="password"
        />
      </div>
    </div>
    <div class="container-button">
      <button @click="changeData()">Salvar Alterações</button>
      <button @click="$emit('backPage')">Voltar</button>
    </div>
  </div>
</template>

<script>
import InputForm from "../forms/InputForm.vue";

export default {
  name: "ContentDataUserEdit",
  components: { InputForm },
  props: {
    nameUser: {
      type: String,
    },
    emailUser: {
      type: String,
    },
  },
  emits: ["backPage"],
  methods: {
    changeData() {
      const nomeInput = document.querySelector(".nameUser");
      const emailInput = document.querySelector(".emailUser");
      const passBeforeInput = document.querySelector(".passBefore");
      const passAfterInput = document.querySelector(".passAfter");
      const localStorageDataUser = JSON.parse(
        localStorage.getItem("usersList")
      );
      this.$store.dispatch("changeNameUser",nomeInput.value);
      this.$store.dispatch("changeEmailUser",emailInput.value);
      alert('Nome de usuario e Email alterados com sucesso.');

      if (passBeforeInput.value && passAfterInput.value) {
        if (this.$store.state.loggedUser && this.$store.state.login == true) {
          this.$store.state.users.forEach((v) => {
            if (v.email == this.$store.state.loggedUser.email) {
              if (v.password == passBeforeInput.value) {
                this.$store.dispatch("changePassword", passAfterInput.value);
                this.$store.dispatch("initializeStore");
                alert('Senha alterada com sucesso.');
              } else {
                alert("Senha atual incorreta.");
                return;
              }
            }
          });
        }
      } else if (passBeforeInput.value && !passAfterInput.value) {
        alert("Campo nova senha invalido.");
        return;
      } else if (!passBeforeInput.value && passAfterInput.value) {
        alert("Campo de senha atual invalido.");
        return;
      }
      console.log(this.$store.state.users,this.$store.state.loggedUser)
    },
  },
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

  & .column-right {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px;
  }
}

.container-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
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
  margin-right: 30px;
  margin-bottom: 20px;

  &:hover {
    background-color: #224b4b;
  }
}
</style>