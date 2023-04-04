<template>
  <section>
    <div class="fade" v-show="fadeShow"></div>
    <TitleInitialDescription
      title="Escolha sua acomodação"
      desc="Preencha com a acomodação desejada para continuar."
    />
    <CounterPage page="1" />

    <div class="modal-open" v-show="modalBuy">
      <div class="acomod--item1">
        <div class="acomod--item1--group">
          <h2>Minha Reserva</h2>
          <p>Clique em continuar para finalizar sua reserva</p>
        </div>
        <hr />
        <div class="acomod--item1--group2">
          <div class="resume-modal--info">
            <div
              class="date-res"
              v-for="list in roomListRemoveDuplicate"
              :key="list"
            >
              <CountRoomList
                :roomName="list"
                ref="countRoomL"
                @update="displayInfos()"
              />
            </div>
            <p class="qtServices">
              Serviços adicionais<span>{{ choiceQtdServices }}</span>
              <button
                class="reviewServices addServices services-buy--s"
                @click="openModalServices()"
              >
                Revisar
              </button>
            </p>
            <p class="qtServices">
              Total de pessoas <span>{{ totalPeopleNumber.totalPeople }}</span>
            </p>
            <hr />
            <p class="value">
              Valor serviços adicionais
              <span class="valueTotal">R$ {{ valueServicesTotal }}</span>
            </p>
            <p class="value">
              Valor acomodações
              <span class="valueTotal">R$ {{ valueAcomodTotal }}</span>
            </p>
            <p class="value">
              Valor total <span class="valueTotal">R$ {{ valueTotal }}</span>
            </p>
          </div>
          <div class="acomod--item1---columnc_button">
            <button class="acomod-next" @click="closeModalBuy()">
              Continuar Escolhendo
            </button>
            <button class="acomod-buy acomod-buy--p" @click="nextPage()">
              Finalizar Pedido
            </button>
          </div>
        </div>
      </div>
    </div>
    <ReservationServicesModal
      v-if="showServices"
      @showModalButton="showModalServices()"
      ref="services"
      @update="displayInfos()"
    />
    <ReservationAccommodationsModal
      ref="acomodSimples"
      acomodName="Quarto Simples"
      :acomodDescription="this.description[0]"
      :acomodImage="require('@/assets/images/quarto_simples.jpg')"
      :priceOfficial="
        String(price.simples.current.toFixed(2)).replace('.', ',')
      "
      :previousPrice="
        String(price.simples.previus.toFixed(2)).replace('.', ',')
      "
      numberPeople="3"
      @openModal="openModalServices(1)"
      @buy="buyReservation(1)"
      @addQtd="changeQtd('simples', 'add')"
      @remQtd="changeQtd('simples', 'rem')"
    />
    <ReservationAccommodationsModal
      acomodName="Quarto Premium"
      :acomodDescription="this.description[1]"
      :acomodImage="require('@/assets/images/quarto_premium.jpg')"
      :priceOfficial="
        String(price.premium.current.toFixed(2)).replace('.', ',')
      "
      :previousPrice="
        String(price.premium.previus.toFixed(2)).replace('.', ',')
      "
      numberPeople="4"
      @openModal="openModalServices(2)"
      @buy="buyReservation(2)"
      @addQtd="changeQtd('premium', 'add')"
      @remQtd="changeQtd('premium', 'rem')"
    />
    <ReservationAccommodationsModal
      acomodName="Quarto Bangalô"
      :acomodDescription="this.description[2]"
      :acomodImage="require('@/assets/images/bangalo03.jpg')"
      :priceOfficial="
        String(price.bangalo.current.toFixed(2)).replace('.', ',')
      "
      :previousPrice="
        String(price.bangalo.previus.toFixed(2)).replace('.', ',')
      "
      numberPeople="5"
      @openModal="openModalServices(3)"
      @buy="buyReservation(3)"
      @addQtd="changeQtd('bangalo', 'add')"
      @remQtd="changeQtd('bangalo', 'rem')"
    />
  </section>
</template>

<script>
import TitleInitialDescription from "../TitleInitialDescription.vue";
import CounterPage from "../CounterPage.vue";
import ReservationAccommodationsModal from "./ReservationAccommodationsModal.vue";
import ReservationServicesModal from "./ReservationServicesModal.vue";
import CountRoomList from "./CountRoomList.vue";

