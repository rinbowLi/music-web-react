import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import { RelatedMVWarpper } from './style'
import { getHeightAndWidthImage } from "@/utils/format-utils"

export default memo(function RelatedMV({ data }) {
    const { mvs } = data
    return (
        <RelatedMVWarpper>
            <div className="list">
                {
                    mvs && mvs.map(item => {
                        return (<NavLink to={"/mv?id=" + item.id} className="item" key={item.id}>
                            <div className="img-box">
                                <img src={getHeightAndWidthImage(item.imgurl, 137, 103)} alt={item.name} />
                                <div className="mask sprite_covor"></div>
                                <div className="play sprite_icon"></div>
                            </div>
                            <p className="desc text-nowrap">{item.name}</p>
                        </NavLink>)
                    })
                }
            </div>
        </RelatedMVWarpper>
    )
})
