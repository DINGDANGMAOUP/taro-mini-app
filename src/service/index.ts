import Taro from '@tarojs/taro'

import { baseUrl } from './base'

import interceptors from './interceptors'

interceptors.forEach(interceptorItem => Taro.addInterceptor(interceptorItem))

declare namespace RequestProps {
    interface Method {
        'GET',
        'POST',
        'PUT',
        'DELETE'
    }
    interface Options {
        url: string,
        method: keyof Method,
        data: any,
        contentType?: string
        tips?: boolean
    }
    interface requestParams {
        url: string,
        method: keyof Method,
        data: any,
        header: any
    }
}

class Request {
    baseOptions<T>(options: RequestProps.Options) {
        let { url, method, data, contentType } = options
        const requestParams: RequestProps.requestParams = {
            url: baseUrl() + url,
            method,
            data,
            header: {
                'content-type': contentType || 'application/json',
                'Authorization': Taro.getStorageSync('token')
            }
        }
        return Taro.request<T>(requestParams)
    }

    get<T>(url:string, data:any, tips?:boolean) {
        return this.baseOptions<T>({ url, method:'GET', data, tips })
    }

    post<T>(url:string, data:any, contentType?:string, tips?:boolean) {
        return this.baseOptions<T>({ url, method:'POST', data, contentType, tips })
    }

    put<T>(url:string, data:any, contentType?:string, tips?:boolean) {
        return this.baseOptions<T>({ url, method:'PUT', data, contentType, tips })
    }

    delete(url:string, data:any, contentType?:string, tips?:boolean) {
        return this.baseOptions({ url, method:'DELETE', data, contentType, tips })
    }
}

export default new Request()
