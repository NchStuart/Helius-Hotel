<template>
<div>
  <a href="#" @click="showModal = true">Fazer Login</a>
          <div v-if="showModal" class="modal">
            <div class="modal-content">
              <button type="button" @click="showModal = false" class="modal-button">
                <font-awesome-icon icon="fa-solid fa-x" />
              </button>
              <h2>Login</h2>
              <form>
                <label for="email">Email:</label>
                <input v-model="email" type="email" id="email" name="email">

                <label for="senha">Senha:</label>
                <input v-model="password" type="password" id="password" name="password">

                <button @click.prevent="tryLogin" type="submit">Entrar</button>
              </form>
              <p><a href="#">Esqueci minha senha</a></p>
            </div>
          </div>
</div>
</template>

<script>
import axios from "axios";

export default {
  name:'LoginComponent',
  data() {
    return {
      showModal: false,
      email: "",
      password: ""
    };
  },
  methods: {
    close() {
      this.email = ""
      this.password = ""
      this.showModal = false;
    },
    async tryLogin() {
      if (this.loginState) { alert("Você já está logado"); return }

      this.$store.dispatch("login", {email: this.email, password: this.password})
    }
  },
  computed: {
    loginState() {
      return this.$store.getters.getLoginState
    }
  }
}
</script>

<style lang="scss" scoped>
@use "@/assets/scss/_variables.scss" as v;

.modal {
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: v.$mainColorBlack;
  padding: 20px;
  width: 400px;
  height: 250px;
  border-radius: 5px;
  position: relative;
}

.modal-button {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
  border: none;
  background-color: v.$mainColorYellow;
  color: v.$mainColorBlack;
  padding: 10px;
  border-radius: 3px;
  cursor: pointer;
}

p{
  color: v.$mainColorWhite;
}

h2 {
  text-align: center;
  margin-top: 0;
  color: v.$mainColorYellow;
}

form {
  display: flex;
  flex-direction: column;
}

label {
  font-weight: bold;
  color: v.$mainColorYellow;
}

input {
  margin-bottom: 10px;
  padding: 5px;
  border: none;
  border-radius: 3px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
}

button[type="submit"] {
  background-color: v.$mainColorYellow;
  color: v.$mainColorBlack;
  padding: 10px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

button[type="button"] {
  background-color: v.$mainColorYellow;
  color: v.$mainColorBlack;
  padding: 10px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

a {
  color: v.$mainColorWhite;
  padding: 0;
}

</style>