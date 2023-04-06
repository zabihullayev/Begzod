import React from 'react'
import Sidebar from '../components/Sidebar'
import Main from '../components/Main'
import { Wrapper } from './style'

export default function Layout() {
  return (
    <Wrapper>
      <Sidebar/>
      <Main/>
    </Wrapper>
  )
}
