import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
  {
    title: "悟已往之不谏，知来者之可追",
    Svg: require("../../static/img/undraw_docusaurus_mountain.svg").default,
    description: <>努力做一枚优秀的前端工程师~</>,
  },
  {
    title: "你好，2月",
    Svg: require("../../static/img/undraw_docusaurus_tree.svg").default,
    description: <>过年啦~，愿新的一年，家人平安，在北京的日子能够顺顺利利</>,
  },
  {
    title: "做自己该做的事情，并接受它的事与愿违",
    Svg: require("../../static/img/undraw_docusaurus_react.svg").default,
    description: <>凡事尽力就好~</>,
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
