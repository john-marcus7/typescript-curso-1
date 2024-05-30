export class View {
    constructor(selector) {
        this._elemento = document.querySelector(selector);
    }
    update(model) {
        const template = this.template(model);
        this._elemento.innerHTML = template;
    }
}
