export function getCount(count) {
  if (count < 0) return;
  if (count < 10000) {
    return count;
  } else if (Math.floor(count / 10000) < 10000) {
    return Math.floor(count / 1000) / 10 + "万";
  } else {
    return Math.floor(count / 10000000) / 10 + "亿";
  }
}

export function getSizeImage(imgUrl, size) {
  return `${imgUrl}?param=${size}x${size}`;
}

export function getHeightAndWidthImage(imgUrl, height, width) {
  return `${imgUrl}?param=${height}y${width}`;
}

export function formatDate(time, fmt) {
  let date = new Date(time);

  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  let o = {
    'Y+': date.getFullYear(),
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
    }
  }
  return fmt;
};

function padLeftZero(str) {
  return ('00' + str).substr(str.length);
};

export function formatYearMonthDay(time) {
  return formatDate(time, "YY年MM月dd日");
}

export function formatMonthDay(time) {
  return formatDate(time, "MM月dd日");
}

export function formatMinuteSecond(time) {
  return formatDate(time, "mm:ss");
}

export function getPlaySong(id) {
  return `https://music.163.com/song/media/outer/url?id=${id}.mp3`;
}


//去一个字符串中底n次出现的字符位置
//c为所查找的字符，n为次数
export function nthIndexOf(str, c, n) {
  let x = str.indexOf(c);
  for (var i = 0; i < n - 1; i++) {
    x = str.indexOf(c, x + 1);
  }
  return x;
}


//根据关键字匹配字符串高亮
export const highLight = (value, _keywords) => {
  if (!value) return value;
  return value.split(_keywords).join(`<span class="light">${_keywords}</span>`);
}