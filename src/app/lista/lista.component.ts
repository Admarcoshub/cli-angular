import { Producto } from './producto';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
	//lista: Array<string>= [ 'fideos', 'leche' , 'arroz'];
	lista: Array<Producto> = [];
  constructor() { 
  		this.lista.push(new Producto ("fideos"));
  		this.lista.push(new Producto ("leche"));
  		this.lista.push(new Producto ("arroz"));
  }

  ngOnInit() {
  }

}
