<template>
  <!-- template for the modal component -->
  <div id="modal-template">
    <div class="modal is-active">
      <div class="modal-background" @click="$emit('close')"></div>
      <div class="modal-card">
        <div class="modal-header">
        </div>

        <div id="login-card" class="modal-card-body">
          <!-- <p class="is-size-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae blanditiis iusto commodi ut eos doloribus aliquid minima rem, facilis voluptas non laboriosam magnam neque voluptatibus sequi dicta nostrum error eligendi?</p> -->
          <img src="https://bulma.io/images/placeholders/1280x960.png" alt="">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus vero optio cum maiores. Repellat nesciunt cum dolore atque aperiam voluptas eius quia incidunt doloremque cupiditate asperiores, quisquam fuga repellendus omnis?</p>
        </div>

        <div id="register-card" class="modal-card-body is-hidden">
      </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "popuprecipe",
  data() {
    return {
      
    };
  },
  methods: {
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
