import React from 'react'

import './RatioBar.scss'

const RatioBar = ({total, visitors, social}) => {
    return (
        <div id="barPart" className={social} style={{
            width: (100*visitors/total).toFixed(0) + '%'
        }}>
            
        </div>
    )
}

export default RatioBar
