import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
  {
    title: "这个世上最远的距离，就是知道和做到",
    Svg: require("../../static/img/undraw_docusaurus_mountain.svg").default,
    description: <>一切有为法，如梦幻泡影，如露亦如电，应作如是观</>,
  },
  {
    title: "人生有很多的挫折，人也有很多的苦楚",
    Svg: require("../../static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>但你之所以选择以这样的身份来人世间，那就一定有值得期待的事情</>
    ),
  },
  {
    title: "做你该做的事情，并接受事与愿违",
    Svg: require("../../static/img/undraw_docusaurus_react.svg").default,
    description: <>许多事情不是看到了希望才坚持，而是坚持了才看到了希望</>,
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
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
