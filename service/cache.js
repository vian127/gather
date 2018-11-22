import { CACHE_NAME } from '~/config/cache.js'
import localforage from 'localforage'

const cache = localforage.createInstance({ name: CACHE_NAME })

export default cache
