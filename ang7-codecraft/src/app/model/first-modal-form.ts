export class Joke {
    setup: string;
    punchLine: string;
    hide: boolean;

    constructor(setup: string, punchLine: string) {
        this.setup = setup;
        this.punchLine = punchLine;
        this.hide = true;
    }

    toggle() {
        this.hide = !this.hide;
    }
}
