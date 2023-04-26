<template>
  <div class="container">
    <h2>Queremos te ouvir!</h2>
    <form class="container-form">
      <button class="exit" @click="$emit('closeModal')">&#x2715;</button>
      <InputForm
        labelTitle="Titulo"
        placeHolder="Digite o titulo da sua avaliação"
        classInput="title"
      />
      <TextArea
        labelTitle="Comentario"
        placeHolder="Digite o comentario da sua avaliação"
        :column="20"
        :rows="20"
        classTxtArea="comment"
      />
      <div class="container-stars">
        <h3>Classificação: {{ rating }}/5</h3>
        <div class="container-starsRate">
          <div v-for="n in 5" :key="n" @click="setRating(n)">
            <span :class="{ star: true, filled: n <= rating }">&#9733;</span>
          </div>
        </div>
      </div>
      <button class="btn-send" @click.prevent="sendFeedBack()">Enviar</button>
    </form>
  </div>
</template>

<script>
import InputForm from "./forms/InputForm.vue";
import TextArea from "./forms/TextAreaForm.vue";
import axios from "axios";

export default {
  name: "FeedBackModal",
  components: { InputForm, TextArea },
  data() {
    return {
      title: "",
      comment: "",
      rating: 0,
    };
  },
  emits: ["sendFeedBack", "closeModal"],
  methods: {
    setRating(rating) {
      this.rating = rating;
    },
    sendFeedBack() {
      const title = document.querySelector(".title").value;
      const comment = document.querySelector(".comment").value;
      if (title && comment && this.rating) {
        this.$emit("sendFeedBack", {
          title: title,
          comment: comment,
          stars: this.rating,
        });
      } else {
        alert("As informações não podem estar vazias ou incompletas.");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  outline: none;
  background: none;
  border: none;
  cursor: pointer;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  min-width: 400px;
  width: 30%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  flex-direction: column;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  border: 2px solid #000;
  filter: drop-shadow(0 0 3px #000);
  z-index: 15;
  transition: 0.2s;
}

.container-form {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;
}

.container-stars {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
}

.container-starsRate {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.star {
  font-size: 3rem;
  color: #ddd;
  cursor: pointer;
  transition: color 0.2s ease-out;
}
.filled {
  color: #ff9f1c;
}

.btn-send {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #cba52a;
  color: #fff;
  border-radius: 30px;
  padding: 15px;
  width: 120px;
  height: 50px;
  margin-top: 30px;
  font-weight: bold;

  &:hover {
    background-color: #ecb90f;
    transition: 0.1s;
  }
}

.exit {
  position: absolute;
  font-size: 1.5rem;
  top: 10px;
  right: 15px;
}
</style>