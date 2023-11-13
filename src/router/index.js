import Vue from 'vue'
import Router from 'vue-router'
import ArticleList from '@/components/ArticleList'
import ArticleShow from '@/components/ArticleShow'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/articles',
      name: 'ArticleList',
      component: ArticleList
    },
    {
      path: '/article',
      name: 'ArticleShow',
      component: ArticleShow
    }
  ]
})
