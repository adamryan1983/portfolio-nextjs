import React from 'react'
import styles from '../styles/Home.module.scss'
import styleLight from '../styles/HomeLight.module.scss'
import PhotoSocial from './PhotoSocial'
import Description from './Description'

function Home(props) {
  
  let styling = props.theme ?     <style jsx global>{`
  body {
    background-color: #393e41;
  }
`}</style>
: 
<style jsx global>{`
body {
  background-color: #faf3dd;
}

`}</style>
  return (
    <div className={props.theme ? styles.mainPageContainer : styleLight.mainPageContainer}>
    {styling}
      <PhotoSocial theme={props.theme}/>
      <Description theme={props.theme}/>
    </div>
  )
}

export default Home
