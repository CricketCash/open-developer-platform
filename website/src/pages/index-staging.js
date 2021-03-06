import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const projects = [
  {
    "name": "FDC3",
    "imageUrl": "https://www.finos.org/hs-fs/hubfs/2019_FDC3_Logo_CLR.png?width=258&name=2019_FDC3_Logo_CLR.png",
    "url": "https://fdc3.org"
  },
  {
    "name": "Perspective",
    "imageUrl": "https://perspective.finos.org/img/logo.png",
    "url": "https://perspective.finos.org"
  },
  {
    "name": "Alloy",
    "imageUrl": "",
    "url": "https://alloy.finos.org"
  },
  {
    "name": "Plexus Interop",
    "imageUrl": "https://www.finos.org/hs-fs/hubfs/plexus.png?width=272&name=plexus.png",
    "url": "https://finos-plexus.github.io/plexus-interop"
  }
]

const vendors = [
  {
    imageUrl: 'img/vendors/github-logo.png',
    name: 'GitHub'
  },
  {
    imageUrl: 'img/vendors/whitesource-logo.png',
    name: 'Whitesource'
  },
  {
    imageUrl: 'img/vendors/redhat-logo.png',
    name: 'Red Hat'
  },
  {
    imageUrl: 'img/vendors/greenkey-tech-logo.png',
    name: 'GreenKey Technologies'
  },
  {
    imageUrl: 'img/vendors/fossa-logo.png',
    name: 'FOSSA'
  }
]

const features = [
  {
    title: <>Project Collaboration</>,
    imageUrl: '/img/intro/project-collaboration.png',
    description: (
      <>
        ODP provides collaboration workflows that are open and accessible by everyone, especially financial institutions, which are often blocked by regulatory restrictions.
      </>
    ),
  },
  {
    title: <>Developer tooling</>,
    imageUrl: '/img/intro/developer-tools.png',
    description: (
      <>
        FINOS contributors can access to development infrastructure services, like code hosting, CI/CD, IP compliance &amp; security &amp; quality checks, container runtime and release automation.
      </>
    ),
  },
  {
    title: <>Open to everyone</>,
    imageUrl: '/img/intro/open.png',
    description: (
      <>
        Everyone is welcome to read, listen and submit feedback to the ODP team; all content and conversations produced are (and will be) public.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Vendor({imageUrl, name}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('text--center col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={name} />
        </div>
      )}
      <h3>{name}</h3>
    </div>
  );
}

function Project({imageUrl, name}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('text--center col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={name} />
        </div>
      )}
      <h3>{name}</h3>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description={`${siteConfig.tagline}`}>
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 style={{visibility: 'hidden'}} className="hero__title">{siteConfig.title}</h1>
          <img style={{width: '600px'}} src={useBaseUrl('img/2020_ODP_Logo_WHT.png')}/>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/what-is-odp')}>
              Get Started
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
        {vendors && vendors.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                <h2>ODP Vendors</h2>
                {vendors.map((props, idx) => (
                  <Vendor key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
        {projects && projects.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                <h2>Used by FINOS Projects</h2>
                {projects.map((props, idx) => (
                  <Project key={idx} {...props} />
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
