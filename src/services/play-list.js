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


export function getPlaylistDetail(id){
  return request({
    url:'/playlist/detail',
    params:{
      id
    }
  })
}

export function getPlaylistComment(id){
  return request({
    url:'/comment/playlist',
    params:{
      id
    }
  })
}

export function getRelatedPlaylist(id){
  return request({
    url:'/related/playlist',
    params:{
      id
    }
  })
}
