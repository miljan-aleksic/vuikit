'use strict';

var videoCamera = {
  functional: true,
  render: function (h, ref) {
    var props = ref.props;
    var width = props.width || 20;
    var height = props.height || 20;
    var viewBox = props.viewBox || '0 0 20 20';
    return h('svg', {
      attrs: {
        version: '1.1',
        meta: 'vk-icons-video-camera',
        width: width,
        height: height,
        viewBox: viewBox
      },
      domProps: {
        innerHTML: '<polygon points="18,6 18,14 12,10 " /><rect x="2" y="5" width="12" height="10" />'
      }
    })
  }
}

module.exports = videoCamera;
