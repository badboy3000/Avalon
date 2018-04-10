import Vue from 'vue'
const Manager = {}
// options 支持是否重置 item 的 size
// options 支持是根据 parentNode 的宽度和 col 数来计算 left 还是根据 item 的 width 和 index 来计算 left
// 测试一下 index 是否会乱掉
// 是否能支持横排
Vue.use({
  install: (Vue) => {
    Vue.directive('waterfall', {
      bind (el, binding) {
        if (Vue.$isServer) {
          return
        }
        // hidden element
        el.style.opacity = 0
        el.style.visibility = 'hidden'
        // init manager
        const id = `${binding.value.id}-${binding.value.col}`
        setTimeout(() => {
          if (!Manager[id]) {
            Manager[id] = {
              container: el.parentNode,
              colCount: binding.value.col,
              data: {}
            }
          }
        }, 0)
      },
      inserted (el, binding) {
        if (Vue.$isServer) {
          return
        }
        setTimeout(() => {
          const id = `${binding.value.id}-${binding.value.col}`
          const column = binding.value.index % Manager[id].colCount
          const manager = Manager[id]
          if (!manager.data[`col-${column}`]) {
            Manager[id].data[`col-${column}`] = {
              top: 0
            }
          }
          const columnData = Manager[id].data[`col-${column}`]
          const width = el.offsetWidth
          const height = el.offsetHeight
          const maxHeight = columnData.top + height
          el.style.position = 'absolute'
          el.style.left = `${width * column}px`
          el.style.top = `${columnData.top}px`
          el.style.opacity = 1
          el.style.visibility = 'visible'
          Manager[id].data[`col-${column}`].top = maxHeight
          if (Manager[id].container.offsetHeight < maxHeight) {
            Manager[id].container.style.height = `${maxHeight}px`
          }
        }, 0)
      },
      update () {
        // TODO:支持重排序
      }
    })
  }
})