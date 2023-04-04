<template>
  <div class="accommodations-bedrooms--item---info">
    <h4>
      {{ roomName }}
    </h4>
    <div class="column-one">
      <p>Promoção valida por tempo limitado.</p>
    </div>
    <div class="column-two">
      <p>
        Diaria por pessoa - de <s> R$ </s
        ><s class="priceDesc--s price">{{ priceDesc }}</s> Por
        <b class="price--s price">{{ price }}</b>
      </p>
    </div>
    <button class="reservationBtn" @click="$emit('modalAcomodOpen')">Mais informações</button>
  </div>
</template>

<script>
export default {
  name: "ModalLow",
  emits: ["modalAcomodOpen"],
  props: {
    roomName: {
      type: String,
    },
    desc1: {
      type: String,
    },
    desc2: {
      type: String,
    },
    desc3: {
      type: String,
    },
    desc4: {
      type: String,
    },
    price: {
      type: String,
    },
    priceDesc: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.column-one {
  display: flex;
}

.price {
  font-size: 16px;
  font-style: italic;
}

s{
  color: red;
}
.column-two {
  display: flex;
}
.accommodations-bedrooms--item---info {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  top: 0;
  background-color: #134429;
  border-radius: 5px;
  position: absolute;
  padding: 20px;
  z-index: 10;

  & h4 {
    color: #fff;
    margin-top: 10px;
    margin-bottom: 20px;
  }

  & p {
    margin-bottom: 20px;
    color: #fff;
  }

  & button {
    color: #fff;
    outline: none;
    border: none;
    padding: 10px;
    border-radius: 30px;
    background: #ffbf00;
    cursor: pointer;

    &:hover {
      background-color: #ffd000;
      transition: all ease 0.2s;
    }
  }
}

// @media (max-width: 1115px) {
//   .accommodations-bedrooms--item---info {
//     flex-direction: column;
//     align-items: center;

//     height: 70%;
//     width: 28%;

//     & h4 {
//       color: #fff;
//       padding-top: 0px;
//       padding-bottom: 20px;
//       margin: 0;
//       font-size: 15px;
//     }

//     & p {
//       margin: 0;
//       font-size: 15px;
//       padding-bottom: 15px;
//       color: #fff;
//     }

//     & button {
//       color: #fff;
//       outline: none;
//       border: none;
//       height: 40px;
//       width: 60%;
//       border-radius: 30px;
//       background: #ffbf00;
//       cursor: pointer;

//       &:hover {
//         background-color: #ffd000;
//         transition: all ease 0.2s;
//       }
//     }
//   }
// }

@media (max-width: 1024px) {
  .accommodations-bedrooms--item---info {
    font-size: 15px;
    padding: 10px;
    line-height: 10px;
  }
}

@media (max-width: 830px) {
  .accommodations-bedrooms--item---info {
    font-size: 12px;
    position: inherit;
    justify-content: center;
    align-items: center;
    padding: 10px;
    margin-top: 20px;
    white-space: nowrap;
  }

  .accommodations-bedrooms--item---info button{
      font-size: 12px;
      padding: 8px;
  }
}
</style>