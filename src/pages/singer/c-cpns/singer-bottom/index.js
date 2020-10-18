import React, { memo, useCallback, useState } from "react";

import { SingerBottomWarpper } from "./style";

import {
  getSingerSongs,
  getSingerMVs,
  getSingerAlbum,
  getSingerDesc,
} from "@/services/singer";

import HotWorks from "./c-cpns/hot-works";
import AllAlbum from "./c-cpns/all-album";
import RelatedMV from "./c-cpns/related-mv";
import SingerDesc from "./c-cpns/singer-desc";
import { useEffect } from "react";

export default memo(function SingerBottom({ curIndex }) {
  const [data, setdata] = useState({});
  const [cpn, setCpn] = useState(null);
  console.log(curIndex);

  const handleCurIndex = useCallback(
    (curndex) => {
      switch (curndex) {
        case 0:
          getData(getSingerSongs);
          return <HotWorks data={data} />;
        case 1:
          getData(getSingerAlbum);
          return <AllAlbum data={data} />;
        case 2:
          getData(getSingerMVs);
          return <RelatedMV data={data} />;
        case 3:
          getData(getSingerDesc);
          return <SingerDesc data={data} />;
        default:
          getData(getSingerSongs);
          return <HotWorks data={data} />;
      }
    },
    [data]
  );

  useEffect(() => {
    setCpn(handleCurIndex(curIndex));
  }, [setCpn, curIndex, handleCurIndex]);

  const getData = (fn) => {
    fn(3684).then((res) => {
      console.log(res);
      setdata(res);
    });
  };
  return <SingerBottomWarpper>{cpn}</SingerBottomWarpper>;
});
