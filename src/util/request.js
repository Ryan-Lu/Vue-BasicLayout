import axios from 'axios'
import { Message } from 'element-ui'

export default class Axios {
    static ajax(options) {
        const baseURL = "https://easy-mock.com/mock/5d0342af599408638e6ad79c/raapi"
        return new Promise((resolve, reject) => {
            axios({
                url: options.url,
                method: options.method || "GET",
                baseURL,
                timeout: 5000,
                params: (options.data && options.data.params) || ""
            }).then(responseText => {
                const { data, status } = responseText
                if (status === 200) {
                    if (data.code === 0) {
                        resolve(data)
                    } else {
                        Message({
                            showClose: true,
                            message: data.msg,
                            type: 'error'
                        })
                        reject(data)
                    }
                } else {
                    reject(data)
                }
            })
        })
    }
}