import request from './request';

export function getHotAlbums() {
  return request({
    url: "/album/newest"
  })
}

export function getTopAlbums(limit, offset) {
  return request({
    url: "/top/album",
    params: {
      limit,
      offset
    }
  })
}


export function getAlbumDetail(id) {
  return request({
    url: "/album",
    params: {
      id
    }
  })
}


export function getAlbumComment(id) {
  return request({
    url: "/comment/album",
    params: {
      id
    }
  })
}

export function getArtistAlbum(id) {
  return request({
    url: "/artist/album",
    params: {
      id
    }
  })
}