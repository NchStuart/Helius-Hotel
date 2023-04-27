import axios from "axios";
import { createStore } from "vuex";

export default createStore({
  strict: true,
  state: {
    login: false,
    loggedUser: null,
    accommodations: [
      {
        name: "quarto-simples",
        desc: "Nossos quartos simples oferecem a melhor opção custo/benefício se você pretende aliar bem estar e economia.",
        price: "99,90"
      },
      {
        name: "quarto-premium",
        desc: "Quartos premium com todas as comodidades essenciais para o seu conforto. Todos os nossos apartamentos luxo são de frente e proporcionam aos nossos hóspedes uma vista maravilhosa, além de um espaço reservado especialmente para aqueles que vem a trabalho e precisam utilizar seu notebook.",
        price: "199,90"
      },
      {
        name: "quarto-bangalo",
        desc: "Nossos quartos Bangalô são exatamente como o nome já diz: muito mais conforto e requinte para nossos hóspedes. Alguns de nossos quartos bangalô são equipados com sauna.",
        price: "299,90"
      },
    ],
    cupomList: {
      cincoPorcento: {
        names: ["helius5"],
        porcentagem: 5,
      },
      dezPorcento: {
        names: ["helius10"],
        porcentagem: 10,
      },
      vinteCincoPorcento: {
        names: ["helius25"],
        porcentagem: 25,
      },
    },
    activeReservationUserList: [],
    reservationsSent: false,
  },
  getters: {
    getLoginState(state) {
      return state.login;
    },
    getLoggedUser(state) {
      return state.loggedUser;
    },
    getReservations(state) {
      return state.reservationsSent;
    },
    getAccommodations(state) {
      return state.accommodations;
    },
  },
  mutations: {
    initializeStore(state) {
      localStorage.getItem("usersList")
        ? (state.users = JSON.parse(localStorage.getItem("usersList")))
        : null;
      if (state.loggedUser) {
        localStorage.getItem(`reservaUserData:${state.loggedUser.email}`)
          ? state.activeReservationUserList.push(
              JSON.parse(
                localStorage.getItem(
                  `reservaUserData:${state.loggedUser.email}`
                )
              )
            )
          : null;
        localStorage.getItem(`reservaPaymentData:${state.loggedUser.email}`)
          ? state.activeReservationUserList.push(
              JSON.parse(
                localStorage.getItem(
                  `reservaPaymentData:${state.loggedUser.email}`
                )
              )
            )
          : null;
      }
      sessionStorage.getItem("loginState")
        ? (state.login = JSON.parse(sessionStorage.getItem("loginState")))
        : null;
      sessionStorage.getItem("loggedUser")
        ? (state.loggedUser = JSON.parse(sessionStorage.getItem("loggedUser")))
        : null;
    },
    reservationFormChange(state, payLoad) {
      state.reservationsSent = payLoad;
    },
    login(state, user) {
      state.login = true;
      state.loggedUser = user;
      sessionStorage.setItem("loginState", JSON.stringify(state.login));
      sessionStorage.setItem("loggedUser", JSON.stringify(state.loggedUser));
    },
    logout(state) {
      state.login = false;
      state.loggedUser = null;
      sessionStorage.removeItem("loginState");
      sessionStorage.removeItem("loggedItem");
    },
    changeEmailUser(state, newEmail) {
      if (state.users.length > 0) {
        state.users.forEach((v) => {
          if (v.email == newEmail && newEmail !== state.loggedUser.email) {
            alert("Email já cadastrado no sistema, tente um diferente.");
          } else {
            if (v.email == state.loggedUser.email) {
              v.email = newEmail;
              state.loggedUser.email = newEmail;
              localStorage.removeItem("usersList");
              localStorage.setItem("usersList", JSON.stringify(state.users));
              sessionStorage.removeItem("loggedUser");
              sessionStorage.setItem(
                "loggedUser",
                JSON.stringify(state.loggedUser)
              );
            }
          }
        });
      } else {
        alert("Erro de sessão - Sessão finalizada, faça login novamente.");
        state.login = false;
        state.loggedUser = null;
      }
    },
    changeNameUser(state, newName) {
      if (state.users.length > 0) {
        state.users.forEach((v) => {
          if (v.email == state.loggedUser.email) {
            v.name = newName;
            state.loggedUser.name = newName;
            localStorage.removeItem("usersList");
            localStorage.setItem("usersList", JSON.stringify(state.users));
            sessionStorage.removeItem("loggedUser");
            sessionStorage.setItem(
              "loggedUser",
              JSON.stringify(state.loggedUser)
            );
          }
        });
      } else {
        alert("Erro de sessão - Sessão finalizada, faça login novamente.");
        state.login = false;
        state.loggedUser = null;
      }
    },
    changePassword(state, newPassword) {
      if (state.users.length > 0) {
        state.users.forEach((v) => {
          if (v.email == state.loggedUser.email) {
            v.password = newPassword;
            state.loggedUser.password = newPassword;
            localStorage.removeItem("usersList");
            localStorage.setItem("usersList", JSON.stringify(state.users));
            sessionStorage.removeItem("loggedUser");
            sessionStorage.setItem(
              "loggedUser",
              JSON.stringify(state.loggedUser)
            );
          }
        });
      } else {
        alert("Erro de sessão - Sessão finalizada, faça login novamente.");
        state.login = false;
        state.loggedUser = null;
      }
    },
  },
  actions: {
    initializeStore(context) {
      context.commit("initializeStore");
    },
    reservationFormChange(context, payLoad) {
      context.commit("reservationFormChange", payLoad);
    },
    addUser(context, payload) {
      console.log(payload)
      axios
        .post("http://localhost:3333/heliusapi/v1/user/register", payload)
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
    },
    login(context, payload) { 
      context.commit("login", payload);
    },
    logout(context) {
      context.commit("logout");
    },
    changeNameUser(context, payload) {
      context.commit("changeNameUser", payload);
    },
    changeEmailUser(context, payload) {
      context.commit("changeEmailUser", payload);
    },
    changePassword(context, payload) {
      context.commit("changePassword", payload);
    },
  },
  modules: {},
});
