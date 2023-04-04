<template>
  <div class="container">
    <ModalLow
      v-if="render"
      :roomName="getRoomName"
      :desc1="getRoomDesc[0]"
      :desc2="getRoomDesc[1]"
      :desc3="getRoomDesc[2]"
      :desc4="getRoomDesc[3]"
      :price="getPrice[1]"
      :priceDesc="getPrice[0]"
      @modalAcomodOpen="openModalFeedBack()"
    />
    <agile
      ref="carousel"
      :mobileFirst="true"
      :infinite="true"
      :dots="false"
      :autoplay="true"
      :autoplay-speed="6000"
      :centerMode="true"
      :navButtons="false"
    >
      <div class="slide" v-for="(image, i) in images" :key="i">
        <img :src="image.src" />
      </div>
    </agile>
    <button class="btn back" @click="$refs.carousel.goToPrev()">
      <i> &#8249;</i>
    </button>
    <button class="btn skip" @click="$refs.carousel.goToNext()">
      <i> &#8250;</i>
    </button>
  </div>
</template>
<script>
import ModalLow from "../accommodations/ModalLow.vue";
import { VueAgile } from "vue-agile";

export default {
  name: "CarouselOne",
  components: { ModalLow, agile: VueAgile },
  emits: ["modalAcomodOpen"],
  props: {
    images: {
      type: [Array, Object],
    },
  },
  data() {
    return {
      render: false,
    };
  },
  methods: {
    openModalFeedBack(){
      this.$emit('modalAcomodOpen', this.getCurrentSlide);
    },
    // reservationSkipPage() {
    //   if (this.$store.state.login == true) {
    //     this.$emit("reservationPage");
    //   } else {
    //     window.scroll(0, 0);
    //     setTimeout(() => {
    //       alert(
    //         "Para fazer sua reserva clique em fazer login no topo da pagina, caso não tenha conta, clique em cadastrar-se."
    //       );
    //     }, 100);
    //   }
    // },
  },
  computed: {
    getCurrentSlide() {
      return this.$refs.carousel.getCurrentSlide();
    },
    getRoomName() {
      if (this.getCurrentSlide == 0) {
        return "Quarto Simples";
      } else if (this.getCurrentSlide == 1) {
        return "Quarto Premium";
      } else if (this.getCurrentSlide == 2) {
        return "Quarto Bangalô";
      }
    },
    getRoomDesc() {
      const roomDataDesc = [];
      if (this.getCurrentSlide == 0) {
        roomDataDesc.push("01 Suite");
        roomDataDesc.push("01 Suite");
        roomDataDesc.push("01 Suite");
        roomDataDesc.push("01 Suite");
      } else if (this.getCurrentSlide == 1) {
        roomDataDesc.push("02 Suite");
        roomDataDesc.push("02 Suite");
        roomDataDesc.push("02 Suite");
        roomDataDesc.push("02 Suite");
      } else if (this.getCurrentSlide == 2) {
        roomDataDesc.push("03 Suite");
        roomDataDesc.push("03 Suite");
        roomDataDesc.push("03 Suite");
        roomDataDesc.push("03 Suite");
      }

      return roomDataDesc;
    },
    getPrice() {
      if (this.getCurrentSlide == 0) {
        return ["199,99", "99,90"];
      } else if (this.getCurrentSlide == 1) {
        return ["399.99", "199,90"];
      } else if (this.getCurrentSlide == 2) {
        return ["599,99", "299,90"];
      }
    },
  },
  mounted() {
    this.render = true;
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  position: relative;
  margin-top: 20px;
  margin-bottom: 40px;
}

.agile {
  width: 100%;
}

.slide {
  display: block;
  height: 100%;
  object-fit: cover;
  width: 100%;
}
.container-btn {
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: absolute;
  z-index: 10;
  padding: 30px;
}

.btn {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
  background-color: #fff;
  color: #000;
  border: none;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  transition: 0.2s;
  font-size: 20px;
  font-weight: bold;
  user-select: none;

  &:hover {
    background-color: #b6b6b6;
  }
}
.back {
  position: absolute;
  left: 30px;
}

.feedback{
  position: absolute;
  bottom: 140px;
  z-index: 12;
}

.skip {
  position: absolute;
  right: 30px;
}

img {
  width: 100%;
  height: 80%;
}

@media (max-width: 830px) { 
  .container {
    flex-direction: column-reverse;
    margin-top: 0px;
  }
}

@media (max-width:980px) {
  .btn {
 display: none;
  }
}
</style>