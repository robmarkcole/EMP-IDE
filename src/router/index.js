const Vue = require('vue')
import Router from 'vue-router'
import cloneDeep from 'lodash/cloneDeep'
import routerMap from './map'
const _import = require('./_import_' + process.env.NODE_ENV)

Vue.use(Router)

export default new Router({
  routes: parser(routerMap)
})

// parser
function parser (router) {
  let _router =  cloneDeep(router)
  _router.forEach((item, value) => {
    if (item.component) {
      item.component = _import(item.component)
    }
  })

  return _router
}
