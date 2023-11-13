<template>
  <div>
    <div v-for="article in articles" :key="article.id">
      <router-link :to="{ name: 'ArticleShow', query: { id: article.id } }">
        <p>
          {{ article.created_at }}&nbsp;&nbsp;
          {{ article.title }}
        </p>
      </router-link>
    </div>
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
    this.$http.get('http://localhost:3000/api/articles')
      .then(response => {
        console.info(response.data)
        this.articles = response.data.articles
      })
      .catch(error => {
        console.error(error)
      })
  }
}
</script>
