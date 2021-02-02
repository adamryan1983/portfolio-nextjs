import React, {useState} from 'react'
import Layout from "../components/Layout";
import Home from '../components/Home'


export default function Index() {
  const [theme, setTheme] = useState("dark")
  return (
    <>
      <Layout title="this is adam ryan" theme="theme" setTheme="setTheme">
        <Home theme="theme" setTheme="setTheme"/>
      </Layout>
    </>
  )
}
