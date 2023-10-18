export class Uteis {

    public static trataPagina(pagina: number): number {
        return pagina > 0 ? (pagina - 1) : 0;
    }

}