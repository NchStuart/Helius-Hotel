<template>
  <header id="headerPage" class="header-wrapper">
    <div class="topBar">
      <div id="mobileMenuDiv">
        <button type="button" id="mobileMenuBtnOpen">
          <font-awesome-icon icon="fa-solid fa-bars" />
        </button>
        <div id="mobileMenu">
          <button id="mobileMenuBtnClose">
            <font-awesome-icon icon="fa-solid fa-x" />
          </button>
          <ul>
            <li class="selected" @click="$router.push('/')">
              <a>Home</a>
            </li>
            <li @click="$router.push({ name: 'sobre' })">
              <a>O Hotel</a>
            </li>
            <li @click="$router.push({ name: 'acomodacoes' })">
              <a>Acomodações</a>
            </li>
            <li
              v-if="$store.state.login"
              @click="$router.push({ name: 'reservas' })"
            >
              <a>Reservas</a>
            </li>
            <li @click="$router.push({ name: 'contato' })">
              <a>Contato</a>
            </li>
            <li
              v-if="$store.state.login"
              @click="
                $router.push(`/perfil/${this.$store.state.loggedUser.email}`)
              "
            >
              <a>Minha conta</a>
            </li>
            <li v-if="userLevel > 0" @click="$router.push('/contato')">
              <a>Admin</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="userArea">
        <LoginComponent v-if="!loginState" class="userArea__item" />
        <SignUpComponent v-if="!loginState" class="userArea__item" />
        <span
          v-if="loginState"
          style="cursor: pointer"
          class="userArea_item"
          @click="$router.push(`/perfil/${this.$store.state.loggedUser.email}`)"
          >Olá {{ loggedUser.nome_completo }}!</span
        >
        <a href="" v-if="loginState" @click="logout" class="userArea_item icon">
          <font-awesome-icon icon="fa-solid fa-arrow-right-from-bracket" />
        </a>
      </div>
    </div>
    <div
      class="trademarkArea"
      :style="{ backgroundImage: 'url(' + imageUrl + ')' }"
    >
      <div id="blackBackground">
        <h1 class="logo">Helius Hotel</h1>
        <h2>A sua estadia em primeiro lugar</h2>
      </div>
    </div>
    <nav class="headerMenu">
      <ul>
        <li :class="{ active: $route.path === '/' }" @click="$router.push('/')">
          <a>Home</a>
        </li>
        <li
          :class="{ active: $route.path === '/sobre' }"
          @click="$router.push({ name: 'sobre' })"
        >
          <a>O Hotel</a>
        </li>
        <li
          :class="
            {
              active: $route.path === '/acomodacoes',
            } || {
              active: $route.path === '/acomodacoes/:name',
            }
          "
          @click="$router.push({ name: 'acomodacoes' })"
        >
          <a>Acomodações</a>
        </li>
        <li
          v-if="$store.state.login"
          :class="
            {
              active: $route.path === '/reservas',
            } || { active: $route.path === '/reservas/acomodacoes' } || {
              active: $route.path === '/reservas/pedido-finalizado',
            }
          "
          @click="$router.push({ name: 'reservas' })"
        >
          <p>Reservas</p>
        </li>
        <li
          :class="{ active: $route.path === '/contato' }"
          @click="$router.push({ name: 'contato' })"
        >
          <a>Contato</a>
        </li>
        <li
          v-if="$store.state.login"
          :class="
            {
              active: $route.path === '/perfil/:email',
            } || { active: $route.path === '/perfil/:email/minhas-reservas' }
          "
          @click="$router.push(`/perfil/${this.$store.state.loggedUser.email}`)"
        >
          <a>Minha conta</a>
        </li>
        <li
          v-if="userLevel > 0"
          :class="
            {
              active: $route.path === '/admin',
            } || { active: $route.path === '/admin/view-users' } || {
              active: $route.path === '/admin/view-reservations',
            }
          "
          @click="$router.push('/admin')"
        >
          <a>Admin</a>
        </li>
      </ul>
    </nav>
  </header>
</template>


<style lang="scss" scoped>
@use "@/assets/scss/variables" as v;

