<template>
  <div id="radar" :style="{width: '500px', height: '500px'}"></div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'Layout',
  data () {
    return {
      // 
      option: {
        tooltip : {
            trigger: 'axis'
        },
        calculable : true,
        radar: [
          {
            nameGap : 30, // 图中字距离图的距离
            indicator: [
              { text: '1', max: 150 },
              { text: '2', max: 150 },
              { text: '3', max: 150 },
              { text: '4', max: 120 },
              { text: '5', max: 108 },
              { text: '6', max: 72 }
            ],
            center: ['50%', '50%'],// 图的位置
            radius: 120,
            splitNumber: 4,
            name: {
              show: true,// 是否显示文字
              formatter:'{value}',// 文字的显示形式
              textStyle: {
                color: '#258cd8'// 文字颜色
              }
            },
            axisLine: {
              lineStyle: {
                color: 'rgba(255, 255, 255, 0.5)'
              }
            },
            axisLabel: { // 坐标轴文本标签
              show: false,
              textStyle: {
                color: '#247bd7' // 坐标轴刻度文字的样式
              }
            },
            splitArea: {
              areaStyle: {
                color: ['rgba(243, 243, 243, 0.9)','rgba(243, 243, 243, 0.6)',
                  'rgba(243, 243, 243, 0.1)', 'rgba(243, 243, 243, 0.6)',
                  'rgba(243, 243, 243, 0.1)', 'rgba(243, 243, 243, 0.9)'],
                  // shadowColor: 'rgba(0, 0, 0, 0.1)',
                  // shadowBlur: 10
              }
            },
            splitLine: {
              lineStyle: {
                color: 'rgba(255, 255, 255, 0.5)'
              }
            }
          }
        ],
        series: [{
          type: 'radar',
          symbol: 'rect', //rect或者none// 去掉图表中各个图区域的边框线拐点
          // radarIndex: 1,
          itemStyle: {
            emphasis: {
              lineStyle: {
                // width: 1
              }
            },
            normal: {
              color : 'rgba(0,0,0,0.5)', // 图表中各个图区域的边框线拐点颜色
              lineStyle: {
                color: '#247284' // 图表中各个图区域的边框线颜色
              },
              areaStyle: {
                type: 'default'
              }
            }
          },
          data: [{
            value: [ 120, 118, 130, 100, 99, 70 ],
            // symbolSize: 6,
            itemStyle: {
              normal: {
                areaStyle: {
                  type: 'default',
                  opacity: 0.8, // 图表中各个图区域的透明度
                  color: "#1686c2" // 图表中各个图区域的颜色
                }
              }
            },
            lineStyle: {
              normal: {
                // type: 'dashed'
                areaStyle: {

                }
              }
            }
            // label: {
            //   normal: {
            //     show: true,
            //     formatter: function(params){
            //       return params.value
            //     }
            //   }
            // }
          }, {
            value: [ 90, 113, 140, 30, 70, 60 ],
            itemStyle: {
              normal: {
                areaStyle: {
                  type: 'default',
                  color: "#6eaf97" // 图表中各个图区域的颜色
                }
              }
            },
            areaStyle: {
              normal: {
                // color: 'rgba(255, 255, 255, 0.5)',
                opacity: 0.9,
                color: new echarts.graphic.RadialGradient(0.5, 0.5, 1, [
                  {
                    color: '#B8D3E4',
                    offset: 0
                  },
                  {
                    color: '#72ACD1',
                    offset: 1
                  }
                ])
              }
            }
          }]
        }]
      }
      // 
    }
  },
  mounted () {
    this.drawRadar()
  },
  methods: {
    drawRadar () {
      var myRadar = this.$echarts.init(document.getElementById('radar'))
      myRadar.setOption(this.option)
    }
  }
}
</script>

<style scoped>

</style>
