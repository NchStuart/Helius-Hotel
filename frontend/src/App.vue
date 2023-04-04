<template>
  <header-component />
  <router-view/>
  <footer-component />
</template>

<style lang="scss">
@use "@/assets/scss/variables" as v;

@import url("https://fonts.googleapis.com/css2?family=Signika+Negative&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");

* {
    box-sizing: border-box;
    margin: 0;
    font-family: "Montserrat", sans-serif;
}

.logo {
    font-family: "Signika Negative", sans-serif;
}

h1 {
    font-size: 2.5rem;
    margin: 2rem 0;
}

a {
    text-decoration: none;
    color: v.$mainColorWhite;
}

section {
    width: 100%;
    overflow: hidden;
}

.signUpDiv {
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: rgba(33, 32, 32, 0.466);
    position: fixed;
    visibility: hidden;

    height: 100vh;
    width: 100vw;
    z-index: 3;

    .signUpModal {
        display: flex;
        flex-direction: column;

        background-color: v.$mainColorWhite;
        position: fixed;
        padding: 1rem;
        width: 84vw;
        height: 65vh;
        border-radius: .8rem;

        .signUpTopRow {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;

            margin-bottom: 1.6rem;

            button {
                background-color: v.$mainColorWhite;
                border: 0;
                cursor: pointer;
            }
        }

        .icon {
            font-size: 2rem;
        }

        .signUpContent {
            display: flex;
            flex-direction: column;
            align-items: center;

            form {
            display: flex;
            flex-direction: column;

            margin: 4rem 0;

            input {
                max-width: 30rem;
            }

            button {
                max-width: 30rem;
                margin: 1.2rem 0;
                height: 2.4rem;
            }
            }
        }
    }
}

@media screen and (max-width: 550px) {
    section {
        padding: 4rem 2rem;
    }

    .signUpContent {
        form {
            width: 100%;
        }
    }
}
@media screen and (min-width: 550px) {
    section {
        padding: 4rem 10rem;
    }

    .signUpContent {
        form {
            width: 40%;
        }
    }
}
</style>

<script>
import FooterComponent from "./components/FooterComponent.vue";
import HeaderComponent from "./components/HeaderComponent.vue";

export default {
    name: "AppComponent",
    components: {
        HeaderComponent,
        FooterComponent
    },
    beforeMount() {
        this.$store.dispatch("initializeStore")
    }
}
</script>