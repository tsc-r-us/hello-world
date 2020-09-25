export class Hello {
    world() {
        console.log(`${this.constructor.name} World!`)
    }
}

const hello = new Hello()

hello.world()