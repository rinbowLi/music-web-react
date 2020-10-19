import React, { memo, useCallback, useState, useEffect } from "react";

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

export default memo(function SingerBottom({ id, curIndex, headerData }) {
  const [data, setdata] = useState({});
  const [cpn, setCpn] = useState(null);

  const getData = useCallback((fn) => {
    fn(id).then((res) => {
      setdata(res);
    });
  }, [id]);

  const handleCurIndex = useCallback(
    (curndex) => {
      switch (curndex) {
        case 0:
          getData(getSingerSongs);
          setCpn(<HotWorks data={data} />);
          break;
        case 1:
          getData(getSingerAlbum);
          setCpn(<AllAlbum data={data} />);
          break;
        case 2:
          getData(getSingerMVs);
          setCpn(<RelatedMV data={data} />);
          break;
        case 3:
          getData(getSingerDesc);
          setCpn(<SingerDesc data={data} headerData={headerData} />);
          break;
        default:
          getData(getSingerSongs);
          setCpn(<HotWorks data={data} />);
      }
    },
    [data, headerData, getData, setCpn]
  );

  useEffect(() => {
    handleCurIndex(curIndex);
  }, [curIndex, handleCurIndex]);


  return <SingerBottomWarpper>{cpn}</SingerBottomWarpper>;
});
