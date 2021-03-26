import React from 'react'

function AlertButton({message, name}) {
    return (
      <button onClick={() => alert(message)}>Alert!!! {name}</button>
    )
  }

  export default AlertButton