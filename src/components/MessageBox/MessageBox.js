import { createApp } from 'vue'
import MB from './MessageBox.vue'

// options 和 MessageBox.vue 需要的参数 保持一致
const MessageBox = (options) => {
    const div = document.createElement('div')
    document.body.appendChild(div)

    const destroyed = () => {
        app.unmount(div)
        div.remove()
    }
7
    const app = createApp(MB, { ...options, destroyed })
    app.mount(div)


    return {
        destroyed
    }
}

export default MessageBox
