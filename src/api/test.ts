import request from '@/service'

/**
 * 测试
 * @returns
 * @param url
 * @param data
 * @param contentType
 * @param tips
 */
export const isTest = (url:string, data:any, contentType?:string, tips?:boolean) => {
    return request.post(url, data, contentType, tips)
}
