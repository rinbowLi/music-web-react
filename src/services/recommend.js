import request from './request'

export  function getTopBanner() {
  return request({
    url:'/banner'
  })
}


export function getHotReommend(){
  return request({
    url:"/personalized?limit=8"
  })
}