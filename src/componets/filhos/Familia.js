import React from "react";

const familia = props => {
    return (
        <div>
            { props.children.map( (child) => {
                return React.cloneElement(child, props)
            } ) }
        </div>
    )
}

export default familia