class Data {
    method: string;
    uri: string;
    version: string;
    message: string;
    response: string | undefined = undefined;
    fullfield: boolean = false;

    constructor(method: string, uri: string, version: string, message: string) {
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
    }
}

