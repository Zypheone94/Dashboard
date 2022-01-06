import React from 'react'

import './ChannelList.scss'

const ChannelList = ({social, socialColor, SocialIcon, visitors, total}) => {
    

    return (
        <div className="socialList">
            <div className="left">
                <img src={SocialIcon} alt="" />
                <p className="s14 w600" style={{color: socialColor}}>{social}</p>
            </div>
            <div className="right">
                <p className="s14 w400 visitorsNumber">
                    {visitors}
                    {
                        visitors > 1 ? ' visitors' : ' visitor'
                    }    
                    
                </p>
                <p className="s14 w400">{(100*visitors/total).toFixed(0)} %</p>
            </div>
        </div>
    )
}

export default ChannelList
