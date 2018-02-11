export class UserService {
    activeUsers: string[] = ['Max', 'Anna'];
    inactiveUsers: string[] = ['Chris', 'Manu'];

    setUserToInactive(id: number) {
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1);
    }

    setUserToActive(id: number) {
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id, 1);
    }

}