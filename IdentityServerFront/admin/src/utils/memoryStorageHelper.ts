import memoryStorage from "../lib/memoryStorage";
import User from "../src/models/User";

export default class MemoryStorageHelper {
    static setUsers(users: User[]): void {
        if (!users || users.length == 0) {
            return;
        }

        users.forEach(u => memoryStorage.set(u.Id, u));
    }
}