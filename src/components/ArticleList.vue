<template>
  <div>
    <p v-for="article in articles" :key="article.id">
        {{ article.created_at }}&nbsp;&nbsp;
        {{ article.title }}
    </p>
  </div>
</template>
<script>
export default {
  data () {
    return {
      articles: []
    }
  },
  mounted () {
    this.$http.get('http://localhost:3000/api/articles').then((response) => {
      console.info(response.body)
      this.articles = response.body.articles
    }, (response) => {
      console.error(response)
    })
  }
}
</script>
<style>
</style>
