<template>
  <div class="modalP">
    <div class="acomod--item1">
      <div class="acomod--item1--group">
        <div class="acomod--item1---columnl">
          <button>Pague em até 12x</button>
          <img :src="acomodImage" />
        </div>
        <div class="acomod--item1---columnr">
          <h5>{{ acomodName }}</h5>
          <p class="acomod--item1---columnr_p1">
            {{ acomodDescription }}
          </p>
          <div class="acomod--item1---columnr_info">
            <div class="acomod--item1---columnr_info-qtPeople">
              <img :src="require('@/assets/images/svgexport-36.svg')" />
              <p>{{numberPeople}} Pessoas</p>
            </div>
            <div class="acomod--item1---columnr_info-look">
              <img :src="require('@/assets/images/svgexport-37.svg')" />
              <p>Vista para floresta</p>
            </div>
            <div class="acomod--item1---columnr_info-bed">
              <img :src="require('@/assets/images/svgexport-38.svg')" />
              <p>Cama de Casal</p>
            </div>
            <button
              class="addServices services-buy--s"
              @click="$emit('openModal')"
            >
              Serviços adicionais
            </button>
          </div>
        </div>
      </div>
      <hr />
      <div class="acomod--item1---columnc">
        <div class="acomod--item1---columnc----1">
          <h3>Helius Hotel</h3>
          <ul>
            <li>Não Reembolsável</li>
            <li>Café da Manhã</li>
            <li>Internet Wifi</li>
            <li>
              Titular do Cartão de Crédito <br />
              precisa ser hóspede
            </li>
          </ul>
        </div>
        <div class="acomod--item1---columnc----2">
          <div class="acomod--item1---columnc----2_group1">
            <p class="qtdRoomP">
              Quantidade de quartos:

              <button class="addRoomS addRoom" @click="changeQtd('add')">
                +
              </button>
              <span class="qtdRoomS">{{ qtdRoom }}</span>
              <button class="remRoomS remRoom" @click="changeQtd('rem')">
                -
              </button>
            </p>

            <p>Diária por pessoa</p>
            <p>
              <s> R$ </s
              ><s class="priceDesc--s price">{{ previousPrice }}</s> Por
              <b class="price--s price">{{ priceOfficial }}</b>
            </p>
            <p>Impostos e Taxas inclusos</p>
          </div>
          <div class="acomod--item1---columnc----2_group2">
            <button class="acomod-buy acomod-buy--s" @click="$emit('buy')">
              Adicionar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReservationAccommodationsModal",
  data() {
    return {
      qtdRoom: 0,
    };
  },
  props: {
    acomodName: {
      type: String,
    },
    acomodDescription: {
      type: String,
    },
    acomodImage: {
      type: [Function, Object, Array, String],
    },
    priceOfficial: {
      type: [String, Number],
    },
    previousPrice: {
      type: [String, Number],
    },
    numberPeople: {
      type: [String, Number]
    }
  },
  emits: ["openModal", "buy", "addQtd", "remQtd"],
  methods: {
    changeQtd(action) {
      if (action == "rem" && this.qtdRoom > 0) {
        this.qtdRoom--;
        if (this.qtdRoom > 0) {
          this.$emit("remQtd");
        }
      }
      if (action == "add" && this.qtdRoom < 3) {
        this.qtdRoom++;
        if (this.qtdRoom > 1) {
          this.$emit("addQtd");
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.modalP {
  margin-bottom: 90px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  filter: drop-shadow(0 0 3px #1344297c);

  .acomod--item1 {
    display: flex;
    width: 100%;
    flex-direction: column;

    & hr {
      margin-top: 30px;
      margin-bottom: 20px;
    }

    &--group {
      display: flex;

      .acomod--item1---columnl {
        display: flex;
        width: 200px;
        position: relative;
        margin-right: 20px;

        & img {
          height: 130px;
          min-width: 180px;
          width: 100%;
          border-radius: 5px;
          user-select: none;
        }

        & button {
          color: #fff;
          outline: none;
          border: none;
          top: 10px;
          left: 10px;
          font-size: 10px;
          background-color: #134429;
          position: absolute;
          white-space: nowrap;
          border-radius: 10px;
          cursor: pointer;
          padding: 8px;
          opacity: 100%;

          &:hover {
            background-color: #1a7c46;
            transition: 0.1s;
          }
        }
      }

      .acomod--item1---columnr {
        display: flex;
        flex-direction: column;
        width: 100%;

        & h5 {
          font-size: 20px;
          white-space: nowrap;
          margin-bottom: 10px;
        }

        &_p1 {
          font-size: 14px;
          width: 90%;
          min-width: 150px;
        }

        &_info {
          display: flex;
          margin-top: 30px;
          flex-wrap: wrap;

          & div {
            display: flex;
            margin-right: 20px;
            & img {
              width: 15px;
              margin-right: 10px;
              margin-bottom: 10px;
            }
          }

          & button {
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            color: #ecb90f;
            font-size: 15px;
            background-color: #fff;
            border: none;
            cursor: pointer;

            &:hover {
              color: #ffd900;
              transition: 0.1s;
            }
          }
        }
      }
    }

    .acomod--item1---columnc {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      &----1 {
        display: flex;
        flex-direction: column;
        min-width: 220px;
        margin-right: 20px;

        & h3 {
          margin-bottom: 15px;
        }

        & ul {
          display: flex;
          flex-direction: column;
          list-style: none;
          padding: 0px;

          & li {
            margin-bottom: 10px;
            font-size: 15px;
          }
        }
      }

      &----2 {
        display: flex;
        align-items: center;
        flex-wrap: wrap;

        &_group1 {
          .qtdRoomP {
            flex-wrap: nowrap;
            white-space: nowrap;
            margin-bottom: 20px;

            & button:nth-child(1) {
              background-color: transparent;
              border: none;
              margin: 0 5px 0 5px;
              margin-top: 20px;
              font-size: 20px;
              cursor: pointer;
              font-weight: bold;
            }

            & button:nth-child(3) {
              background-color: transparent;
              border: none;
              font-size: 25px;
              margin: 0 5px 0 5px;
              cursor: pointer;
              font-weight: bold;
            }

            & span {
              font-size: 18px;
            }
          }

          & p:nth-child(2) {
            margin-bottom: 5px;
            font-size: 20px;
          }

          & p:nth-child(3) {
            margin-bottom: 20px;
            flex-wrap: wrap;
            font-size: 22px;
            & s {
              color: red;
              font-weight: bold;
            }
          }
        }

        &_group2 {
          margin: 30px 0 0 0;

          & button {
            background-color: #cba52a;
            color: #fff;
            border: none;
            border-radius: 30px;
            padding: 15px;
            width: 150px;
            height: 60px;
            cursor: pointer;

            &:hover {
              background-color: #ecb90f;
              transition: 0.1s;
            }
          }
        }
      }
    }
  }
}

@media (max-width: 1100px) {
  .acomod--item1--group {
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    .acomod--item1---columnr {
      margin-top: 35px;
      text-align: center;

      .acomod--item1---columnr_p1 {
        margin-top: 10px;
      }

      & div {
        margin-top: 10px;
      }

      & a {
        margin-top: 15px;
      }
    }

    .acomod--item1---columnr_info {
      justify-content: center;
      align-items: center;
    }
  }

  .acomod--item1---columnc {
    justify-content: center;
    align-items: center;
    flex-direction: column;

    &----1 {
      justify-content: center;
      align-items: center;
      text-align: center;
      margin-bottom: 40px;
    }

    &----2 {
      justify-content: center;
      align-items: center;
      text-align: center;
      flex-direction: column;

      & p {
        margin-right: 20px;
      }

      &_group2 {
        margin-left: 30px;
      }
    }
  }
}

@media (max-width: 370px) {
  .qtdRoomP {
    display: flex;
    flex-direction: column;
    white-space: wrap;
  }
}
</style>