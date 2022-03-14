import { Mensagem } from "./ENUM.js";

export class SistemaDeAutenticacao {
    static login(autenticavel, senha){
        if(SistemaDeAutenticacao.ehAutenticavel(autenticavel)){
            if(autenticavel.autenticar(senha))
                console.log(Mensagem.POSITIVA);
            else
                console.log(Mensagem.NEGATIVA + ` Usuário ou senha inválidos.`);
        } else
            console.log(Mensagem.NEGATIVA + ` Objeto não autentificável.`);
    }

    static ehAutenticavel(autenticavel){
        return "autenticar" in autenticavel && autenticavel.autenticar instanceof Function
    }
}