import React from 'react';


const LoaderComponent = (props)=> {
    if(props.isLoading) {
        return (
            <div className="ui segment">
            <div className="ui active inverted dimmer">
              <div className="ui large text loader">Loading</div>
            </div>
            <p></p>
            <p></p>
            <p></p>
          </div>
    )
    } else {
        return null;
    }

}


export default LoaderComponent;