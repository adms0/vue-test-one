<script>
import {RouterView} from 'vue-router'
import Navigation from './components/Navigation.vue';
import {mapActions} from 'vuex'
export default {
  components: {
    Navigation,
    RouterView,
  },
  data() {
    return {
      mobile: null
    }
  },
  created() {

  },
  methods: {
    ...mapActions(['GET_INVOICES'])
  },
}

</script>

<template>
  <div class="app">
    <Navigation />
  </div>
  <RouterView />
</template>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  font-weight: normal;
}

.app {
  background-color: #141624;
  min-height: 100vh;
  width: 100%;
  display: flex;
}
</style>
