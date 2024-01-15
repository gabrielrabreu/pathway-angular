export class LocalStorageUtils {

    public salvarDadosLocaisUsuario(response: any): void {
        localStorage.setItem('yoda.token', response.accessToken);
        localStorage.setItem('yoda.user', JSON.stringify(response.userToken));
    }

    public limparDadosLocaisUsuario(): void {
        localStorage.removeItem('yoda.token');
        localStorage.removeItem('yoda.user');
    }

    public obterUsuario(): any {
        return JSON.parse(localStorage.getItem('yoda.user'));
    }

    public obterToken(): any {
        return localStorage.getItem('yoda.token');
    }
}
