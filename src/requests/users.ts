import { redirect } from "react-router-dom";

import type { } from 'react-router-dom';

async function getAllUsers() {
    const response = await fetch('https://dummyjson.com/users');
    const data = await response.json();
    return data.users.slice(0, 20);
}

async function getSingleUser({ params }) {
    const response = await fetch(`https://dummyjson.com/users/${params.id}`);
    const data = await response.json();
    return data;
}

async function editUser({ request, params }) {
    const formData = await request.formData();
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const email = formData.get("email");

    try {
        const response = await fetch(`https://dummyjson.com/users/${params.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                firstName,
                lastName,
                email,
            })
        })
        if (response.status == 200) {
            return redirect(`/users/${params.id}?status=success`)
        } else {
            return redirect(`/users/${params.id}?status=failed`);
        }
    } catch (error: unknown) {
        console.log(error);
        return redirect(`/users/${params.id}?status=failed`);
    }
}

export { getAllUsers, getSingleUser, editUser }