export default {
  name: "ReservasOption",
  components: {
    CounterPage,
    TitleInitialDescription,
    ReservationAccommodationsModal,
    ReservationServicesModal,
    CountRoomList,
  },
  data() {
    return {
      totalPeopleNumber: JSON.parse(
        localStorage.getItem(
          `reservaUserData:${this.$store.state.loggedUser.email}`
        )
      ),
      showServices: false,
      fadeShow: false,
      modalBuy: false,
      showCountRoomList: true,
      choiceRooms: "",
      activeCupom: false,
      roomList: [],
      roomQtd: 0,
      choiceQtdServices: 0,
      valueServicesTotal: "0,00",
      valueAcomodTotal: "0,00",
      valueTotal: "0,00",
      price: {
        simples: {
          previus: 199.9,
          current: 99.9,
        },
        premium: {
          previus: 399.9,
          current: 199.9,
        },
        bangalo: {
          previus: 599.9,
          current: 299.9,
        },
      },
      qtdRoom: 0,
      description: [
        "Nossos quartos simples oferecem a melhor opção custo/benefício se você pretende aliar bem estar e economia.",
        "Quartos premium com todas as comodidades essenciais para o seu conforto. Todos os nossos apartamentos luxo são de frente e proporcionam aos nossos hóspedes uma vista maravilhosa, além de um espaço reservado especialmente para aqueles que vem a trabalho e precisam utilizar seu notebook.",
        "Nossos quartos Bangalô são exatamente como o nome já diz: muito mais conforto e requinte para nossos hóspedes. Alguns de nossos quartos bangalô são equipados com sauna.",
      ],
    };
  },
  emits: ["change"],
  computed: {
    roomListRemoveDuplicate() {
      const novaArr = [...new Set(this.roomList)];

      return novaArr;
    },
  },
  methods: {
    countRoomLogic() {
      const el = document.querySelectorAll(".date-res");

      el.forEach((v) => {
        const dad = el.parentNode;
        this.roomQtd = dad.innerHTML;
      });
    },
    showModalServices() {
      if (this.modalBuy == true) {
        this.closeModalServices();
        this.fadeShow = true;
        this.displayInfos();
      } else {
        this.closeModalServices();
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
    closeModalServices() {
      this.fadeShow = false;
      this.showServices = false;
      this.reloadScrollBars();
    },
    openModalServices(acomod) {
      this.fadeShow = true;
      setTimeout(() => {
        document.querySelector(".modal-open2").style.opacity = "100";
      }, 100);
      this.showServices = true;
      this.unloadScrollBars();

      document.querySelector(".fade").addEventListener("click", () => {
        this.closeModalServices();
      });
    },
    openModalBuy() {
      this.fadeShow = true;
      setTimeout(() => {
        document.querySelector(".modal-open").style.opacity = "100";
      }, 100);
      this.modalBuy = true;
      this.unloadScrollBars();

      document.querySelector(".fade").addEventListener("click", () => {
        this.closeModalBuy();
      });
    },
    closeModalBuy() {
      this.fadeShow = false;
      this.modalBuy = false;
      this.reloadScrollBars();
    },
    changeQtd(acomodType, action) {
      if (acomodType == "simples" && action == "add") {
        this.price.simples.current = this.price.simples.current * 1.2;
        this.price.simples.previus = this.price.simples.previus * 1.2;
      }
      if (acomodType == "simples" && action == "rem") {
        this.price.simples.current = this.price.simples.current / 1.2;
        this.price.simples.previus = this.price.simples.previus / 1.2;
      }
      if (acomodType == "premium" && action == "add") {
        this.price.premium.current = this.price.premium.current * 1.2;
        this.price.premium.previus = this.price.premium.previus * 1.2;
      }
      if (acomodType == "premium" && action == "rem") {
        this.price.premium.current = this.price.premium.current / 1.2;
        this.price.premium.previus = this.price.premium.previus / 1.2;
      }
      if (acomodType == "bangalo" && action == "add") {
        this.price.bangalo.current = this.price.bangalo.current * 1.2;
        this.price.bangalo.previus = this.price.bangalo.previus * 1.2;
      }
      if (acomodType == "bangalo" && action == "rem") {
        this.price.bangalo.current = this.price.bangalo.current / 1.2;
        this.price.bangalo.previus = this.price.bangalo.previus / 1.2;
      }
    },
    displayInfos() {
      const priceServices =
        JSON.parse(localStorage.getItem("valueServices")) == null
          ? 0
          : localStorage.getItem("valueServices");
      const qtdServices =
        JSON.parse(localStorage.getItem("qtdServices")) == null
          ? "0"
          : localStorage.getItem("qtdServices");

      this.valueServicesTotal = priceServices;
      this.choiceQtdServices = qtdServices;

      let priceS = 0;
      let priceP = 0;
      let priceB = 0;

      const price = document.querySelectorAll(".price--s");
      setTimeout(() => {
        this.$refs.countRoomL.forEach((v) => {
          if (v.$props.roomName == "Quarto Simples" && v.$data.show == true) {
            const el = v.$refs.countRoomList;
            if (+el.innerHTML.replace("x", "") == 1) {
              priceS = 99.9 * 1;
            }
            if (+el.innerHTML.replace("x", "") == 2) {
              priceS = 99.9 * 1.2;
            }
            if (+el.innerHTML.replace("x", "") == 3) {
              priceS = 99.9 * 1.2 * 1.2;
            }
          }

          if (v.$props.roomName == "Quarto Premium" && v.$data.show == true) {
            const el = v.$refs.countRoomList;
            if (+el.innerHTML.replace("x", "") == 1) {
              priceP = 199.9 * 1;
            }
            if (+el.innerHTML.replace("x", "") == 2) {
              priceP = 199.9 * 1.2;
            }
            if (+el.innerHTML.replace("x", "") == 3) {
              priceP = 199.9 * 1.2 * 1.2;
            }
          }

          if (v.$props.roomName == "Quarto Bangalo" && v.$data.show == true) {
            const el = v.$refs.countRoomList;
            if (+el.innerHTML.replace("x", "") == 1) {
              priceB = 299.9 * 1;
            }
            if (+el.innerHTML.replace("x", "") == 2) {
              priceB = 299.9 * 1.2;
            }
            if (+el.innerHTML.replace("x", "") == 3) {
              priceB = 299.9 * 1.2 * 1.2;
            }
          }
        });
      }, 2);
      const totalPeople = localStorage.getItem(
        `reservaUserData:${this.$store.state.loggedUser.email}`
      );
      setTimeout(() => {
        this.valueAcomodTotal = String(
          (
            (priceS + priceP + priceB) *
            this.totalPeopleNumber.totalPeople
          ).toFixed(2)
        ).replace(".", ",");
        this.valueTotal = String(
          (
            (priceS + priceP + priceB) * this.totalPeopleNumber.totalPeople +
            +priceServices
          ).toFixed(2)
        ).replace(".", ",");
      }, 5);
    },
    countRoom(type) {
      const qtd = document.querySelectorAll(".qtdRoomS");
      if (type == 1) {
        this.roomList.push("Quarto Simples");
        setTimeout(() => {
          this.$refs.countRoomL.forEach((v) => {
            if (v.$props.roomName == "Quarto Simples") {
              v.$data.show = true;
              v.$data.count = qtd[0].innerHTML;
              this.displayInfos();
            }
          });
        }, 2);
      }
      if (type == 2) {
        this.roomList.push("Quarto Premium");
        setTimeout(() => {
          this.$refs.countRoomL.forEach((v) => {
            if (v.$props.roomName == "Quarto Premium") {
              v.$data.show = true;
              v.$data.count = qtd[1].innerHTML;
              this.displayInfos();
            }
          });
        }, 2);
      }
      if (type == 3) {
        this.roomList.push("Quarto Bangalo");
        setTimeout(() => {
          this.$refs.countRoomL.forEach((v) => {
            if (v.$props.roomName == "Quarto Bangalo") {
              v.$data.show = true;
              v.$data.count = qtd[2].innerHTML;
              this.displayInfos();
            }
          });
        }, 2);
      }
    },
    buyReservation(acomod) {
      const qtdRoom = document.querySelectorAll(".qtdRoomS");
      const qtdRoomText = document.querySelectorAll(".qtdRoomP");
      if (acomod == 1) {
        if (qtdRoom[0].innerHTML == 0) {
          alert("Quantidade de quarto invalida");
          qtdRoomText[0].style.color = "red";
          return;
        } else {
          qtdRoomText.forEach((v) => {
            v.style.color = "black";
          });
        }

        this.countRoom(acomod);
      }

      if (acomod == 2) {
        if (qtdRoom[1].innerHTML == 0) {
          alert("Quantidade de quarto invalida");
          qtdRoomText[1].style.color = "red";
          return;
        } else {
          qtdRoomText.forEach((v) => {
            v.style.color = "black";
          });
        }
        this.countRoom(acomod);
      }

      if (acomod == 3) {
        if (qtdRoom[2].innerHTML == 0) {
          alert("Quantidade de quarto invalida");
          qtdRoomText[2].style.color = "red";
          return;
        } else {
          qtdRoomText.forEach((v) => {
            v.style.color = "black";
          });
        }

        this.countRoom(acomod);
      }
      this.displayInfos();
      this.openModalBuy();
    },
    saveDataReservation() {
      const roomChoice = document.querySelectorAll(
        ".countContainer p:nth-child(1)"
      );
      const roomChoiceQtd = document.querySelectorAll(".countRoomList");
      const reservation = JSON.parse(
        localStorage.getItem(
          `reservaUserData:${this.$store.state.loggedUser.email}`
        )
      );
      const userPaymentdata = {
        roomChoice: [],
        servicesAdd: JSON.parse(localStorage.getItem("objectServices")),
        servicesValue: localStorage.getItem("valueServices"),
        acomodValue: this.valueAcomodTotal,
        valueTotal: this.valueTotal,
      };
      roomChoice.forEach((v) => {
        userPaymentdata.roomChoice.push(
          `${v.innerHTML} ${v.nextSibling.innerHTML}`
        );
      });

      localStorage.setItem(
        `reservaPaymentData:${this.$store.state.loggedUser.email}`,
        JSON.stringify(userPaymentdata)
      );
    },
    nextPage() {
      this.saveDataReservation();
      this.$store.dispatch("reservationFormChange", false);
      this.$emit("change");
      this.$router.push("pedido-finalizado");
      this.reloadScrollBars();
    },
  },
  created() {
    if (this.$store.state.reservationsSent == false) {
      this.$router.push("/reservas");
    }
  },
  mounted() {
    if (this.$store.state.reservationsSent == false) {
      this.$router.push("/reservas");
      return;
    }
    this.reloadScrollBars();
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
  z-index: 887;
  backdrop-filter: blur(2px);
  background-color: rgba(0, 0, 0, 0.466);
}

.modal-open {
  display: flex;
  position: fixed;
  opacity: 0;
  left: 50%;
  top: 50%;
  width: 30%;
  min-width: 290px;
  transform: translate(-50%, -50%);
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.897);
  border-radius: 5px;
  border: 3px solid #134429d2;
  filter: drop-shadow(0 0 5px #1344297c);
  z-index: 888;
  transition: 0.2s;

  .blur {
    filter: blur(50px);
  }

  .acomod--item1 {
    &--group {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding: 20px;
    }

    & p {
      text-align: center;
      margin-top: 10px;
      font-size: 14px;
    }

    &--group2 {
      display: flex;
      flex-direction: column;
      padding: 20px;
      margin-top: 0px;

      .resume-modal--info {
        & p {
          display: flex;
          justify-content: space-between;
          margin-bottom: 15px;
          text-align: left;
          font-size: 16px;
          font-style: italic;

          & b {
            margin-right: -40px;
          }
        }

        & hr {
          margin-bottom: 20px;
        }

        & span {
          margin-right: 10px;
          margin-left: 20px;
          font-size: 20px;
          font-weight: bold;
          font-style: normal;
        }
      }

      .acomod--item1---columnc_button {
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-top: 20px;
        & button {
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #134429;
          color: #fff;
          border: none;
          border-radius: 30px;
          padding: 15px;
          width: 120px;
          height: 50px;
          margin-right: 20px;
          cursor: pointer;

          &:hover {
            background-color: #cba52a;
            transition: 0.1s;
          }
        }

        & button:nth-child(2) {
          margin-right: 0px;
        }
      }
    }
  }
}
</style>