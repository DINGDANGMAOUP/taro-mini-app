import * as tabbar from '@/api/tabbat/index'
import * as test from './test'
import * as user from './user'

const Api = {
  ...test,
  ...tabbar,
  ...user
}

export default Api
