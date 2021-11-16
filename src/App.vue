<template>
  <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"></a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" onclick="navbar('navbarNavAltMarkup')">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav m-auto">

<!-- Router -->
              <router-link
                tag= "a"
                class="nav-link"
                v-for="link in links"
                :key="link.title"
                :to="link.url"
                >{{ link.title }}
              </router-link>
<!-- Router -->

            </div>
          </div>
        </div>
      </nav>
      
<!-- Router -->
      <main>
          <router-view></router-view>
          <add-task></add-task>
      </main>
<!-- Router -->

      <div v-if="isThereCompeted.length" class="text-center mt-3">
          <button class="btn btn-dark" @click="clearCompleted()">Clear Completed</button>
      </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      links: [
          {'title': 'All', 'url': '/all'},
          {'title': 'Active', 'url': '/active'},
          {'title': 'Completed', 'url': '/completed'}
      ],
    }
  },
  computed: {
    isThereCompeted () {
      return this.$store.getters.checkListCompeted
    }
  },
  methods: {
    clearCompleted () {
      this.$store.commit('setCheckList', this.$store.getters.checkListActive)
    }
  }
}
</script>

<style>
</style>
