import { Component } from "@angular/core";

@Component({
    selector: 'app-event-binding',
    templateUrl: './event-binding.component.html',
    styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent{
    valorAtual;
    valorSalvo;
    isClick: boolean = false;

    pessoa = {
        nome : 'Johnatan Brayan',
        idade : 23
    };

    onKeyUp(event){
        this.valorAtual = event;
    }
    salvaValor(valor){
        this.valorSalvo = valor;
    }

    onClick(event){
        // alert('Ahhh você CLICOU !!! KKK');
        this.isClick = !this.isClick;
    }
}