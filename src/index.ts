export class Hello {
    world() {
        console.log(`${this.constructor.name} World!`)
    }

    there() {
        console.log(`${this.constructor.name} there!`);
    }
}

const hello = new Hello()

hello.world()
hello.there();