import request from './request'

export function getVideoComment(id, limit = 20, offset = 0) {
  return request({
    url: '/comment/video',
    params: {
      id,
      limit,
      offset
    }
  })
}

export function getRelatedAllvideo(id) {
  return request({
    url: '/related/allvideo',
    params: {
      id
    }
  })
}

export function getVideoDetail(id) {
  return request({
    url: '/video/detail',
    params: {
      id
    }
  })
}


//获取video点赞转发评论数
export function getVideoDetailInfo(vid) {
  return request({
    url: '/video/detail/info',
    params: {
      vid
    }
  })
}


export function getVideoUrl(id) {
  return request({
    url: '/video/url',
    params: {
      id
    }
  })
}