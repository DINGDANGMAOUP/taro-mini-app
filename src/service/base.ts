/**
 * 获取版本 retrun 对应环境域名
 * 支持扩展 - 思路 可通过 process.env.NODE_ENV 判断当前打包是 生产模式或工厂模式 进而判断 适合多环境 dev  -> pro
 * @returns 域名
 */
 const baseUrl = () => {
    switch (process.env.NODE_ENV)
    {
      case 'development':
        return 'http://127.0.0.1:9527'
      default:
        return 'https://xxxxxx'
    }
}

export {
  baseUrl
}
