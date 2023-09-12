import React from 'react';

function Track ({ source, target, getTrackProps }) {
  return(
    <div
    style={{
        position: 'absolute',
        height: 6,
        zIndex: 1,
        marginTop: 35,
        backgroundColor: 'rgb(195 195 195)',
        borderRadius: 5,
        border: 'solid 2px #413f3f',
        cursor: 'pointer',
        left: `${source.percent}%`,
        width: `${target.percent - source.percent}%`,
    }}
    {...getTrackProps()}
    />
  )
}
  
export default Track;