import React, {useState} from 'react'
import Layout from "../components/Layout";
import Home from '../components/Home'


export default function Index() {
  const [theme, setTheme] = useState("dark")
  const [activePage, setActivePage] = useState()
  return (
    <>
      <Layout title="this is adam ryan" theme="theme" setTheme="setTheme" setActivePage="setActivePage" activePage="activePage">
        <Home theme="theme" setTheme="setTheme"/>
      </Layout>
    </>
  )
}
