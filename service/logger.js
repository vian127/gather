class Logger {
  constructor () {
    let on = process.env.NODE_ENV !== 'product'
    let logger = (type) => (...params) => console[type](...params)
    let oops = () => {}

    ['info', 'log', 'warn', 'error'].forEach(fn => {
      this[fn] = on ? logger(fn) : oops
    })
  }
}

const logger = new Logger()

export default logger
