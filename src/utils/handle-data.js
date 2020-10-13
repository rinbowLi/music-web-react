export function handleSongsCategory(data) {
  // 1.获取所有的类别
  const category = data.categories;

  // 2.创建类别数据结构
  const categoryData = Object.entries(category).map(([key, value]) => {
    return {
      name: value,
      subs: []
    }
  })

  // 3.将subs添加到对应的类别中
  for (let item of data.sub) {
    categoryData[item.category].subs.push(item);
  }

  return categoryData;
}

// 获取歌手字母类别
export function generateSingerAlpha() {
  var alphabets = ["-1"];
  var start = 'A'.charCodeAt(0);
  var last = 'Z'.charCodeAt(0);
  for (var i = start; i <= last; ++i) {
    alphabets.push(String.fromCharCode(i));
  }

  alphabets.push("0");

  return alphabets;
}

export const singerAlphas = generateSingerAlpha();


export const searchTypeData = [
  {
    title: "单曲",
    id: 1
  },
  {
    title: "歌手",
    id: 100
  },
  {
    title: "专辑",
    id: 10
  },
  {
    title: "视频",
    id: 1014
  },
  {
    title: "歌词",
    id: 1006
  },
  {
    title: "歌单",
    id: 1000
  },
  {
    title: "主播电台",
    id: 1009
  },
  {
    title: "用户",
    id: 1002
  },

]


export const discoverRoute = ["/discover","/song","/singer","/playlist","/album","/mv"]