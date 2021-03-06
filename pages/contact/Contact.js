import React from 'react'
import Layout from '../../components/Layout'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import styles from './Contact.module.scss'
import styleLight from './ContactLight.module.scss'

function Contact(props) {
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
    <Layout title="contact" theme={props.theme} setTheme={props.setTheme}>
    {styling}
      <div className={props.theme ? styles.contactContainer : styleLight.contactContainer}>
        <h3><span>contact info</span></h3>
        ===============
        <div className={styles.contactLayout}>

          <div>
            <div><span className={styles.textBlue}>### General ###</span></div>
            <div className={styles.contactBlock}>
              Visit one of my web pages:
              <ul>
                <li>- <a href="http://adamryanphotography.ca" alt="photography" target="_blank">Adam Ryan Photography</a></li>
                <li>- <a href="http://github.com/adamryan1983" alt="github" target="_blank">My Github <FontAwesomeIcon className={styles.iconSocial} icon={['fab', 'github']} size="sm"/></a></li>
                <li>- <a href="http://thisisadamryan.me" alt="portfolio">Adam Ryan Portfolio</a></li>
              </ul>
            </div>
          </div>

          <div>
            <div><span className={styles.textBlue}>### Social Media ###</span></div>
            <div className={styles.contactBlock}>
              Visit me on one of many different sites:
              <ul>
                <li>- <a href="http://instagram.com/thisisadamryan.me" alt="instagram" target="_blank">Instagram <FontAwesomeIcon className={styles.iconSocial} icon={['fab', 'instagram']} size="sm"/></a></li>
                <li>- <a href="http://linkedin/in/adamryan1983" alt="fb" target="_blank">Linkedin <FontAwesomeIcon className={styles.iconSocial} icon={['fab', 'linkedin']} size="sm"/></a></li>
                <li>- <a href="http://twitter.com/adamryan1983" alt="twitter" target="_blank">Twitter <FontAwesomeIcon className={styles.iconSocial} icon={['fab', 'twitter']} size="sm"/></a></li>
              </ul>
            </div>
          </div>
          
          <div>
            <div><span className={styles.textBlue}>### Email Me ###</span></div>
            <div className={styles.contactBlock}>
              Choose an email:
              <ul>
                <li>- <a href="mailto:adamryan1983@me.com" alt="emailpersonal">Personal Email <FontAwesomeIcon className={styles.iconSocial} icon={faEnvelope} size="sm" /></a></li>
                <li>- <a href="mailto:adam.ryan89@ed.cna.nl.ca" alt="emailschool">School Email <FontAwesomeIcon className={styles.iconSocial} icon={faEnvelope} size="sm" /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
