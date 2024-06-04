export function escape(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function(...args: Array<any>) {
        let retorno = metodoOriginal.apply(this, args);
        if (typeof retorno === 'string') {
            /* console.log(`@escape: classe ${this.constructor.name} escapando metodo ${propertyKey}`); */
            retorno = retorno.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        return retorno;
    }
}