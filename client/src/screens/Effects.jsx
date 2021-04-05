import { getAllEffects } from '../services/effects';
import React, { useState, useEffect } from 'react';
import './Effects.css';

export default function Effects() {
  const [effects, setEffects] = useState([]);

  useEffect(() => {
    const fetchEffects = async () => {
      const effectData = await getAllEffects()
      setEffects(effectData);
    }
    fetchEffects();
  }, [])

  return (
    <div className='about'>
      <p className='title'>Here's some food for thought...</p>
      <p className='intro'>
        If you've ever experienced a food coma, you probably concluded that certain types of food have an effect on your body and its functions. Here are a few of the good and bad ways that certain food items can change your physical state.
      </p>

      <p className='body'>How food can affect you:</p>
      {
        effects?.map(effect => (
          <p key={effect.id}>{effect.content}</p>
        ))
      }
    
      Want to see which specific foods cause these effects? Open up that hamburger menu and go to Foods to get started!
      
    </div>
  )
}