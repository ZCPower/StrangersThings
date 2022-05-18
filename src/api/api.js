export const baseURL = 'https://strangers-things.herokuapp.com/api/2202-ftb-et-web-pt'

export async function fetchPosts(setPosts) {
    fetch(`${baseURL}/posts`)
        .then(response => response.json())
        .then(result => {
            console.log(result);
            setPosts(result.data.posts)
        })
        .catch(console.error);
}

// try {
//     const response = await fetch(`${baseURL}/posts`)
//     const data = await response.json();
//     console.log(data)
//     const posts = data.data.posts
//     return posts;
// } catch (error) {
//     throw error;
// }




export async function register(username, password, setToken) {
    fetch('https://strangers-things.herokuapp.com/api/2202-ftb-et-web-pt/users/register', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user: {
                username: username,
                password: password
            }
        })
    }).then(response => response.json())
        .then(result => {
            const token = result.data.token
            setToken(token)
            // setToken(token)
            // console.log(result);

        })
        .catch(console.error);
}

export async function login(username, password) {
    fetch('https://strangers-things.herokuapp.com/api/2202-ftb-et-web-pt/users/login', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user: {
                username: username,
                password: password
            }
        })
    }).then(response => response.json())
        .then(result => {
            console.log(result);
            if (result.success) console.log(`Welcome ${username}`)
        })
        .catch(console.error);
}