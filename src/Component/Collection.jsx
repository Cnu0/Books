import React from 'react'
import Collectionbox from'./Collectionbox';
import cimage1 from '../Image/atomic habit.jpg'
import cimage2 from '../Image/b22.jpeg'
import cimage3 from '../Image/b23.jpeg'
import cimage4 from '../Image/b24.jpeg'
import cimage5 from '../Image/b4.jpeg'
import cimage6 from '../Image/b25.jpeg'





export default function Collection() {
  return (
    <div id ='collection'>
      <h1>COLLECTION </h1>
    <div className='a-collection'>
<Collectionbox name="Motivational Books" image={cimage1}  explain="  Inspire readers to achieve goals and maintain a positive mindset."/>
<Collectionbox name="Business Books"image={cimage2} explain="Insights on business practices, management, and entrepreneurship."/>
<Collectionbox name="Oromic Books"image={cimage3} explain=" Literature in Oromic, reflecting Ethiopian culture and heritage."/>
<Collectionbox name="Childrens Books"image={cimage4} explain="Literature for young readers featuring engaging stories and illustrations."/>
<Collectionbox name=" Self-Help Books"image={cimage5} explain="Guides for personal development and improving various life aspects."/>
<Collectionbox name="Poetry Books " image={cimage6} explain="Collections of poems exploring emotions and human experiences."/>

    </div></div>
  )
}
