export const baseURL = 'https://strangers-things.herokuapp.com/api/2202-ftb-et-web-pt';

// export function makeHeaders(token) {
//     if (token) return {
//         'Content-Type': 'application/json',
//         'Authorization': 'Bearer ' + token
//     }
//     if (!token) {
//         return {
//             'Content-Type': 'application/json'
//         }
//     }
// }


export async function fetchPosts(setPosts) {
    fetch(`${baseURL}/posts`)
        .then(response => response.json())
        .then(result => {
            // console.log(result);
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
            window.localStorage.setItem("token", newToken)
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
            if (result.success) {
                setToken(newToken)
                console.log(token)
                window.localStorage.setItem("token", newToken)
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


export async function createPost(title, description, price, location, delivery, token) {
    fetch(`${baseURL}/posts`, {
        method: "POST",
        headers: {
            "content-Type": "application/json",
            "authorization": "Bearer " + token
        },
        body: JSON.stringify({
            post: {
                title: title,
                description: description,
                price: price,
                location: location,
                willingToDeliver: delivery
            }
        })
    })
        .then(response => response.json())
        .then(result => console.log(result))


}


export async function removePost(id, token) {
    fetch(`${baseURL}/posts/${id}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }).then(response => response.json())
        .then(result => {
            console.log(result);
        })
        .catch(console.error);
}

export async function personalData(setMessages, token) {
    console.log(token)
    console.log(setMessages)
    fetch(baseURL + '/users/me', {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    }).then(response => response.json())
        .then(result => {
            console.log(result);
            setMessages(result)
        })
        .catch(console.error);
}