import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
  {
    title: "追求卓越，不忘初心",
    Svg: require("../../static/img/undraw_docusaurus_mountain.svg").default,
    description: <>努力做一枚优秀的前端工程师~</>,
  },
  {
    title: "你好，5月",
    Svg: require("../../static/img/undraw_docusaurus_tree.svg").default,
    description: <>愿爱我的人和我爱的人都能够平安幸福，</>,
  },
  {
    title: "做该做的事情，并接受事与愿违",
    Svg: require("../../static/img/undraw_docusaurus_react.svg").default,
    description: <>凡是尽力就好</>,
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
