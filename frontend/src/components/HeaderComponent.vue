<template>
  <header id="headerPage" class="header-wrapper">
    <div class="topBar">
      <div id="mobileMenuDiv">
        <button type="button" id="mobileMenuBtnOpen">
          <i class="fa fa-solid fa-bars fa-2x menuIcon"></i>
        </button>
        <div id="mobileMenu">
          <button id="mobileMenuBtnClose">
            <i class="fa-solid fa-xmark"></i>
          </button>
          <ul>
            <li class="selected" @click="$router.push('/')">
              <a>Home</a>
            </li>
            <li>
              <a>O Hotel</a>
            </li>
            <li>
              <a>Acomodações</a>
            </li>
            <li @click="$router.push('/reservas')">
              <a>Reservas</a>
            </li>
            <li @click="$router.push('/contato')">
              <a>Contato</a>
            </li>
            <!-- <li>
              <a>Login</a>
              <button @click="showLoginModal">Login</button>
            </li> -->
            <!-- <li>
              <a id="signUpBtnSS">Cadastre-se</a>
            </li> -->
          </ul>
        </div>
      </div>
      <div class="userArea">
        <LoginComponent class="userArea__btn" />
        <SignUpComponent class="userArea__btn" />
      </div>
    </div>
    <div class="trademarkArea">
      <div id="blackBackground">
        <h1 class="logo">Helius Hotel</h1>
        <h2>A sua estadia em primeiro lugar</h2>
      </div>
    </div>
    <nav class="headerMenu">
      <ul>
        <li class="selected" @click="$router.push('/')">
          <a>Home</a>
        </li>
        <li>
          <a>O Hotel</a>
        </li>
        <li>
          <a>Acomodações</a>
        </li>
        <li @click="$router.push('/reservas')">
          <p>Reservas</p>
        </li>
        <li @click="$router.push('/contato')">
          <a>Contato</a>
        </li>
         <!-- <li>
              <a>Login</a>
              <button @click="showLoginModal">Login</button>
          </li> -->
        <!-- <li>
          <a id="signUpBtnLS">Cadastre-se</a>
        </li> -->
      </ul>
    </nav>
  </header>
</template>


<style lang="scss" scoped>
@use "@/assets/scss/variables" as v;

@media screen and (max-width: 768px) {
  .topBar {
    position: fixed;
    z-index: 1;
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

    &__btn {
      margin: 0 .6rem;
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
  align-items: end;

  background-image: url("../assets/images/hotel01.jpg");
  filter: brightness(100%) saturate(50%);
  background-size: cover;
  background-attachment: fixed;
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

    .menuIcon {
      color: v.$mainColorWhite;
    }
  }
}

#mobileMenu {
  display: flex;
  flex-direction: column;

  width: 60vw;
  height: 100vh;
  background-color: v.$mainColorBlack;
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  display: none;

  #mobileMenuBtnClose {
    display: flex;
    justify-content: start;

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

.selected {
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
        margin: 0 .4rem;
      }
    }
  }
}
</style>


<script>
import LoginComponent from '@/components/LoginComponent.vue'
import SignUpComponent from "./signUp/SignUpComponent.vue";

export default {
  name: "HeaderComponent",
  components:{
    LoginComponent,
    SignUpComponent
},
};
</script>