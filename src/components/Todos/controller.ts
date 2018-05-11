export default class Controller {
    constructor() {
        this.hello("Mithril");
    }

    public hello(word: string): string {
        return "Hello, " + word;
    }
}
