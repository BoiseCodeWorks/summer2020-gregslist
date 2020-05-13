export default class Value {
    constructor(data) {
        this.title = data.title
    }

    get Template() {
        return `<h1>${this.title}</h1>`
    }
}