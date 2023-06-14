import { useLoaderData } from "react-router-dom";
import styles from "./page.module.css";

export default function Users() {

    const users = useLoaderData() as IUser[];

    return (
        <div>
            <div className="page-info">
                <h2>
                    Users <p>users/index.tsx</p>
                </h2>
                <p>Example of data loading via routes and useLoaderData.</p>
            </div>
            <div className={styles.userlist}>
                {users.map((item) => {
                    return (
                        <div key={item.id}>
                            <img src={item.image || ''} />
                            <h4>{item.firstName} {item.lastName}</h4>
                            <p>{item.email}</p>
                            <p><b>username: </b> {item.username}</p>
                            <p><b>password: </b> {item.password}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}
