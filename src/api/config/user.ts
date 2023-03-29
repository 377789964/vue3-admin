import request from "@/api/config/request"
import { ApiResponse } from "../type"

interface UserLoginData {
  username: string
  passward: string
}

interface LoginResponseData {
  token: string
}

export const login = (
  data: UserLoginData
): Promise<ApiResponse<LoginResponseData>> => {
  return request.post("/auth/login", data)
}
