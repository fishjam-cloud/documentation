import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";
import styles from "./index.module.css";
import clsx from "clsx";
import { CardItem } from "@site/types";
import React from "react";
import { useVersionedLink } from "@site/src/hooks/useVersionedLink";

export default function QuickNavigation(props: { items: CardItem[] }) {
  return (
    <section className="row">
      {props.items.map((item, index) => (
        <article key={index} className="col col--6 margin-top--sm">
          <Link
            className={clsx("card padding--lg", styles.cardContainer)}
            href={useVersionedLink(item.href)}
          >
            <Heading
              as="h3"
              className={clsx("text--truncate", styles.cardTitle)}
              title={item.title}
            >
              <span>{item.icon}</span> {item.title}
            </Heading>
          </Link>
        </article>
      ))}
    </section>
  );
}
