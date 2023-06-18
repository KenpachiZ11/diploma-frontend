class API {
    constructor(path) {
        this.path = 'https://danya.pewiwe.ru';
    }

    about() {
        return fetch(`${this.path}/about`)
            .then(res => res.json())
    }

    aboutId(id) {
        return fetch(`${this.path}/about${id}`)
            .then(res => res.json())
    }

    contactsAdd(data) {
        return fetch(`${this.path}/contacts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
    }

    feedbackAdmin() {
        return fetch(`${this.path}/feedback-admin`)
            .then(res => res.json())
    }

    singlePage(id) {
        return fetch(`${this.path}/about/${id}`)
            .then(res => res.json())
    }

    formCard(data) {
        return fetch(`${this.path}/form`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
    }

    getUsers() {
        return fetch(`${this.path}/users`)
            .then(res => res.json())
    }

    getUser(id) {
        return fetch(`${this.path}/users/${id}`)
            .then(res => res.json())
    }

    addUser(data) {
        return fetch(`${this.path}/users/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
    }
        
    auth(data) {
        return fetch(`${this.path}/users/auth`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
    }

    updUser(id, data) {
        return fetch(`${this.path}/users/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
    }

    delUser(id) {
        return fetch(`${this.path}/users/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
    }
}

export default API;