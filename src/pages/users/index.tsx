import { useLoaderData } from "react-router-dom";
import styles from "./page.module.css";
import IUser from "../../types/User.ts";

export default function Users() {

    const users = useLoaderData() as IUser[];

    return (
        <div id="items">
            {users.map((item) => {
                return (
                    <div key={item.id}>
                        <img className={styles.image}
                            src={item.image || ''}
                            width={200}
                        />
                        <h4>{item.firstName}</h4>
                    </div>
                )
            })}
        </div>
    );
}
