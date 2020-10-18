import request from "./request";

//获取歌手单曲
export function getSingerSongs(id) {
  return request({
    url: "/artists",
    params: { id },
  });
}

//获取歌手MV
export function getSingerMVs(id) {
  return request({
    url: "/artist/mv",
    params: { id },
  });
}

//获取歌手专辑
//limit默认50，offest默认0
export function getSingerAlbum(id, limit, offest) {
  return request({
    url: "/artist/album",
    params: { id, limit, offest },
  });
}

//获取歌手描述
export function getSingerDesc(id) {
  return request({
    url: "/artist/desc",
    params: { id },
  });
}

//获取相似歌手
export function getTopArtists(id, limit = 6) {
  return request({
    url: "/top/artists",
    params: { id, limit },
  });
}
