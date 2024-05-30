import { Negociacoes } from "../models/negociacoes.js";

export class NegociacoesView {
    
    private _elemento: HTMLElement;
    
    constructor(selector: string) {
        this._elemento = document.querySelector(selector);
    }

    template(model: Negociacoes): string {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>
            
            <tbody>
                ${model.lista().map(negociacao => {
                    return `
                        <tr>
                            <td>${new Intl.DateTimeFormat().format(negociacao.data)}</td>
                            <td>${negociacao.quantidade}</td>
                            <td>${negociacao.valor}</td>
                            <td>${negociacao.volume}</td>
                        </tr>
                    `;
                }).join('')}
            </tbody>
            
            <tfoot>
            </tfoot>
        </table>               
        `;
    }

    update(model: Negociacoes): void {
        this._elemento.innerHTML = this.template(model);
    }
}