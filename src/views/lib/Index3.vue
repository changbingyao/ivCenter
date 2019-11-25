<template>
  <div>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img src="../../../static/img/carousel_1.jpg" alt="">
            </div>
            <div class="swiper-slide">
                <img src="../../../static/img/carousel_2.jpg" alt="">
            </div>
            <div class="swiper-slide">
                <img src="../../../static/img/carousel_3.jpg" alt="">
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper"
// import 'swiper/dist/css/swiper.min.css'
// @import "swiper/dist/css/swiper.css"
export default {
  name: 'Index3',
  data () {
    return {

    }
  },
  mounted () {
      const mySwiper = new Swiper('.swiperOne', {
          slidesPerview: 4,
          observeParents: true,
          observer: true,
          pagination: {
              el: '.swiper-pagination'
          },
          // 前进后退箭头
          navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
          }
      })
  }
}
</script>

<style scoped>

</style>
