import React from 'react'

export default function Effects(props) {
  const { effects } = props;
  return (
    <div className='affect'>
      <h3>How food can affect you:</h3>
      {
        effects.map(effect => (
          <p key={effect.id}>{effect.content}</p>
        ))
      }
    </div>
  )
}