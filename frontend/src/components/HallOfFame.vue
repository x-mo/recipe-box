<template>
  <div class="halloffame">
    <div class="level"><h1 class="title has-text-grey-dark title-sentence is-size-1 level-item">What People Say About Us</h1></div>
    <div class="halloffame columns is-multiline is-centered">
      <div class="card column is-two-fifths">
        <div class="card-content">
          <p
            class="title"
          >“I can finally cook the food I like, home, for me and my family, and all I had to do is click a button. The greatest time saver I've ever came across.”</p>
          <p class="subtitle">Sherine Al-Zain</p>
        </div>
        <footer class="card-footer">
          <p class="card-footer-item">
            <span>
              View on
              <a href="https://twitter.com/codinghorror/status/506010907021828096">Twitter</a>
            </span>
          </p>
          <p class="card-footer-item">
            <span>
              Share on
              <a href="#">Facebook</a>
            </span>
          </p>
        </footer>
      </div>

      <div class="card column is-two-fifths">
        <div class="card-content">
          <p
            class="title"
          >“I thought I couldn't cook until I tried one of the boxes, I've learned so much.. simply the best way to get started. ”</p>
          <p class="subtitle">Jeff Atwood</p>
        </div>
        <footer class="card-footer">
          <p class="card-footer-item">
            <span>
              View on
              <a href="https://twitter.com/codinghorror/status/506010907021828096">Twitter</a>
            </span>
          </p>
          <p class="card-footer-item">
            <span>
              Share on
              <a href="#">Facebook</a>
            </span>
          </p>
        </footer>
      </div>

      <div class="card column is-two-fifths">
        <div class="card-content">
          <p class="title">“Great food, Reasonable prices, Friendly customer service.”</p>
          <p class="subtitle">Samer Ashraf</p>
        </div>
        <footer class="card-footer">
          <p class="card-footer-item">
            <span>
              View on
              <a href="https://twitter.com/codinghorror/status/506010907021828096">Twitter</a>
            </span>
          </p>
          <p class="card-footer-item">
            <span>
              Share on
              <a href="#">Facebook</a>
            </span>
          </p>
        </footer>
      </div>

      <div class="card column is-two-fifths">
        <div class="card-content">
          <p
            class="title"
          >“Just had my first box delivered, very clean and the recipe is super easy to follow, surely won't be my last.”</p>
          <p class="subtitle">Maged Shabaan</p>
        </div>
        <footer class="card-footer">
          <p class="card-footer-item">
            <span>
              View on
              <a href="https://twitter.com/codinghorror/status/506010907021828096">Twitter</a>
            </span>
          </p>
          <p class="card-footer-item">
            <span>
              Share on
              <a href="#">Facebook</a>
            </span>
          </p>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "halloffame",
  data() {
    return {
      //   recipesArray: []
    };
  },
  created() {}
};
</script>

<style scoped>

.title-sentence {
  margin-top: 16px;
}
.columns {
  margin: 5px;
}
.column {
  margin: 20px;
}
</style>
