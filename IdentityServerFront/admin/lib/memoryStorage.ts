
class MemoryStorage {
    storage = new Map<string, any>();

    get<T>(key: string): T {
        console.log(`get key ${key}`);
        return this.storage.get(key);
    }

    set(key: string, value: any) {
        console.log(`set key ${key}, value ${value}`);
        this.storage.set(key, value);
    }

    clear() {
        console.log(`clear`);
        this.storage.clear();
    }

    remove(key: string) {
        console.log(`remove(key: string) {
            key ${key}`);
        this.storage.delete(key);
    }

}

export default new MemoryStorage();