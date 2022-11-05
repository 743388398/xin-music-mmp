import { sayHello } from "../../api/hello"

Page({
  data: {
    message: 'Hello Word'
  },
  hi() {
    sayHello().then(data => {
      const message = data + ''
      console.log(data)
      this.setData({
        message
      })
    })
  }
})
