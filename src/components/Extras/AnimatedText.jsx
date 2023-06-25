import React from 'react'

export const AnimatedText = ({text}) => {

  const swiftLetters = () =>{
    let resultSet = []
    text.forEach((t) => {
      resultSet.push(t)
      resultSet.push('|')
    });

    return resultSet.slice(0,resultSet.length-1).map((word,i)=>(<span key={i}><i style={{ animationDelay : 0.5 * i + 's' }} >{word}</i> </span>))
  }

  return (
    <div className='swift-text' >{swiftLetters()}</div>
  )
}
