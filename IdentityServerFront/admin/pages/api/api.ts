import request from "../../lib/request";
import User from "../../src/models/User";
import Users from "../../src/models/Users";
import config from "../../config.json";
import UserCreate from "../../src/models/UserCreate";
import Group from "../../src/models/Group";

class ApiService {
    apiUrl: string = "https://localhost:5001/";

    async getAllUsers(): Promise<Users[]> {
        console.log('api getAllUser');
        const url = `${this.apiUrl}${config.userEndpoint}`;
        return await request(url, 'GET') || [];
    };

    async getUserById(id: string): Promise<User | null> {
        console.log(`api getUserById id ${id}`);
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

    async getAllGroups(): Promise<Group[]> {
        const url = `${this.apiUrl}${config.groupsEndpoint}`;
        return await request(url, 'GET');
    }

    async getGroupById(id: string): Promise<Group> {
        const url = `${this.apiUrl}${config.groupsEndpoint}/${id}`;
        return await request(url, 'GET');
    }

    async createGroup(group: Group) {
        const url = `${this.apiUrl}${config.groupsEndpoint}`;
        const body = JSON.stringify(group);
        await request(url, 'POST', body);
    }

    async updateGroup(group: Group){
        const url = `${this.apiUrl}${config.groupsEndpoint}`;
        const body = JSON.stringify(group);
        await request(url, 'PUT');
    }

    async deleteGroup(id: string) {
        const url = `${this.apiUrl}${config.groupsEndpoint}/${id}`;
        await request(url, 'DELETE');
    }

}

export default new ApiService();