<template>
  <section>
    <TitleInitialDescription :title="name" :desc="desc" />

    <img :src="imageRoom" @click="skipPage()" />
    <p class="price-p">
      Diaria por pessoa - de <s> R$ </s
      ><s class="priceDesc--s price">{{ descPriceInfo }}</s> Por
      <b class="price--s price">R$ {{ price }}</b>
    </p>
    <button class="btnSkip" @click="skipPage()">Reservar</button>
    <hr />
    <div class="feedback">
      <h2>Avaliações</h2>
      <div class="container-comment">
        <p class="textSkip" v-if="showEmptyFeedBackList" @click="skipPage()">
          Este quarto não possui avaliações até o momento. Faça sua reserva
          agora mesmo para aproveitar nossos serviços clicando aqui.
        </p>
        <div class="comment-list">
          <div class="comment" v-for="(list, i) in feedBackList[0]" :key="i">
            <div class="title-container">
              <h3 class="comment-title">{{ list.titleComment }}</h3>
              <div class="stars-container" v-for="n in 5" :key="n">
                <span :class="{'star': true, 'filled': n <= list.stars}">&#9733;</span>
              </div>
            </div>
            <p class="comment-body">
              {{ list.textComment }}
            </p>
            <div class="comment-meta">
              <span class="comment-author">Por {{ list.userFullName }}</span>
              <span class="comment-date">em {{ list.dateComment }}</span>
            </div>
          </div>
        </div>
        <!-- <button v-if="showFeedBackList" class="btnFullFeedBack">
          Ver todas as avaliações
        </button> -->
      </div>
    </div>
  </section>
</template>

<script>
import TitleInitialDescription from "../components/TitleInitialDescription.vue";
import ModalFeedBack from "../components/accommodations/ModalFeedBack.vue";
import axios from "axios";

export default {
  name: "RoomPage",
  components: { TitleInitialDescription, ModalFeedBack },
  data() {
    return {
      name: "",
      desc: "",
      price: "0,00",
      images: [
        { src: require("../assets/images/quarto_simples.jpg") },
        { src: require("../assets/images/quarto_premium.jpg") },
        { src: require("../assets/images/bangalo04.jpg") },
      ],
      feedBackList: [],
      showFeedBackList: false,
      showEmptyFeedBackList: false,
    };
  },
  methods: {
    insertDataText() {
      this.$store.getters.getAccommodations.forEach((v) => {
        if (v.name == this.$route.params.name) {
          this.desc = v.desc;
          this.price = v.price;
        }
      });
      this.name = this.formatTitle(this.$route.params.name);
      console.log("Inseriu os dados de texto com sucesso");
    },
    formatTitle(text) {
      const textInput = text.split("-");
      const lettersCapitalize = [];
      textInput.forEach((v) => {
        lettersCapitalize.push(v[0].toUpperCase());
      });
      const textFinnaly = textInput.join(" ");

      let p = textInput[0].replace(textInput[0][0], lettersCapitalize[0]);
      let p2 = textInput[1].replace(textInput[1][0], lettersCapitalize[1]);

      return `${p} ${p2}`;
    },
    skipPage() {
      if (this.$store.state.login == false) {
        alert("Você precisa estar logado para fazer uma reserva.");
      } else {
        this.$router.push("/reservas");
      }
    },
  },
  computed: {
    imageRoom() {
      if (this.$route.params.name == "quarto-simples") {
        return this.images[0].src;
      }
      if (this.$route.params.name == "quarto-premium") {
        return this.images[1].src;
      }
      if (this.$route.params.name == "quarto-bangalo") {
        return this.images[2].src;
      }
    },

    descPriceInfo() {
      if (this.$route.params.name == "quarto-simples") {
        return "199,99";
      }
      if (this.$route.params.name == "quarto-premium") {
        return "399.99";
      }
      if (this.$route.params.name == "quarto-bangalo") {
        return "599,99";
      }
    },
  },
  created() {},
  mounted() {
    let routName;
    this.$store.getters.getAccommodations.forEach((v) => {
      if (this.$route.params.name == v.name) routName = v.name;
    });

    if (
      routName == "quarto-simples" ||
      routName == "quarto-premium" ||
      routName == "quarto-bangalo"
    ) {
      this.$router.push(`/acomodacoes/${routName}`);
    } else {
      this.$router.push({ name: "acomodacoes" });
      return;
    }

    const acomodID = () => {
      if (this.$route.params.name == "quarto-simples") return 1;
      if (this.$route.params.name == "quarto-premium") return 2;
      if (this.$route.params.name == "quarto-bangalo") return 3;
    };

    (async () => {
      try {
        const feedbacklist = axios.get(
          `http://localhost:3333/heliusapi/v1/feedback/accommodations/${acomodID()}`
        );
        this.feedBackList.push((await feedbacklist).data);
        this.showEmptyFeedBackList = false;
        this.showFeedBackList = true;
      } catch (err) {
        this.showEmptyFeedBackList = true;
        this.showFeedBackList = false;
        return;
      }
    })();
    this.insertDataText();
  },
};
</script>

<style lang="scss" scoped>
.title-container {
  display: flex;
  align-items: center;
}
.container-comment {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.comment-list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.comment {
  margin-bottom: 20px;
  border: 2px solid #153131;
  border-radius: 5px;
  padding: 20px;
}

.comment-title {
  margin-top: 0;
  font-size: 24px;
  margin-bottom: 15px;
  margin-right: 20px;
}

.comment-body {
  margin-bottom: 15px;
}

.comment-meta {
  font-size: 13px;
}

.comment-author {
  margin-right: 10px;
}

.comment-date {
  color: #999;
}

.star {
  font-size: 2rem;
  color: #ddd;
  transition: color 0.2s ease-out;
  user-select: none;
}
.filled {
  color: #ff9f1c;
}
.stars-container {
  font-size: 30px;
  display: inline-block;
  margin-bottom: 20px;
}

section {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
}

ul {
  list-style: none;
}

.code {
  display: none;
}

.textSkip {
  cursor: pointer;
  margin: 60px 0 0 0;
  font-size: 17px;
  text-align: center;
  border: 2px solid #000;
  padding: 15px;
  transition: 0.2s;
  border-radius: 2px;

  &:hover {
    background-color: #153131;
    color: #fff;
  }
}

.btnFullFeedBack {
  background-color: #cba52a;
  color: #fff;
  border: none;
  border-radius: 30px;
  padding: 15px;
  font-size: 18px;
  margin-top: 50px;
  cursor: pointer;

  &:hover {
    background-color: #ecb90f;
    transition: 0.1s;
  }
}
.btnSkip {
  background-color: #cba52a;
  color: #fff;
  border: none;
  border-radius: 30px;
  padding: 15px;
  font-size: 18px;
  width: 150px;
  height: 60px;
  margin-top: 50px;
  cursor: pointer;

  &:hover {
    background-color: #ecb90f;
    transition: 0.1s;
  }
}

.feedback {
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-top: 60px;
  width: 100%;

  & h2 {
    text-align: center;
    margin-bottom: 50px;
  }
}

img {
  margin-bottom: 40px;
  width: 50%;
  border-radius: 20px;
  transition: 0.2s;
  z-index: 11;
  cursor: pointer;

  &:hover {
    opacity: 90%;
  }
}

.price-p {
  font-size: 20px;
}

s {
  color: red;
}

hr {
  width: 100%;
  margin-top: 50px;
}

@media (max-width: 768px) {
  img {
    width: 100%;
  }
}

@media (max-width: 1024px) {
  img {
    width: 80%;
  }
}
</style>