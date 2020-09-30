import request from './request'

export function getPlayListDetail(id){
  return request({
    url:'/playlist/detail',
    params:{
      id
    }
  })
}


export function getAlbumDetail(id){
  return request({
    url:'/album',
    params:{
      id
    }
  })
}
