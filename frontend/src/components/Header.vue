<template>
  <div class="header">
    <nav class="navbar is-success is-fixed-top" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="http://localhost:8080/">
          <img src="../assets/box.png" />
          <span class="is-size-4">
            <strong>&nbsp;RecipeBox</strong>
          </span>
        </a>

        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item" href="http://localhost:8080/recipes">Recipes</a>

          <div class="navbar-item has-dropdown is-hoverable" v-show="isAdmin">
            <a class="navbar-link">Admin Pages</a>

            <div class="navbar-dropdown">
              <a class="navbar-item" href="http://localhost:8080/addrecipe">Add Recipes</a>
              <a class="navbar-item" href="http://localhost:8080/addingredient">Add Ingredients</a>
              <a class="navbar-item" href="http://localhost:8080/orders">Pending Orders</a>
              <!-- <a class="navbar-item">Contact</a> -->
              <!-- <hr class="navbar-divider" /> -->
              <!-- <a class="navbar-item">Report an issue</a> -->
            </div>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div id="usremail" v-show="userTokenExist">
              <strong>{{userEmail}}</strong>&nbsp;&nbsp;&nbsp;
            </div>
            <div id="accButt" class="buttons">
              <a class="button is-link" v-show="!userTokenExist" @click="$parent.showModal= true">
                <strong>Have an account?</strong>
              </a>
              <a class="button is-light" v-show="userTokenExist" @click="clearTokens">
                <strong>Log out</strong>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Header",
  // computed: {
  //     userTokenExist() {
  //       return {

  //       }
  //     }
  // },
  data() {
    return {
      userTokenExist: false,
      userEmail: "",
      isAdmin: false
    };
  },
  methods: {
    clearTokens: function() {
      this.$cookies.remove("userToken", "/");
      this.$cookies.remove("userEmail", "/");
      this.$cookies.remove("isAdmin", "/");
      this.$cookies.remove("userName", "/");

      window.location.reload();
    }
  },
  created() {
    // console.log("header created")
    if (this.$cookies.get("userToken") == null) {
      this.userTokenExist = false;
    } else {
      this.userTokenExist = true;
    }

    if (this.$cookies.get("userEmail") == null) {
      this.userEmail = "";
    } else {
      this.userEmail = this.$cookies.get("userEmail");
    }
    // if (!this.$cookies.get("isAdmin")) {
    //   this.isAdmin = false;
    // } else {
    //   this.isAdmin = this.$cookies.get("isAdmin");
    //   console.log("Header isAd");
    //   console.log(this.isAdmin);
    // }
    this.isAdmin = (this.$cookies.get("isAdmin")=="true");
  }
};
</script>

<style scoped>
/* .header{
  margin-bottom:52px;
} */
</style>
