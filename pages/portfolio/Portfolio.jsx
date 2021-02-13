import Layout from '../../components/Layout'
import styles from './Portfolio.module.scss'
import styleLight from './PortfolioLight.module.scss'
import {portfolioData} from './data'

function Portfolio(props) {
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
    <Layout title="portfolio" theme={props.theme} setTheme={props.setTheme}>
    {styling}
      <div className={props.theme ? styles.portfolioContainer : styleLight.portfolioContainer}>
        <h3>portfolio</h3>
        <div>
            ===========
        </div>

        <div className={props.theme ? styles.portfolioContents : styleLight.portfolioContents}>
          {portfolioData.map((data) => 
            <div className={props.theme ? styles.portfolioItem : styleLight.portfolioItem}>
            <a href={data.portURL} target="_blank">
            <img className={styles.portfolioImage} src={data.image} alt="todo-app" />
            <div className={props.theme ? styles.portfolioTitle : styleLight.portfolioTitle}>{data.portTitle}</div>
            </a>
            <div className={props.theme ? styles.portfolioText :styleLight.portfolioText}>
              <div dangerouslySetInnerHTML={ { __html: data.blurb } }></div>
            </div>
            <div className={props.theme ? styles.tagBlock : styleLight.tagBlock}>
                {data.tags.map((tag) => 
                  <div className={props.theme ? styles.portfolioTags : styleLight.portfolioTags}>{tag}</div>
                )}
            </div>
          </div>
          )}
      </div>
    </div>
  </Layout>
  )
}

export default Portfolio
