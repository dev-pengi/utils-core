import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={clsx('container ', styles.Herocontainer)}>
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle" style={{maxWidth:"min(45rem, 97%)", textAlign:'center'}}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            style={
              {
              color: `#fff`
            }}
            to="/docs/intro">
            Get started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Home`}
      description="a powerful JavaScript utility library that provides a wide range of functions to simplify common programming tasks">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
