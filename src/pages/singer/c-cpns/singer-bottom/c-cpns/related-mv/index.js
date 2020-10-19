import React, { memo } from 'react'
import { RelatedMVWarpper } from './style'
import { getHeightAndWidthImage } from "@/utils/format-utils"

export default memo(function RelatedMV({ data }) {
    const { mvs } = data
    return (
        <RelatedMVWarpper>
            <div className="list">
                {
                    mvs && mvs.map(item => {
                        return (<div className="item" key={item.id}>
                            <div className="img-box">
                                <img src={getHeightAndWidthImage(item.imgurl, 137, 103)} alt={item.name} />
                                <div className="mask sprite_covor"></div>
                                <div className="play sprite_icon"></div>
                            </div>
                            <p className="desc text-nowrap">{item.name}</p>
                        </div>)
                    })
                }

            </div>
        </RelatedMVWarpper>
    )
})
