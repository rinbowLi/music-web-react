import request from "./request";

export function getSongCategory() {
  return request({
    url: "/playlist/catlist"
  })
}

export function getSongCategoryList(cat = "全部", offset = 0, limit = 35) {
  return request({
    url: "/top/playlist",
    params: {
      cat,
      limit,
      offset
    }
  })
}

export function getSongsDetail(ids) {
  return request({
    url: "/song/detail",
    params: {
      ids
    }
  })
}


export function getSongsComment(id) {
  return request({
    url: "/comment/music",
    params: {
      id
    }
  })
}


//获取相似歌曲
export function getSimiSong(id) {
  return request({
    url: "/simi/song",
    params: {
      id
    }
  })
}