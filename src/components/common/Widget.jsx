import React from 'react'

import './Widget.scss'

const Widget = ({children}) => {
    return (
        <div className="widget">
            {children}
        </div>
    )
}

export default Widget

// il s'agira d'un composant qui sera juste une box
    // sinon juste une class CSS à voir
