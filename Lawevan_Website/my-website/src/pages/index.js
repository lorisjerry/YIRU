import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Lawevan MEN</>,
    face:"charlemagne std",
    color:"gold",
    imageUrl: 'img/suspenders_front3.jpg',
    pageurl:"docs/Mens",
    description: (
      <>
        {/* Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly. */}
      </>
    ),
  },
  {
    title: <>Lawevan Women</>,
    face:"american typewriter",
    color:"pink",
    imageUrl: 'img/font1.jpg',
    pageurl:"docs/WOMENS",
    description: (
      <>
        {/* Special gift for you. We should also pleasure ourself */}
      </>
    ),
  },
  {
    title: <>Lawevan Kids</>,
    face:"chalkboard SE",
    color:"green",
    imageUrl: 'img/font1.jpg',
    pageurl:"docs/Kids",
    description: (
      <>
        {/* Special gift for you. We should also pleasure ourself */}
      </>
    ),
  },
  {
    title: <>Lawevan Baby</>,
    face:"Bernard MT Condensed",
    color:"red",
    imageUrl: 'img/font1.jpg',
    pageurl:"docs/Baby",
    description: (
      <>
        {/* Special gift for you. We should also pleasure ourself */}
      </>
    ),
  },
  {
    title: <>Lawevan Weddings</>,
    face:"lingwai sc",
    color:"black",
    imageUrl: 'img/font1.jpg',
    pageurl:"docs/Weddings",
    description: (
      <>
        Special gift for you. We should also pleasure ourself
      </>
    ),
  },
  {
    title: <> Lawevan Home </>,
    face:"Chalkduster",
    color:"blue",
    imageUrl: 'img/glove_font2.jpg',
    pageurl:"docs/Home",
    description: (
      <>
        {/* Make Yourself Look Completely Different and Beautiful. Docusaurus can
        be extended while reusing the same header and footer. */}
      </>
    ),
  },
];

function Feature({imageUrl, color,title,pageurl,face,description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <a href={pageurl}>
          <img className={styles.featureImage} src={imgUrl} alt={title} onclick='window.open("http://www.qq.com")' />
          </a>
        </div>
      )}

      <h3 align="center"><font face={face} color={color}>{title}</font></h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Lawevan ${siteConfig.title}`}
      description="Reject Mediocrity and Fight for Greatness <head />">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/doc1')}>
              Get Started
            </Link>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/doc1')}>
              Shop All
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
