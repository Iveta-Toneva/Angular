class KeyValuePair<T, U> {

    private key: T;
    private value: U;

    setKeyValue(a: T, b: U): void {
        this.key = a;
        this.value = b;
    }

    display(): string {
        return `key = ${this.key}, value = ${this.value}`;
    }
}

