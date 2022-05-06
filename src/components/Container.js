import React from 'react'
import View from './backgroundView'

export const Container = ({children}) => {
  return (
    <div>
      <View/>
      {children}</div>
  )
}
