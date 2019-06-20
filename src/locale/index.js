import Vue from 'vue'
import VueI18n from 'vue-i18n'
import elementEnUS from 'element-ui/lib/locale/lang/en'
import elementZhCN from 'element-ui/lib/locale/lang/zh-CN'
import zhCN from './lang/zh-CN'
import enUS from './lang/en-US'

Vue.use(VueI18n)

const messages = {
  'en-US': {
    ...enUS,
    ...elementEnUS
  },
  'zh-CN': {
    ...zhCN,
    ...elementZhCN
  }
}

const i18n = new VueI18n({
  locale: window.navigator.language || 'zh-CN',
  messages
})

export default i18n
