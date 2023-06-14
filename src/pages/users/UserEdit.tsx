import { Form, useLoaderData } from "react-router-dom";
import styles from "./page.module.css";

export default function User() {

    const user = useLoaderData() as IUser;

    return (
        <div>
            <div className="page-info">
                <h2>
                    User <p>users/User/index.tsx</p>
                </h2>
                <p>Example of data loading and http requests via routes and useLoaderData.</p>
            </div>

            <div className={styles.form}>
                <h3>Edit user</h3>
                <img src={user.image || ''} />
                <Form method="post" action="edit">
                    <label>
                        <span>Name</span>
                        <input
                            placeholder="First"
                            aria-label="First name"
                            type="text"
                            name="firstName"
                            defaultValue={user.firstName}
                        />
                        <input
                            placeholder="Last"
                            aria-label="Last name"
                            type="text"
                            name="lastName"
                            defaultValue={user.lastName}
                        />
                    </label>
                    <label>
                        <span>Email</span>
                        <input
                            type="text"
                            name="email"
                            placeholder="email"
                            defaultValue={user.email}
                        />
                    </label>
                    <label>
                        <span></span>
                        <button type="button">Cancel</button>
                        <button type="submit">Save</button>
                    </label>
                </Form>
            </div>
        </div>
    );
}
