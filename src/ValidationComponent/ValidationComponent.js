import React from 'react'

const ValidationComponent = props => {
    let validateLength = props.length > 5 ? 'Text long enough' : 'Text too short'

    return (
        <div>
            {validateLength}
        </div>
    )
}

export default ValidationComponent;