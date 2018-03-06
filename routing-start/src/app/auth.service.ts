export class AuthService {
    public loggedIn: boolean = false;

    public isAuthenticated() {
        const promise = new Promise(
            (resolve, reject) => { 
                setTimeout(() => {
                    resolve(this.loggedIn);
                }, 800);
            }
        );
        return promise;
    }

    public logIn() {
        this.loggedIn = true;
    }


    public logOut() {
        this.loggedIn = false;
    }
}