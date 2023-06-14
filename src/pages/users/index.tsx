import { useLoaderData } from "react-router-dom";
import styles from "./page.module.css";

export default function Users() {

    type User = {
        id: number,
        firstName: string,
        lastName: string,
        maidenName: string,
        age: number,
        gender: string,
        email: string,
        phone: string,
        username: string,
        password: string,
        birthDate: string,
        image: string,
        bloodGroup: string,
        height: number,
        weight: number,
        eyeColor: string,
    }

    const users = useLoaderData() as User[];

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
