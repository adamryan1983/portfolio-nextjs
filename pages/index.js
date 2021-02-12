import React, {useState} from 'react'
import Layout from "../components/Layout";
import Home from '../components/Home'


export default function Index(props) {
  
  
  return (
    <>
      <Layout title="this is adam ryan" theme={props.theme} setTheme={props.setTheme} >
        <Home theme={props.theme} setTheme={props.setTheme}/>
      </Layout>
    </>
  )
}
