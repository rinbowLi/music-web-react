import request from "./request";

export function getUserDetail(id) {
  return request({
    url: "/user/detail",
    params: {
      uid: id
    }
  })
}


//获取用户的歌单（包括创建和收藏）
export function getPlaylist(id) {
  return request({
    url: "/user/playlist",
    params: {
      uid: id
    }
  })
}