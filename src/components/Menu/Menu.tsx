import styles from "./menu.module.css";
import { Link } from "react-router-dom";

export default function Menu() {

  const items = [
    { name: "Home", items: [{ src: "/", name: "Home" }] },
    {
      name: "Basics",
      items: [
        { src: "/query-params/?id=1", name: "Query params" },
        { src: "/dynamic-route/1", name: "Dynamic Route" },
      ],
    },
  ];

  return (
    <div className={styles.menu}>
      {items.map((section, i) => {
        return (
          <div key={i}>
            {i > 0 && <span>{section.name}</span>}
            <ul>
              {section.items.map((item) => {
                return (
                  <li key={item.src}>
                    <Link to={item.src}>{item.name}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
