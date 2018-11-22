import rest from './rest.js'
import logger from './logger.js'
import { Loading } from 'element-ui'

class Api {
  constructor () {
    this.$apis = new Set()
    this.$locks = new Set()
  }

  _requireLock (req) {
    return this.$locks.has(req)
      ? (logger.warn(`[api]api/${req} call duplicate, abort.`), false)
      : (this.$locks.add(req), true)
  }

  _releaseLock (req) {
    this.$locks.delete(req)
  }

  _callGen (name, api) {
    return async (data, openLoading = true) => {
      if (!this._requireLock(name)) return
      if (openLoading) {
        var loadingInstance = Loading.service({
          fullscreen: true,
          lock: true,
          text: '数据加载中，请稍等...'
        })
      }
      try {
        logger.log(`[api]<${name}> is pending... ${JSON.stringify(data)}`)
        let res = await rest[api.method](api.uri, data)

        logger.log(`[api]<${name}> fetched.`, res.body)
        return res.body
      } catch (e) {
        throw e.response ? e.response.body || e.response.text : e.message
      } finally {
        if (openLoading) loadingInstance.close()
        this._releaseLock(name)
      }
    }
  }

  gen (apis) {
    Object.keys(apis).forEach(name => {
      if (this.$apis.has(name)) {
        return logger.warn(`[api]Definition "${name}" duplicated.`)
      }

      this.$apis.add(name)
      this[name] = this._callGen(name, apis[name])
    })
  }
}

export default new Api()
