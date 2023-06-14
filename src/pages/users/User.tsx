import { Link, useLoaderData } from "react-router-dom";
import styles from "./page.module.css";

export default function User() {

    const user = useLoaderData() as IUser;

    return (
        <div>
            <div className="page-info">
                <h2>
                    User detail <p>users/User/index.tsx</p>
                </h2>
                <p>Example of data loading and http requests via routes and useLoaderData.</p>
            </div>

            <div className={styles.form}>
                <h3>Edit user</h3>
                <img src={user.image || ''} />
                <h4>{user.firstName} {user.lastName}</h4>
                <p>{user.email}</p>
                <p><b>username: </b> {user.username}</p>
                <p><b>password: </b> {user.password}</p>
                <Link to={`/users/${user.id}/edit`}>Edit</Link>
            </div>
        </div>
    );
}
