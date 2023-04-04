<template>
  <div class="container-profile">
    <div class="container-column">
      <nav>
        <ul>
          <li>
            <button @click="pageData()" :class="{ selected: selectedData }">
              Dados Cadastrais
            </button>
          </li>
          <li>
            <button
              @click="pageReservation()"
              :class="{ selected: showMyReservation }"
            >
              Minhas Reservas
            </button>
          </li>
          <li><button @click="logout()" class="logout">Sair</button></li>
        </ul>
      </nav>

      <div class="modal">
        <div v-if="showIntro" class="container-text">
          <h2>Olá {{ nameUser }}</h2>
          <p class="text-modal">
            {{ descContent }}
          </p>
          <div class="hr" />
        </div>
        <ContentDataUserVue
          v-if="showDataUser"
          :emailUser="emailUser"
          :nameUser="nameUser"
          @changeEdit="
            () => {
              showDataUser = false;
              showDataUserEdit = true;
            }
          "
        />
        <ContentDataUserVueEdit
          v-if="showDataUserEdit"
          :emailUser="emailUser"
          :nameUser="nameUser"
          @backPage="
            () => {
              showDataUserEdit = false;
              showDataUser = true;
            }
          "
        />
        <ContentMyReservationVue v-if="showMyReservation" />
      </div>
    </div>
  </div>
</template>

<script>
import ContentDataUserVue from "./ContentDataUser.vue";
import ContentDataUserVueEdit from "./ContentDataUserEdit.vue";
import ContentMyReservationVue from "./ContentMyReservation.vue";

export default {
  name: "MenuProfile",
  components: {
    ContentDataUserVue,
    ContentDataUserVueEdit,
    ContentMyReservationVue,
  },
  props: {
    nameUser: {
      type: String,
    },
    emailUser: {
      type: String,
    },
    descContent: {
      type: String,
    },
  },
  data() {
    return {
      showIntro: true,
      showDataUser: true,
      showDataUserEdit: false,
      showMyReservation: false,
      selectedData: true,
    };
  },
  methods: {
    pageData() {
      this.selectedData = true;
      this.showDataUser = true;
      this.showDataUserEdit = false;
      this.showMyReservation = false;
      this.$router.push(`/perfil/${this.emailUser}`);
    },
    pageReservation() {
      this.selectedData = false;
      this.showDataUser = false;
      this.showDataUserEdit = false;
      this.showMyReservation = true;
      this.$router.push(`/perfil/${this.emailUser}/minhas-reservas`);
    },
    logout() {
      this.$store.dispatch("logout");
      this.$router.push("/");
    },
  },
  created() {
    if (this.$store.state.login == true && this.$store.state.loggedUser) {
      if (this.$route.path == `/perfil/${this.emailUser}/minhas-reservas`) {
        this.selectedData = false;
        this.showDataUser = false;
        this.showDataUserEdit = false;
        this.showMyReservation = true;
        this.$router.push(`/perfil/${this.emailUser}/minhas-reservas`);
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.container-profile {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 20px;
}
.container-column {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.selected {
  background-color: #153131;
  color: #fff;
}

.modal {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 700px;
  min-width: 300px;
  height: 100%;
  border-radius: 5px;
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
  filter: drop-shadow(0 0 2px #ccc);

  .container-text {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    & .text-modal {
      font-size: 13px;
      line-height: 17px;
      color: #b8b8b8;
      margin-top: 20px;
      margin-bottom: 20px;
      text-align: center;
    }
  }
}

.hr {
  height: 1px;
  width: 100%;
  background-color: #999;
}

nav {
  padding: 20px;
  & ul {
    & li {
      margin-bottom: 20px;
      list-style: none;
      & button {
        background: none;
        border: none;
        cursor: pointer;
        transition: 0.1s;
        border-radius: 10px;
        font-size: 15px;
        padding: 18px;
        width: 200px;
        text-align: left;

        &:hover {
          background-color: #153131;
          color: #fff;
        }
      }
    }
  }
}

@media (max-width: 626px) {
  .container-column {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  .logout {
    display: none;
  }

  nav {
    margin: 0;
    padding: 0;
    & ul {
      display: flex;
      & li {
        & button {
          text-align: center;
          width: 130px;
        }
      }
    }
  }
}
</style>