<template>
  <div class="lib-wrapper">
    <div class="lib-box">
      <!-- 轮播start -->
      <div class="swiper-content">
        <swiper ref="mySwiper" :options="swiperOption" class="show-swiper">
        <template v-for="(item, index) in list">
          <swiper-slide :key="index">
          <div class="swiper-item">
            <span>{{ item }}</span>
          </div>
          </swiper-slide>
        </template>
        </swiper>
      </div>
      <!-- 轮播end -->
    </div>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { mapState } from 'vuex'
import store from '@/store'
export default {
  name: 'Index',
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      list: [1, 2, 3],
      swiperOption: {
        // autoplay: true,
        loop: true,
        slidesPerView: 'auto',
        watchSlidesProgress: true,
        // slidesOffsetBefore: 0,
        // spaceBetween: 20,
        centeredSlides: true, 
        init: false,
        on: {
          progress: function () {
            for (let i = 0; i < this.slides.length; i++) {
              const slide = this.slides.eq(i) // 指定匹配元素集缩减值
              const slideProgress = this.slides[i].progress // 当前元素集的progress值
              let modify = 0 // 偏移权重
              if (parseInt(Math.abs(slideProgress)) > 0) {
                modify = Math.abs(slideProgress) * 0.2 // 不一定要0.2，可自行调整
              }
              const translate = slideProgress * modify * 500 + 'px' // 500是swiper-slide的宽度
              const scale = 1 - Math.abs(slideProgress) / 5 // 缩放权重值，随着progress由中向两边依次递减，可自行调整
              const zIndex = 99 - Math.abs(Math.round(10 * slideProgress))
              slide.transform(`translateX(${translate}) scale(${scale})`)
              slide.css('zIndex', zIndex)
              slide.css('opacity', 1) // 是否可见
              if (parseInt(Math.abs(slideProgress)) > 1) { // 设置了只有选中的元素以及他两遍的显示，其他隐藏
                slide.css('opacity', 0)
              }
            }
          },
          slideChange: function () {
            store.commit('SET_ACTIVE_INDEX', this.activeIndex)
          },
        }
      }
    }
  },
  computed: {
    swiper() {
    return this.$refs.mySwiper.swiper
    },
    ...mapState({
      activeItemIndex: state => state.activeIndex
    })
  },
  mounted() {
    this.initSwiper()
  },
  methods: {
    initSwiper() {
      this.$nextTick(async() => {
        await this.swiper.init()
        await this.swiper.slideTo(this.activeItemIndex)
      })
    }
  }
}
</script>

<style scoped>
.lib-wrapper {
  margin-top: 100px;
}

.lib-box {
  width: 1200px;
  margin: 0 auto;
}

.swiper-content {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  margin: 0 auto;
}

.swiper-content .show-swiper {
  width: 100%;
  top: 0;
  left: 0;
}

.swiper-content .show-swiper .swiper-slide {
  width: 370px;
  transition: all .4s cubic-bezier(.4, 0, .2, 1);
}

.swiper-content .show-swiper .swiper-slide .swiper-item {
  width: 100%;
  height: 200px;
  background: rgb(140, 172, 134);
  border-radius: 6px;
  color: orangered;
  font-size: 24px;
  /* line-height: 1.5; */
  border: 1px solid orangered;
}
</style>
