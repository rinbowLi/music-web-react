import React, { useEffect, memo } from 'react';
import { useDispatch } from "react-redux";
import { useLocation } from 'react-router-dom';
import { parse } from 'query-string'

import {
  getCategory,
  getSongList,
  getAndChangeCurrentCategoryAction
} from "./store/actionCreators";

import SongsHeader from "./c-cpns/songs-header";
import SongsList from './c-cpns/songs-list';
import {
  SongsWrapper
} from "./style"

export default memo(function Songs() {
  // redux
  const dispatch = useDispatch();
  const cat = parse(useLocation().search).cat || "全部";

  useEffect(() => {
    dispatch(getAndChangeCurrentCategoryAction(cat));
  }, [dispatch, cat]);

  // hooks
  useEffect(() => {
    dispatch(getCategory());
    dispatch(getSongList(0));
  }, [dispatch])

  return (
    <SongsWrapper className="wrap-v2">
      <SongsHeader />
      <SongsList />
    </SongsWrapper>
  )
})
