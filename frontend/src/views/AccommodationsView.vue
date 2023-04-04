<template>
  <section id="heading1">
    <div class="fade" v-show="fadeShow"></div>
    <TitleInitialDescription>
      <h1>Nossas Acomodações</h1>
      <hr />
      <p>
        As acomodações do Helius Hotel foram projetadas para oferecer todo o
        conforto e tranqüilidade que você merece. Todos os nossos quartos ficam
        próximos a sala de jogos, ao restaurante, às piscinas e possuem uma
        vista magnífica para as piscinas!
      </p>
    </TitleInitialDescription>
    <ModalInfo v-if="showModalInfo" />
    <CarouselOne
      :images="images"
      @modalAcomodOpen="
        (index) => {
          openModal(index);
        }
      "
    />
    <p>
      Seja qual for o seu objetivo: comemorações em família, apenas um momento
      para descansar, até mesmo uma confraternização com a empresa ou encontro
      de amigos, o Hotel Helius tem a acomodação certa para você. Aproveite a
      oportunidade e faça agora mesmo sua reserva.
    </p>
  </section>
</template>

<script>
import TitleInitialDescription from "../components/TitleInitialDescription.vue";
import CarouselOne from "../components/carousel/CarouselOne.vue";
import ModalInfo from "../components/accommodations/ModalInfo.vue";

export default {
  name: "AccommodationsView",
  components: {
    TitleInitialDescription,
    CarouselOne,
    ModalInfo,
  },
  data() {
    return {
      images: [
        { src: require("../assets/images/quarto_simples.jpg") },
        { src: require("../assets/images/quarto_premium.jpg") },
        { src: require("../assets/images/bangalo04.jpg") },
      ],
      accommodations: {
        simples: {
          name: "Quarto Simples",
          desc: "Nossos quartos simples oferecem a melhor opção custo/benefício se você pretende aliar bem estar e economia.",
        },
        premium: {
          name: "Quarto Premium",
          desc: "Quartos premium com todas as comodidades essenciais para o seu conforto. Todos os nossos apartamentos luxo são de frente e proporcionam aos nossos hóspedes uma vista maravilhosa, além de um espaço reservado especialmente para aqueles que vem a trabalho e precisam utilizar seu notebook.",
        },
        bangalo: {
          name: "Quarto Bangalô",
          desc: "Nossos quartos Bangalô são exatamente como o nome já diz: muito mais conforto e requinte para nossos hóspedes. Alguns de nossos quartos bangalô são equipados com sauna.",
        },
      },
      fadeShow: false,
      showModalInfo: false,
    };
  },
  methods: {
    skipPage() {
      if (this.$store.state.login == false) {
        alert("Você precisa estar logado para fazer uma reserva.");
      } else {
        this.$router.push("/reservas");
      }
    },
    scrollPage(type) {
      if (type == 1) {
        window.scrollTo({
          top: 1000,
          behavior: "smooth",
        });
      }
      if (type == 2) {
        window.scrollTo({
          top: 1800,
          behavior: "smooth",
        });
      }
      if (type == 3) {
        window.scrollTo({
          top: 2400,
          behavior: "smooth",
        });
      }
    },
    reloadScrollBars() {
      document.documentElement.style.overflow = "auto";
      document.body.scroll = "yes";
    },
    unloadScrollBars() {
      document.documentElement.style.overflow = "hidden";
      document.body.scroll = "no";
    },
    closeModal() {
      this.fadeShow = false;
      this.showModalInfo = false;
      this.reloadScrollBars();
    },
    openModal(index) {
      this.fadeShow = true;
      setTimeout(() => {
        document.querySelector(".modal-open2").style.opacity = "100";
      }, 100);
      this.showModalInfo = true;
      this.unloadScrollBars();

      document.querySelector(".fade").addEventListener("click", () => {
        this.closeModal();
      });
    },
  },
};
</script>

<style lang="scss" scoped>

.fade {
  display: flex;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  position: fixed;
  z-index: 12;
  background-color: rgba(0, 0, 0, 0.466);
}
.accommodations-bedrooms {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 95%;
}

section {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
}

h1 {
  font-size: 40px;
  margin-bottom: 30px;
  font-weight: normal;
  text-align: center;
}

p {
  font-size: 17px;
  font-weight: bold;
  min-width: 250px;
  margin-bottom: 50px;
  text-align: center;
}

hr {
  width: 100%;
  margin-bottom: 30px;
}
</style>