import React, { useEffect, memo } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import { 
  getRadios
} from "../../store/actionCreators";

import ThemeHeaderNormal from '@/components/theme-header-normal';
import RadioRankingCover from '@/components/radio-ranking-cover';
import Pagination from '@/components/pagination';
import {
  RankingWraper
} from "./style";
import { useState } from 'react';

export default memo(function RadioRanking() {
  // state
  const [currentPage, setCurrentPage] = useState(1);

  // redux
  const { currentId, radios } = useSelector(state => ({
    currentId: state.getIn(["djradio", "currentId"]),
    radios: state.getIn(["djradio", "radios"])
  }), shallowEqual)
  const dispatch = useDispatch();

  // hooks
  useEffect(() => {
    if (currentId === 0) return;
    dispatch(getRadios(currentId, 0))
  }, [dispatch, currentId]);

  // hanlde function
  const onPageChange = (page, pageSize) => {
    setCurrentPage(page);
    dispatch(getRadios(currentId, page * 30));
  }

  return (
    <RankingWraper>
      <ThemeHeaderNormal title="电台排行榜"/>
      <div className="ranking-list">
        {
          radios.map((item, index) => {
            return (<RadioRankingCover key={item.id} radio={item}/>)
          })
        }
      </div>
      <Pagination currentPage={currentPage} 
                    total={1000} 
                    pageSize={30}
                    onPageChange={onPageChange}/>
    </RankingWraper>
  )
})
