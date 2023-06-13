import styles from "./menu.module.css";
import { NavLink } from "react-router-dom";
// https://reactrouter.com/en/6.12.1/components/nav-link

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
                    <NavLink to={item.src}
                      className={({ isActive, isPending }) =>
                        isPending ? styles.pending : isActive ? styles.active : ""
                      }>{item.name}</NavLink>
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