@media screen and (max-width: 768px) {
  .topBar {
    position: fixed;
    z-index: 15;
    width: 100vw;
  }

  #mobileMenuDiv {
    visibility: visible;
  }

  .headerMenu {
    display: none;
  }

  .trademarkArea {
    background-position-y: 36rem;

    #blackBackground {
      align-items: flex-start;
      padding: 0 2rem;

      h2 {
        width: 16rem;
      }
    }
  }
}

@media screen and (min-width: 768px) {
  #mobileMenuDiv {
    visibility: hidden;
  }

  .trademarkArea {
    background-position: bottom;

    #blackBackground {
      align-items: end;
      padding: 0 8rem;
    }
  }
}

header {
  display: flex;
  flex-direction: column;
  color: v.$mainColorBlack;
}

.topBar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background-color: v.$mainColorBlack;

  a {
    text-decoration: none;
    color: v.$mainColorWhite;

    &:hover {
      text-decoration: underline;
    }
  }

  & > * {
    margin: 0.4rem 0.4rem;
    padding: 0.2rem 0.4rem;
  }

  .userArea {
    display: flex;
    align-items: center;
    color: v.$mainColorWhite;
    height: 1.8rem;

    &__item {
      margin: 0 0.6rem;
    }

    .icon {
      font-size: 1.3rem;
      color: v.$mainColorYellow;
      margin-left: 1.2rem;
    }

    a {
      margin: 0 0.5rem;
      padding: 0 0.2rem;
    }
  }
}

.trademarkArea {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  // background-image: url("../assets/images/hotel01.jpg");
  filter: brightness(100%) saturate(50%);
  background-size: cover;
  background-attachment: fixed;
  background-position: bottom center;
  position: relative;
  width: 100%;
  height: 18rem;
  color: v.$mainColorWhite;

  #blackBackground {
    display: flex;
    flex-direction: column;
    justify-content: center;

    background-color: rgba(53, 53, 53, 0.419);
    width: 100%;
    height: 100%;
    position: absolute;
  }

  h2 {
    font-family: "Montserrat", sans-serif;
    font-weight: 100;
  }
}

#mobileMenuDiv {
  button {
    background-color: v.$mainColorBlack;
    border: none;
    color: v.$mainColorWhite;
    font-size: 1.4rem;
  }
}

#mobileMenu {
  display: flex;
  flex-direction: column;

  width: 60vw;
  height: 100vh;
  background-color: v.$mainColorBlack;
  position: absolute;
  z-index: 12;
  top: 0;
  left: 0;
  display: none;

  #mobileMenuBtnClose {
    display: flex;
    justify-content: flex-start;

    padding: 1rem 3rem;
    font-size: 2rem;
    color: v.$mainColorWhite;
  }

  ul {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    height: 100%;

    li {
      width: fit-content;
      margin: 1rem 0;

      &:nth-child(7) {
        background-color: v.$mainColorYellow;
        padding: 1rem;
        border-radius: 2rem;
      }
    }
  }
}

.active {
  border-bottom: 0.2rem solid v.$mainColorBlack;
}

.headerMenu {
  background-color: v.$mainColorYellow;

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    height: 100%;
    list-style: none;

    li {
      display: inline;
      margin: 0 1.4rem;
      padding: 1rem 0.8rem;
      height: 100%;
      cursor: pointer;

      a {
        text-decoration: none;
        font-size: auto;
        color: v.$mainColorBlack;
      }

      &:hover {
        border-bottom: 0.2rem solid v.$mainColorBlack;
      }

      @media screen and (max-width: 768px) {
        margin: 0 0.4rem;
      }
    }
  }
}
</style>


<script>
import LoginComponent from "@/components/LoginComponent.vue";
import SignUpComponent from "./signUp/SignUpComponent.vue";

export default {
  name: "HeaderComponent",
  data() {
    return {
      images: ["hotel01.jpg", "hotel02.jpg", "piscina02.jpg"],
      imageUrl: "",
    };
  },
  components: {
    LoginComponent,
    SignUpComponent,
  },
  computed: {
    loginState() {
      return this.$store.getters.getLoginState;
    },
    loggedUser() {
      return this.$store.getters.getLoggedUser;
    },
    userLevel() {
      return this.$store.getters.getUserLevel;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
  },
  mounted() {
    const randomIndex = Math.floor(Math.random() * this.images.length);
    this.imageUrl = require(`@/assets/images/${this.images[randomIndex]}`);
  },
};
</script>