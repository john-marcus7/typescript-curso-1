export function logarTempoDeExecucao(emSegundos = false) {
    return function (target, propertyKey, descriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            let divisor = 1;
            let unidade = 'milisegundos';
            if (emSegundos) {
                divisor = 1000;
                unidade = 'segundos';
            }
            const t1 = performance.now();
            const retorno = metodoOriginal.apply(this, args);
            const t2 = performance.now();
            console.log(`O método ${propertyKey} demorou ${(t2 - t1) / divisor} ${unidade} para executar`);
            retorno;
        };
        return descriptor;
    };
}
//# sourceMappingURL=log-execution-time.js.map