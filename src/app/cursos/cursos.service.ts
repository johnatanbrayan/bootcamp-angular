import { Injectable } from "@angular/core";

@Injectable()
export class CursosService{
    constructor(){}

    getCursos(){
        return ['JAVA','RUBY','PYTHON','JAVASCRIPT','REACT'];
    }
}