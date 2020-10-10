import React, { Fragment, memo } from 'react';

import {
  footerLinks,
  footerImages
} from "@/common/local-data";

import {
  AppFooterWrapper,
  FooterLeft,
  FooterRight
} from "./style";

export default memo(function AppFooter() {
  return (
    <AppFooterWrapper>
      <div className="wrap-v2 content">
        <FooterLeft className="left">
          <div className="link">
            {
              footerLinks.map(item => {
                return (
                  <Fragment key={item.title}>
                    <a href={item.link} target="_blank" rel="noopener noreferrer">{item.title}</a>
                    <span className="line">|</span>
                  </Fragment>
                )
              })
            }
          </div>
          <div className="copyright">
          <span>网易公司版权所有©1997-{new Date().getFullYear()}</span>
            <span>
             仅供学习使用，切勿应用于商业用途。
            </span>
          </div>
          <div className="report">
            <span>违法和不良信息举报电话：0571-89853516</span>
            <span>
              举报邮箱：
              <a href="mailto:ncm5990@163.com" target="_blank" rel="noopener noreferrer">ncm5990@163.com</a>
            </span>
          </div>
          <div className="info">
            <span>粤B2-20090191-18</span>
            <a href="http://www.beian.miit.gov.cn/publish/query/indexFirst.action" rel="noopener noreferrer" target="_blank">
              工业和信息化部备案管理系统网站
            </a>
          </div>
        </FooterLeft>
        <FooterRight className="right">
          {
            footerImages.map((item, index) => {
              return (
                <li className="item" key={item.link}>
                  <a className="link" href={item.link} rel="noopener noreferrer" target="_blank"> </a>
                  <span className="title">{item.title}</span>
                </li>
              )
            })
          }
        </FooterRight>
      </div>
    </AppFooterWrapper>
  )
})
