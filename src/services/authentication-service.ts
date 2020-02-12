export default class AuthenticationService {
    static isAuthentified: boolean = false;

    static login(username: string, password: string): Promise<boolean> {
        const isAuthentified = (username === 'admin' && password === 'admin');

        return new Promise(resolve => {
            setTimeout(() => {
                this.isAuthentified = isAuthentified;
                resolve(isAuthentified);
            }, 1000);
        })
    }
}