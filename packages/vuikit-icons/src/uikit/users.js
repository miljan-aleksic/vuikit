// icon-users
export default {
  functional: true,
  render: function (h, { props }) {
    let width = props.width || 20
    let height = props.height || 20
    const viewBox = props.viewBox || '0 0 20 20'

    return h('svg', {
      attrs: {
        version: '1.1',
        meta: 'vk-icons-users',
        width: width,
        height: height,
        viewBox: viewBox
      },
      domProps: {
        innerHTML: '<circle fill="none" stroke="#000" stroke-width="1.1" cx="7.7" cy="8.6" r="3.5" /><path fill="none" stroke="#000" stroke-width="1.1" d="M1,18.1 C1.7,14.6 4.4,12.1 7.6,12.1 C10.9,12.1 13.7,14.8 14.3,18.3" /><path fill="none" stroke="#000" stroke-width="1.1" d="M11.4,4 C12.8,2.4 15.4,2.8 16.3,4.7 C17.2,6.6 15.7,8.9 13.6,8.9 C16.5,8.9 18.8,11.3 19.2,14.1" />'
      }
    })
  }
}
