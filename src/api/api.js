export const baseURL = 'https://strangers-things.herokuapp.com/api/2202-ftb-et-web-pt';

export async function fetchPosts(setPosts) {
    fetch(`${baseURL}/posts`)
        .then(response => response.json())
        .then(result => {
            console.log(result);
            setPosts(result.data.posts)
        })
        .catch(console.error);
}

export async function register(username, password, token, setToken) {
    fetch(`${baseURL}/users/register`, {
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
            const newToken = result.data.token
            setToken(newToken)
            // console.log(result);
            // console.log(newToken)
            console.log(token)

        })
        .catch(console.error);
}

export async function login(username, password, token, setToken) {
    fetch(baseURL + '/users/login', {
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
            const newToken = result.data.token
            // console.log(token)
            if (result.success) {
                setToken(newToken)

            }
        })
        .catch(console.error);
}

export async function currentUser(token) {
    fetch(baseURL + '/users/me', {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer' + token
        },
    }).then(response => response.json())
        .then(result => {
            console.log(result);
        })
        .catch(console.error);
}