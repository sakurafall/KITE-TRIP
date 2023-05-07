<template>
  <div class="home">
    <home-nav-bar />
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="">
    </div>
    <home-search-box />
    <home-categories />
    <home-content />
    <button @click="moreBtnClick">加载更多</button>
  </div>
</template>

<script setup>
import useHomeStore from '@/stores/modules/home'
import HomeNavBar from './cpns/home-nav-bar.vue'
import HomeSearchBox from './cpns/home-search-box.vue'
import HomeCategories from './cpns/home-categories.vue'
import HomeContent from './cpns/home-content.vue'
import { ref } from 'vue'

// import { getHotSuggests } from '@/service'


// 发送网络请求 页面中
// 1. 热门建议
// const hotSuggests = ref([])
// getHotSuggests().then(res => {
//   console.log(res)
//   hotSuggests.value = res.data
// })
// 2. 分类列表
// const categories = ref([])

// 发送网络请求 store中
const homeStore = useHomeStore()
homeStore.fetchHotSuggestsData()
homeStore.fetchCategoriesData()
homeStore.fetchHouseListData()

const moreBtnClick = () => {
  homeStore.fetchHouseListData()
}


</script>

<style lang="less" scoped>
.home {
  padding-bottom: 50px;
}
.banner {
  img {
    width: 100%;
  }
}


</style>