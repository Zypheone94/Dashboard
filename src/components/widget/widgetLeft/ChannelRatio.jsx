import React, {useState, useEffect} from 'react'
import ChannelList from './ChannelList'
import RatioBar from './RatioBar'

import './ChannelRatio.scss'

import { TopArrow } from '../../../components/common/Icons'

import facebook from '../../../assets/png/facebook.png'
import instagram from '../../../assets/png/instagram.png'
import linkedin from '../../../assets/png/linkedin.png'
import youtube from '../../../assets/png/youtube.png'

const ChannelRatio = () => {

    const [total, setTotal] = useState(0)
    const reference = 120
    const [increase, setIncrease] = useState(reference)

    const FacebookVisitors = 45
    const instagramVisitors = 138
    const linkedInVisitors = 75
    const youtubeVisitors = 12

    

    const totalVisitors = () => {
        setTotal((FacebookVisitors + instagramVisitors + linkedInVisitors + youtubeVisitors))
    }

    const increaseVisitor = () => {
        setIncrease(((total - reference) / reference) * 100)
    }


    useEffect(() => {
        totalVisitors()
        increaseVisitor()
    }, [total])

    return (
        <div className="channelRatio">
            <div className="calcul">
                <div className="totalIncrease">
                    <h2 className="s28 w600">{total}</h2>
                    <TopArrow />
                    <p className="s10 w700"><span>{increase}%</span>visit</p>
                </div>
                <div className="ratio">
                    <div className="totalBar">
                        <RatioBar
                        social="facebook"
                        visitors={FacebookVisitors}
                        total={total}/>
                        <RatioBar
                        social="instagram"
                        visitors={instagramVisitors}
                        total={total}/>
                        <RatioBar
                        social="linkedIn"
                        visitors={linkedInVisitors}
                        total={total}/>
                        <RatioBar
                        social="youtube"
                        visitors={youtubeVisitors}
                        total={total}/>
                    </div>
                </div>
            </div>
            <div className="channelList">
                <ChannelList
                    social="Facebook"
                    socialColor="#017EFA"
                    SocialIcon={facebook}
                    visitors={FacebookVisitors} 
                    total={total}/>
                    <hr className="hr"/>
                <ChannelList
                    social="Instagram"
                    socialColor="#FD1F9B"
                    SocialIcon={instagram}
                    visitors={instagramVisitors}
                    total={total} />
                    <hr className="hr"/>
                <ChannelList
                    social="LinkedIn"
                    socialColor="#007AB5"
                    SocialIcon={linkedin}
                    visitors={linkedInVisitors}
                    total={total} />
                    <hr className="hr"/>
                <ChannelList
                    social="Youtube"
                    socialColor="#FF0000"
                    SocialIcon={youtube}
                    visitors={youtubeVisitors}
                    total={total} />
            </div>
        </div>
        
    )
}

export default ChannelRatio
