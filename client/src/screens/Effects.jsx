import React from 'react'

export default function Effects(props) {
  const { effects } = props;
  return (
    <div>
      <h3>Effects</h3>
      {
        effects.map(effect => (
          <p key={effect.id}>{effect.content}</p>
        ))
      }
    </div>
  )
}