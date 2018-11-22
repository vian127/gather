import { REST_HOST, REST_TIMEOUT_API, REST_TIMEOUT_FILE } from '~/config/rest.js'
import request from 'superagent'

export default {
  POST (uri, data) {
    return request.post(REST_HOST + uri)
      .set({
        'Content-Type': 'application/json'
      })
      .withCredentials()
      .timeout(REST_TIMEOUT_API)
      .send(data)
  },
  POST_FILE (uri, data) {

  }
}
