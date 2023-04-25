import request from '@/service'


export const login = (params:API_TYPE.LoginFrom) => {
  return request.post<API_TYPE.SingleResponse<string>>('/api/login',params)
}
