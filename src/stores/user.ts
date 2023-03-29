import { defineStore } from "pinia"
import { login as loginApi } from "@/api/config/user"
import { removeToken, setToken } from "@/utils/auth"
// login params

export interface IUserInfo {
  username: string
  password: string
}

export const useUserStore = defineStore("user", () => {
  // 状态
  const state = reactive({
    token: ""
  })

  const login = async (userInfo: IUserInfo) => {
    try {
      const { username, password } = userInfo
      const response = await loginApi({
        username: username.trim(),
        passward: password
      })
      const { data } = response
      state.token = data.token
      setToken(data.token)
    } catch (e) {
      return Promise.reject(e)
    }
  }

  const resetToken = () => {
    // 清空store里token
    state.token = ""
    // 清空localStorage里的token
    removeToken()
  }
  return { state, login, resetToken }
})
