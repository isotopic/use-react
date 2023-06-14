
async function getUsers() {
    const response = await fetch('https://dummyjson.com/users');
    const data = await response.json();
    return data.users.slice(0, 17);
}

export async function loader() {
    const users = await getUsers();
    return users;
}