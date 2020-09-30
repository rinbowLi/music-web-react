import request from './request'

export function getTopBanner() {
  return request({
    url: '/banner'
  })
}


export function getHotReommend() {
  return request({
    url: "/personalized?limit=8"
  })
}


export function getAlbum(limit) {
  return request({
    url: "/top/album",
    params: {
      limit
    }
  })
}

export function getTopList(idx){
  return request({
    url:"/top/list",
    params:{
      idx
    }
  })
}

export function getArtistList(limit, cat) {
  return request({
    url: "/artist/list",
    params: {
      cat,
      limit
    }
  })
}