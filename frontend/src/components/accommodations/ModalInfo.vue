<template>
  <div class="modal-open2">
    <h2>{{ roomName }}</h2>
    <p> {{ roomDesc }}</p>
    <div class="resume-modal--info">
      
    </div>
    <div class="resume-modal--buy">
    </div>
  </div>
</template>

<script>
import ModalFeedBack from "./ModalFeedBack.vue";
export default {
  name: "ModalInfo",
  components: {},
  props: {
    roomName: String,
    roomDesc: String
  },
  methods: {
  
  }
};
</script>

<style lang="scss" scoped>
.modal-open2 {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  opacity: 1;
  min-width: 280px;
  width: 30%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  flex-direction: column;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  border: 2px solid #000;
  filter: drop-shadow(0 0 3px #0b3a20);
  z-index: 888;
  transition: 0.2s;

  & h2 {
    margin-bottom: 20px;
  }

  .resume-modal--info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    user-select: none;

    & p {
      margin-bottom: 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 20px;
      font-style: italic;

      & span {
        margin-top: 10px;
        font-weight: bold;
        font-style: normal;
      }
    }

    & label {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 17px;
      cursor: pointer;
      margin-bottom: 20px;
      & input {
        margin-right: 20px;
        height: 25px;
        width: 25px;
      }
      & b {
        text-align: center;
        margin-left: 10px;
        border: 1px solid #ffbb00;
        padding: 10px;
        border-radius: 20px;
      }
    }
  }

  .resume-modal--buy {
    display: flex;
    justify-content: center;
    align-items: center;
    & button {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #cba52a;
      color: #fff;
      border: none;
      border-radius: 30px;
      padding: 15px;
      width: 120px;
      height: 50px;
      cursor: pointer;
      font-weight: bold;

      &:hover {
        background-color: #ecb90f;
        transition: 0.1s;
      }
    }

    & button:nth-child(2) {
      margin-left: 20px;
    }
  }
}

.clearServices {
  background-color: #cba52a;
  border: none;
  border-radius: 1px;
  color: #fff;
  padding: 5px;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 20px;
  cursor: pointer;

  &:hover {
    background-color: #ecb90f;
    transition: 0.1s;
  }
}
</style>