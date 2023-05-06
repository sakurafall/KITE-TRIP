<template>
  <div class="search-box">
    <!-- 位置信息 -->
    <div class="location">
      <div class="city" @click="cityClick">{{ currentCity.cityName }}</div>
      <div class="position" @click="positionClick">
        <span class="text">我的位置</span>
        <img src="@/assets/img/home/icon_location.png">
      </div>
    </div>

    <!-- 日期范围 -->
    <div class="section date-range">
      <div class="start">
        <div class="date">
          <span class="tip">入住</span>
          <span class="time">{{ startDate }}</span>
        </div>
      </div>
      <div class="stay">共一晚</div>
      <div class="end">
        <div class="date">
          <span class="tip">离店</span>
          <span class="time">{{ endDate }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import useCityStore from "@/stores/modules/city";
import { storeToRefs } from "pinia";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { formatMonthDay } from '@/utils/format_date'

const router = useRouter()

// 位置/城市
const cityClick = () => {
  router.push("/city")
}

const positionClick = () => {
  navigator.geolocation.getCurrentPosition(res => {
    console.log("获取位置成功:", res);
  }, err => {
    console.log("获取位置失败", err)
  }, {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  })
}

// 当前城市
const cityStore = useCityStore()
const { currentCity } = storeToRefs(cityStore)

// 日期范围的处理
const nowDate = new Date()
const startDate = ref(formatMonthDay(nowDate))
// const newDate = nowDate.setDate(nowDate.getDate() + 1) // 利用setDate、getdate方法
const newDate = new Date().getTime() + 24 * 60 * 60 * 1000 // 利用时间戳 + 一天的毫秒数
const endDate = ref(formatMonthDay(newDate))

</script>

<style lang="less" scoped>
.location {
  display: flex;
  align-items: center;
  height: 44px;
  padding: 0 20px;

  .city {
    flex: 1;
    color: #333;
    font-size: 15px;
  }

  .position {
    display: flex;
    align-items: center;
    width: 74px;

    .text {
      position: relative;
      top: 2px;
      color: #333;
      font-size: 12px;
    }

    img {
      margin-left: 5px;
      width: 18px;
      height: 18px;
    }
  }
}
.section {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  color: #999;
  padding: 0 20px;

  .start, .end {
    flex: 1;
    display: flex;
    align-items: center;
    height: 44px;
  }

  .end {
    // min-width: 30%;
    // padding-left: 20px;
    justify-content: flex-end;
    margin-right: 10px;
  }

  .date {
    display: flex;
    flex-direction: column;

    .tip {
      color: #999;
      font-size: 12px;
    }

    .time {
      color: #333;
      font-size: 15px;
      margin-top: 3px;
    }
  }
}
.date-range {
  height: 44px;
  .stay {
    flex: 1;
    flex-wrap: wrap;
    text-align: center;
    color: #666;
    font-size: 12px;
  }
}
</style>