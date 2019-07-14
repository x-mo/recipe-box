<template>
  <div class="my-footer-container is-widescreen">
    <div class="my-footer is-widescreen">
      <footer class="footer has-background-success">
        
        <div class="socialmedia">
          <div class="w-100 white sans-serif flex flex-column justify-center items-center">
            <div class="mw8 center overflow-hidden">
              <ul class="list ma0 pa0 flex flex-row flex-wrap gray8 has-background-success">
                <li class="pv3 ph2 ma0 link grow">
                  <a class="gray8" target="_blank" href="https://www.youtube.com/">
                    <font-awesome-icon :icon="['fab', 'youtube']" size="2x" />
                  </a>
                </li>
                <li class="pv3 ph2 ma0 link grow">
                  <a class="gray8" target="_blank" href="https://www.facebook.com/">
                    <font-awesome-icon :icon="['fab', 'facebook']" size="2x" />
                  </a>
                </li>
                <li class="pv3 ph2 ma0 link grow">
                  <a class="gray8" target="_blank" href="https://www.twitter.com/">
                    <font-awesome-icon :icon="['fab', 'twitter']" size="2x" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
        </div>
        <!-- SOCIALMEDIA END -->
        <div class="content has-text-centered">
          <p>
            <strong>RecipeBox</strong>
            © 2019 All Rights Reserved.
          </p>
        </div>
        <!-- COPYRIGHTS END -->
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style scoped>
.my-footer-container{
  margin-top:100px;
}
</style>
