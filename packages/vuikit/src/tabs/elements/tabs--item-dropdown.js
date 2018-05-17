import IconMore from '@vuikit/icons/more'
import IconTriangeDown from '@vuikit/icons/triangle-down'
import { mergeData } from '@vuikit/core/utils/vue'

import { ElIcon } from 'vuikit/src/icon'

export default {
  functional: true,
  props: {
    title: {
      type: String
    },
    active: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  render (h, { props, data, listeners, children }) {
    const { title, active, disabled } = props

    delete data.on

    return h('li', mergeData(data, {
      class: {
        'uk-active': active && !disabled,
        'uk-disabled': disabled
      }
    }), [
      h('a', [
        title || h(ElIcon, [ h(IconMore) ]),
        title && h(ElIcon, {
          class: 'uk-margin-small-left'
        }, [
          h(IconTriangeDown)
        ])
      ]),
      children
    ])
  }
}