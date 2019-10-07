import ROUTER from 'router'
export default {
    user: null,
    registeredUser: [],
    setUser(user) {
        this.user = user
    },
    getUser(user) {
        this.user = user
    },
    register(username, password, email, confirmpassword) {
        if (username == '' || password == '' || email == '' || password != confirmpassword) {
            ROUTER.push("/Register")
        } else {
            this.registeredUser.push({
                username: username,
                password: password,
                email: email
            });
            ROUTER.push("/Login");
        }
    },
    login(username, password) {
        for (let i = 0; i < this.registeredUser.length; i++) {
            if (this.registeredUser[i].username === username && this.registeredUser[i].password === password) {
                return this.registeredUser[i]
            }
        }
        return null
    },
    logout() {
        this.user = null
        ROUTER.push('/Login')
    },
    
    save(username,email,password) {
        for (let i = 0; i < this.registeredUser.length; i++) {
            this.registeredUser[i].username = username,
                this.registeredUser[i].email = email,
                this.registeredUser[i].password = password
        }
        
    }

}