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


export function searchSuggest(keywords) {
  return request({
    url: "/search/suggest",
    params:{
      keywords
    }
  })
}