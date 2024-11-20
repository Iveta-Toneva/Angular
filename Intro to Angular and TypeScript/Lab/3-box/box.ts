class Box<T> {

    private array: T[]=[];

    remove(): void {
        this.array.pop();
    }

    add(el: T): void {
        this.array.push(el);
    }

    get count(): number {
        return this.array.length;
    }

}

