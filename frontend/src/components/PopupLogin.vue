<template>
  <!-- template for the modal component -->
  <div id="modal-template">
    <div class="modal is-active">
      <div class="modal-background" @click="$emit('close')"></div>
      <div class="modal-card">
        <div class="modal-header">
          <div class="tabs is-toggle is-centered has-background-white">
            <ul class="top-pad">
              <li id="login-tab" class="is-active" @click="switchTab('login')">
                <a>
                  <span>Login</span>
                </a>
              </li>
              <li id="register-tab" @click="switchTab('register')">
                <a>
                  <span>Register</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div id="login-card" class="modal-card-body">
          <div class="field">
            <label class="label">Email</label>
            <div class="control">
              <input
                v-model="logEmail"
                name="logEmail"
                v-validate="'required'"
                class="input"
                type="email"
              />
            </div>
          </div>
          <div class="field">
            <label class="label">Password</label>
            <div class="control">
              <input
                v-model="logPassword"
                name="logPassword"
                v-validate="'required'"
                class="input"
                type="password"
              />
            </div>
          </div>

          <div class="field is-grouped">
            <div class="control">
              <button class="button is-link" @click="loginUser">Log in</button>
            </div>
          </div>
        </div>

        <div id="register-card" class="modal-card-body is-hidden">
          <div class="field">
            <label class="label">Username</label>
            <div class="control">
              <input
                v-model="regUsername"
                name="regUsername"
                v-validate="'required'"
                class="input"
                type="text"
              />
            </div>
          </div>
          <div class="field">
            <label class="label">Email</label>
            <div class="control">
              <input
                v-model="regEmail"
                name="regEmail"
                v-validate="'required'"
                class="input"
                type="email"
              />
            </div>
          </div>
          <div class="field">
            <label class="label">Password</label>
            <div class="control">
              <input
                v-model="regPassword"
                name="regPassword"
                v-validate="'required'"
                class="input"
                type="password"
              />
            </div>
          </div>

          <div class="field is-grouped">
            <div class="control">
              <button class="button is-link" @click="registerUser">Register</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      logEmail: "",
      logPassword: "",
      regUsername: "",
      regEmail: "",
      regPassword: ""
    };
  },
  methods: {
    switchTab: function(arg) {
      const regElement = document.getElementById("register-tab");
      const logElement = document.getElementById("login-tab");
      const regCard = document.getElementById("register-card");
      const logCard = document.getElementById("login-card");

      switch (arg) {
        case "login":
          console.log("Login Case");
          logElement.classList.add("is-active");
          regElement.classList.remove("is-active");

          regCard.classList.add("is-hidden");
          logCard.classList.remove("is-hidden");

          break;
        case "register":
          console.log("Register Case");
          logElement.classList.remove("is-active");
          regElement.classList.add("is-active");

          regCard.classList.remove("is-hidden");
          logCard.classList.add("is-hidden");

          break;
        default:
      }
    },
    registerUser: function() {
      console.log("registeruser");
      const newUser = {
        username: this.regUsername,
        email: this.regEmail,
        password: this.regPassword,
        birthyear: "1993"
      };
      // console.log(newUser);

      axios
        .post("http://localhost:8080/users/registration/", newUser)
        .then(res => {
          // add auth token
          console.log(res.data.user);
          this.$cookies.set("userToken", res.data.user.token, Infinity, "/");
          this.$cookies.set("userEmail", res.data.user.email, Infinity, "/");
          // this.Vue.forceUpdate();
          console.log(this.$cookies.get("userToken"));
          // close window & hide header.login button
          this.$emit("close");
          document.getElementById("accButt").classList.add("is-hidden");
        })
        .catch(err => {
          alert("Fill Required Fields");
          console.log(err);
        });
    },
    loginUser: function() {
      console.log("loginuser");
      const newUser = {
        email: this.logEmail,
        password: this.logPassword
      };
      console.log(newUser);

      axios
        .post("http://localhost:8080/users/login/", newUser)
        .then(res => {
          // add auth token
          console.log(res.data.user);
          this.$cookies.set("userToken", res.data.user.token, Infinity, "/");
          this.$cookies.set("userEmail", res.data.user.email, Infinity, "/");
          console.log(this.$cookies.get("userToken"));
          // close window & hide header.login button
          this.$emit("close");

          document.getElementById("accButt").classList.add("is-hidden");
        })
        .catch(err => {
          alert("Fill Required Fields");
          console.log(err);
        });
    }
  },
  created() {}
};
</script>

<style scoped>
/* .is-active{
  background-color:#000;
} */
.top-pad {
  margin-top: 8px;
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
