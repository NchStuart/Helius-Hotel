import { createStore } from "vuex";

export default createStore({
  strict: true,
  state: {
    login: false,
    users: [],
    loggedUser: null,
    accommodations: [
      { name: "quarto-simples" },
      { name: "quarto-premium" },
      { name: "quarto-bangalo" },
    ],
    cupomList: {
      cincoPorcento: {
        names: ['helius5'],
        porcentagem: 5
      },
      dezPorcento: {
        names: ['helius10'],
        porcentagem: 10
      },
      vinteCincoPorcento: {
        names: ['helius25'],
        porcentagem: 25
      },
    },
    activeReservationUserList: [],
    reservationsSent: false,
  },
  getters: {
    getLoginState(state) {
      return state.login;
    },
    getUsers(state) {
      return state.users;
    },
    getUsersEmails(state) {
      const emailsList = [];

      state.users.length > 0
        ? state.users.forEach((user) => {
            emailsList.push(user.email);
          })
        : null;

      return emailsList;
    },
    getLoggedUser(state) {
      return state.loggedUser;
    },
    getUserLevel(state) {
      if (state.loggedUser) {
        return state.loggedUser.userLevel;
      }
      return 0;
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
    addUser(state, user) {
      state.users.push(user);
      localStorage.setItem("usersList", JSON.stringify(state.users));
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
              sessionStorage.setItem("loggedUser", JSON.stringify(state.loggedUser));
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
              sessionStorage.setItem("loggedUser", JSON.stringify(state.loggedUser));
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
            sessionStorage.setItem("loggedUser", JSON.stringify(state.loggedUser));
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
      context.commit("addUser", payload);
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
