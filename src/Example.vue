<template>
    <div>
        <div class="container">
            <sideNav class="nav"></sideNav>
            <router-view class="view"></router-view>
        </div>
    </div>
</template>

<script>
import sideNav from "./examples/components/side-nav.vue";

export default {
  data() {
    return {};
  },
  components: {
    sideNav
  }
};
</script>

<style lang="scss">
@import "./assets/md.scss";

.container {
  margin: 50px auto;
  width: 100%;
  background-color: #fff;
  .nav {
    position: fixed;
    width: 210px;
    a {
      text-decoration: none;
    }
  }
  .view {
    margin-left: 215px;
    width: calc(100% - 215px);
    padding: 5px 5px 48px;
    box-sizing: border-box;
  }
}

.container:after {
  content: "";
  clear: both;
  display: block;
}
</style>
