import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";
import styles from "./index.module.css";
import clsx from "clsx";

const items = [
  { title: "Introduction", href: "/guide/introduction", icon: "👋" },
  { title: "Glossary", href: "/guide/glossary", icon: "📜" },
  {
    title: "Quick setup with React Native",
    href: "/guide/react-native/quick-setup",
    icon: "📱",
  },
  {
    title: "Quick setup with React",
    href: "/guide/react/installation",
    icon: "💻",
  },
];

export default function QuickNavigation() {
  return (
    <section className="row">
      {items.map((item, index) => (
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
