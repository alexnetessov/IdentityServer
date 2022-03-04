import request from "../../lib/request";
import User from "../../src/models/User";
import config from "../../config.json";
import UserCreate from "../../src/models/UserCreate";

class ApiService {
    apiUrl: string = "https://localhost:5001/";

    async getAllUser(): Promise<User[]> {
        console.log('api getAllUser');
        const url = `${this.apiUrl}${config.userEndpoint}`;
        return await request(url, 'GET') || [];
    };

    async getUserById(id: string): Promise<User | null> {
        console.log('api getUserById');
        const url = `${this.apiUrl}${config.userEndpoint}/${id}`;
        return await request(url, 'GET')
    };

    async createUser(user: UserCreate) {
        console.log(`user create ${user.Id}`);
        const url = `${this.apiUrl}${config.userEndpoint}`;
        const body = JSON.stringify(user);
        await request(url, 'POST', body);
    }

    async updateUser(user: User) {
        console.log(`user update ${user.Id}`);
        const url = `${this.apiUrl}${config.userEndpoint}`;
        const body = JSON.stringify(user);
        await request(url, 'PUT', body);
    }

    async deleteUser(id: string) {
        const url = `${this.apiUrl}${config.userEndpoint}/${id}`;
        await request(url, 'DELETE');
    }

}

export default new ApiService();