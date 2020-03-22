import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';


const features = [
  {
    title: <>Lawevan Men</>,
    face:"Stencil Std",
    color:"black",
    imageUrl: 'img/Mens.png',
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
    face:"Apple Chancery",
    color:"black",
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
    face:"Copperplate",
    color:"black",
    imageUrl: 'img/kids.png',
    pageurl:"docs/Kids",
    description: (
      <>
        {/* Special gift for you. We should also pleasure ourself */}
      </>
    ),
  },
  {
    title: <>Lawevan Baby</>,
    face:"Chalkduster",
    color:"black",
    imageUrl: 'img/baby.jpg',
    pageurl:"docs/Baby",
    description: (
      <>
        {/* Special gift for you. We should also pleasure ourself */}
      </>
    ),
  },
  {
    title: <>Lawevan Weddings</>,
    face:"Bradley Hand",
    color:"black",
    imageUrl: 'img/weddings.jpg',
    pageurl:"docs/Weddings",
    description: (
      <>
        {/* Special gift for you. We should also pleasure ourself */}
      </>
    ),
  },
  {
    title: <> Lawevan Home </>,
    face:"Chalkduster",
    color:"black",
    imageUrl: 'img/home.jpg',
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
        <img alt="Docusaurus with Keytar" class="index-hero-logo" src="/img/logo4.png"></img>
        <h1><font face= 'Cambria'></font></h1>
        <iframe class="index-hero-video" width="700" height="394" src="../img/suspenders.mp4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          {/* <p className="hero__subtitle">{siteConfig.tagline}</p> */}
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/Mens')}>
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
