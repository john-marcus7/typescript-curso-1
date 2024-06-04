import { logarTempoDeExecucao } from "../decorators/log-execution-time.js";

export abstract class View<T> {

    protected _elemento: HTMLElement;
    private _escapar = false;

    constructor(selector: string, escapar?: boolean) {
        const elemento = document.querySelector(selector);
        if (elemento) {
            this._elemento = elemento as HTMLElement;
        } else {
            throw Error(`Seletor ${selector} não existe no DOM. Verifique`);
        }

        if (escapar) {
            this._escapar = escapar;
        }
    }

    protected abstract template(model: T): string 

    @logarTempoDeExecucao()
    public update(model: T): void {
        const template = this.template(model);
        if (this._escapar) {
            template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this._elemento.innerHTML = template;
    }


}