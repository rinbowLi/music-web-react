import React, { memo } from 'react'
import { SingerDescWarpper } from './style'

export default memo(function SingerDesc({ data, headerData }) {
    console.log(data)
    return (
        <SingerDescWarpper>
            <div className="desc-title"><i></i>{headerData.name}简介</div>
            <p>{data.briefDesc}</p>
            {
                data.introduction && data.introduction.map(item => {
                    return (<div key={item.ti}>
                        <div className="txt-title">{item.ti}</div>
                        <p className="txt" dangerouslySetInnerHTML={{ __html: item.txt.replace(/\n/g, "<br />") }}></p>
                    </div>)
                })
            }
        </SingerDescWarpper>
    )
})
