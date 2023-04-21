import request from '@/service'

/**
 * 测试
 * @returns
 * @param url
 * @param data
 * @param contentType
 * @param tips
 */
export const getTabBarList = () => {
  return request.get<API_TYPE.MultiResponse<API_TYPE.TabBar>>('/api/getTabBar',{})
}
