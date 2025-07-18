import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import React, { JSX } from "react";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Easy to Use",
    Svg: require("@site/static/img/fish-easy.svg").default,
    description: (
      <>
        Fishjam was designed from the ground up to be easily installed and used
        to get Video Streaming in your app up and running quickly.
      </>
    ),
  },
  {
    title: "Focus on What Matters",
    Svg: require("@site/static/img/fish-focus.svg").default,
    description: (
      <>
        Fishjam lets you focus on your users, and we&apos;ll do all difficult
        work. Go ahead and check that streaming can be easy.
      </>
    ),
  },
  {
    title: "Powered by React Native",
    Svg: require("@site/static/img/fish-technology.svg").default,
    description: (
      <>
        Move fast with integrationg streaming into your app by simple
        installation process in Expo and React Native Apps
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
