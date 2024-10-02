import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";
import styles from "./index.module.css";
import clsx from "clsx";
import { CardItem } from "@site/types";



export default function QuickNavigation(props: { items: CardItem[] }) {
  return (
    <section className="row">
      {props.items.map((item, index) => (
        <article key={index} className="col col--6 margin-bottom--lg">
          <Link
            className={clsx("card padding--lg", styles.cardContainer)}
            href={item.href}
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
