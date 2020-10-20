import request from './request'

export function getMvComment(id, limit = 20, offset = 0) {
  return request({
    url: '/comment/mv',
    params: {
      id,
      limit,
      offset
    }
  })
}

export function getSimiMv(mvid) {
  return request({
    url: '/simi/mv',
    params: {
      mvid
    }
  })
}

export function getMvDetail(mvid) {
  return request({
    url: '/mv/detail',
    params: {
      mvid
    }
  })
}

//获取mv点赞转发评论数
export function getMvDetailInfo(mvid) {
  return request({
    url: '/mv/detail/info',
    params: {
      mvid
    }
  })
}


export function getMvUrl(id) {
  return request({
    url: '/mv/url',
    params: {
      id
    }
  })
}