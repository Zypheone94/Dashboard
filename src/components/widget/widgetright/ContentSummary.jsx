import React from 'react'

import './ContentSummary.scss'

import { TopArrow, DownArrow } from '../../../components/common/Icons'

const ContentSummary = ({categorie, CategorieIcon, categorieIconColor, reachNumber}) => {

    const reference = 90

    return (
        <div className="contentSummaryBody">
            <div className="contentHeader">
                <div className="contentIcon" style={{
                    backgroundColor: categorieIconColor,
                    Bopacity: 0.2
                    }}>
                    <CategorieIcon />
                </div>
                <h5 className="s12 w400">{categorie}</h5>
            </div>
            <div className="contentContent">
                <h4 className="s28 w600">{reachNumber}K</h4>
                
                    {
                        ((reachNumber - reference) / reference) * 100 > 0 ? 
                        <div>
                            <TopArrow />
                            <p className="s10 w400"><span className="s10 w700 green">{(((reachNumber - reference) / reference) * 100).toFixed(0)}%</span> vs last 1 month</p>
                        </div>

                        :
                            
                        <div>
                            <DownArrow />
                            <p className="s10 w400"><span className="s10 w700 red">{(((reachNumber - reference) / reference) * 100).toFixed(0)}%</span> vs last 1 month</p>
                        </div>
                    }
                
            </div>
        </div>
    )
}

export default ContentSummary
