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


export const discoverRoute = ["/discover", "/song", "/singer", "/playlist", "/album", "/mv"]

export const includePlaylistData = [
  {
    id: 698720887,
    picUrl: "http://p4.music.126.net/4L--5jGuNNCdRxL10n_0-g==/19057835044326350.jpg",
    title: "华语百首 | 回忆伤人无声，唱不尽世间遗憾",
    owner: "不会开挖掘机好丢脸",
    ownerId: 285614884
  },
  {
    id: 2557918409,
    picUrl: "http://p4.music.126.net/7Mt5mJHc8TZUyvCptbD3EA==/109951163727311249.jpg",
    title: "KTV必点：有没有一首歌，唱着唱着就泪奔",
    owner: "mayuko然",
    ownerId: 129593031
  },
  {
    id: 531321323,
    picUrl: "http://p4.music.126.net/CGqadcEvUW_59LXcuS43aw==/109951162819954007.jpg",
    title: "将回忆酿成烈酒入喉 从此不再挽留不再回头",
    owner: "mayuko然",
    ownerId: 129593031
  },
  {
    id: 2602222983,
    picUrl: "http://p3.music.126.net/zGzNJcfLZfLW7E0bkI0opg==/109951163815887214.jpg",
    title: "精选 | 网络热歌分享",
    owner: "情感文字君",
    ownerId: 471776903
  },
  {
    id: 2438292020,
    picUrl: "http://p4.music.126.net/Fs0DjAvcAAyAZa1dgXzFfQ==/109951163571833739.jpg",
    title: "听说你也在找好听的华语歌",
    owner: "鹿白川",
    ownerId: 493707309
  },
  {
    id: 2651036663,
    picUrl: "http://p4.music.126.net/rxniujJFoCOD1AAQVF_eAQ==/109951163902784557.jpg",
    title: "那些好听到爆了的歌",
    owner: "迟到得到",
    ownerId: 302853495
  },
]

export function getRandomArrayElements(count, arr = includePlaylistData) {
  var shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
  while (i-- > min) {
    index = Math.floor((i + 1) * Math.random());
    temp = shuffled[index];
    shuffled[index] = shuffled[i];
    shuffled[i] = temp;
  }
  return shuffled.slice(min);
}