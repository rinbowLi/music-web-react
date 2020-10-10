import request from './request'

export function search({keywords,type}) {
  return request({
    url: "/search",
    params:{
      keywords,
      type
    }
  })
}