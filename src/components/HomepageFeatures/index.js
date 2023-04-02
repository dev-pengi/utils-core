import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Shorter code',
    Svg: require('./support.svg').default,
    description: (
      <>
        utils-core saves you the time of writing the same common functions every time and every project, bringing you all the important functions in one library
      </>
    ),
  },
  {
    title: 'Continuous development',
    Svg: require('./development.svg').default,
    description: (
      <>
        we're always trying to improve and add new utils to the library and fix bugs if it exists, which means you can always expect new features and improvements
      </>
    ),
  },
  {
    title: 'Modular and flexible',
    Svg: require('./code.svg').default,
    description: (
      <>
        utils-core is designed to be modular and flexible, allowing you to easily pick and choose only the functions you need for your project
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
