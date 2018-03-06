import ElementSkeleton from './skeleton'
import dataMerge from 'vuikit/src/util/vue-data-merge'
import { assign } from 'vuikit/src/util/lang'

export default {
  functional: true,
  props: assign({}, ElementSkeleton.props, {
    width: {
      type: Number,
      default: 150
    },
    height: {
      type: Number,
      default: 120
    }
  }),
  render (h, { data, props }) {
    return h(ElementSkeleton, dataMerge(data, {
      class: 'vk-skeleton-image',
      props
    }))
  }
}