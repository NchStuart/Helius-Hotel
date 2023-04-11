<template>
  <section id="heading1">
    <TitleInitialDescription
      title="Nossas Acomodações"
      desc="As acomodações do Helius Hotel foram projetadas para oferecer todo o
        conforto e tranqüilidade que você merece. Todos os nossos quartos ficam
        próximos a sala de jogos, ao restaurante, às piscinas e possuem uma
        vista magnífica para as piscinas!"
    />

    <CarouselOne
      :images="images"
      @modalAcomodOpen="
        (index) => {
          openPage(index);
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

export default {
  name: "AccommodationsView",
  components: {
    TitleInitialDescription,
    CarouselOne,
  },
  data() {
    return {
      images: [
        { src: require("../assets/images/quarto_simples.jpg") },
        { src: require("../assets/images/quarto_premium.jpg") },
        { src: require("../assets/images/bangalo04.jpg") },
      ],
      accommodations: this.$store.getters.getAccommodations,
      accommodationsObJ: {
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
    openPage(index) {
      if (index == 0) { // Quarto Simples
        this.$router.push(`/acomodacoes/${this.accommodations[0].name}`);
      }
      if (index == 1) { // Quarto Premium
        this.$router.push(`/acomodacoes/${this.accommodations[1].name}`);
      }
      if (index == 2) { // Quarto Bangalô
        this.$router.push(`/acomodacoes/${this.accommodations[2].name}`);
      }
    },
  }
};
</script>

<style lang="scss" scoped>
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