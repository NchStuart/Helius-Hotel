<template>
  <section>
    <div
      class="fade"
      v-if="fadeShow"
      @click="
        fadeShow = false;
        modalFeedBackController();
      "
    ></div>
    <TitleInitialDescription :title="name" :desc="desc" />

    <img :src="imageRoom" v-once @click="skipPage()" />
    <FeedBackModal
      v-if="showModalFeedBack"
      @sendFeedBack="(data) => sendFeedBack(data)"
      @closeModal="modalFeedBackController()"
    />
    <p class="price-p">
      Diaria por pessoa - de <s> R$ </s
      ><s class="priceDesc--s price">{{ descPriceInfo }}</s> Por
      <b class="price--s price">R$ {{ price }}</b>
    </p>
    <div class="feed-back-btn-container">
      <button class="btnSkip" v-once @click="skipPage()">Reservar</button>
    </div>
    <hr />
    <div class="feedback">
      <h2>Avaliações</h2>
      <div class="container-comment">
        <p class="textSkip" v-if="showEmptyFeedBackList" @click="skipPage()">
          Este quarto não possui avaliações até o momento. Faça sua reserva
          agora mesmo para aproveitar nossos serviços clicando aqui.
        </p>
        <div class="comment-list">
          <div class="comment" v-for="(list, i) in feedBackList" :key="i">
            <div class="title-container">
              <h3 class="comment-title">{{ list.titleComment }}</h3>
              <div class="stars-container" v-for="n in 5" :key="n">
                <span :class="{ star: true, filled: n <= list.stars }"
                  >&#9733;</span
                >
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
        <button
          class="btnFullFeedBack"
          v-if="$store.state.login"
          @click="modalFeedBackController()"
        >
          Avaliar Quarto
        </button>
        <!-- <button v-if="showFeedBackList" class="btnFullFeedBack">
          Ver todas as avaliações
        </button> -->
      </div>
    </div>
  </section>
</template>

<script>
import TitleInitialDescription from "../components/TitleInitialDescription.vue";
import FeedBackModal from "../components/FeedBackModal.vue";
import axios from "axios";

export default {
  name: "RoomPage",
  components: { TitleInitialDescription, FeedBackModal },
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
      showModalFeedBack: false,
      fadeShow: false,
    };
  },
  methods: {
    async getUserIdForEmail() {
      const emailUser = JSON.parse(sessionStorage.getItem("loggedUser")).email;
      try {
        const response = await this.$store.getters.getUserForEmail(emailUser);
        return response.id_usuario;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
    getFeedBackData() {
      axios
        .get(
          `http://localhost:3333/heliusapi/v1/feedback/accommodations/${this.getAcomodID()}`
        )
        .then((res) => {
          this.feedBackList = res.data;
          this.showEmptyFeedBackList = false;
          this.showFeedBackList = true;
        })
        .catch((err) => {
          console.log(err);
          this.showFeedBackList = false;
          this.showEmptyFeedBackList = true;
        });
    },
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
    async sendFeedBack(data) {

      let userID = await this.getUserIdForEmail();

      if (!userID) {
        alert("Você não está logado, tente novamente.");
        return;
      }
      const createFeedBack = () => {
        axios.post("http://localhost:3333/heliusapi/v1/feedback/register", {
          acomodID: this.getAcomodID(),
          userID: userID,
          titleComment: `${data.title}`,
          textComment: `${data.comment}`,
          dataComment: `${this.getCurrentUserData()}`,
          userStars: data.stars,
          status: 1,
        });
      };
      if (this.feedBackList.length > 0) {
        const userAlreadyExist = this.feedBackList.find(
          (list) => list.userID == userID
        );
        if (userAlreadyExist) {
          alert("Só é permitido uma avaliação por quarto.");
          return;
        } else {
          this.modalFeedBackController();
          await createFeedBack();
          this.showEmptyFeedBackList = false;
          this.showFeedBackList = true;
          setTimeout(() => {
            this.getFeedBackData();
          }, 200);
          alert("Avaliação criada com sucesso.");
        }
      } else {
        this.modalFeedBackController();
        await createFeedBack();
        this.showEmptyFeedBackList = false;
        this.showFeedBackList = true;
        setTimeout(() => {
          this.getFeedBackData();
        }, 200);
        alert("Avaliação criada com sucesso.");
      }
    },
    getCurrentUserData() {
      const dataAtual = new Date();
      const dia = dataAtual.getDate();
      const mes =
        dataAtual.getMonth() + 1 < 10
          ? `0${dataAtual.getMonth() + 1}`
          : dataAtual.getMonth() + 1;
      const ano = dataAtual.getFullYear();
      const dataFormatada = `${dia}/${mes}/${ano}`;
      return dataFormatada;
    },
    modalFeedBackController() {
      this.showModalFeedBack = !this.showModalFeedBack;
      this.showModalFeedBack
        ? this.unloadScrollBars()
        : this.reloadScrollBars();
      this.showModalFeedBack ? (this.fadeShow = true) : (this.fadeShow = false);
    },
    reloadScrollBars() {
      document.documentElement.style.overflow = "auto";
      document.body.scroll = "yes";
    },
    unloadScrollBars() {
      document.documentElement.style.overflow = "hidden";
      document.body.scroll = "no";
    },
    skipPage() {
      if (this.$store.state.login == false) {
        alert("Você precisa estar logado para fazer uma reserva.");
      } else {
        this.$router.push("/reservas");
      }
    },
    getAcomodID() {
      let acomodID;
      if (this.$route.params.name == "quarto-simples") acomodID = 1;
      if (this.$route.params.name == "quarto-premium") acomodID = 2;
      if (this.$route.params.name == "quarto-bangalo") acomodID = 3;

      return acomodID;
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
  mounted() {
    this.getFeedBackData();

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
    this.insertDataText();
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
  z-index: 14;
  backdrop-filter: blur(2px);
  background-color: rgba(0, 0, 0, 0.466);
}

.feed-back-btn-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;

  & button {
    width: 180px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 20px;
    white-space: nowrap;
  }
}
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