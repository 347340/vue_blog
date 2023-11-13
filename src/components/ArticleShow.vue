<template>
  <div>
    <p>
      {{ article.title }}<br/>
      {{ article.created_at }}
    </p>
    <p v-html='article.content'>
    </p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      article: {}
    }
  },
  mounted () {
    this.$http.get('http://localhost:3000/api/articles/' + this.$route.query.id)
      .then(response => {
        this.article = response.data
      })
      .catch(error => {
        console.error(error)
      })
  }
}
</script>
