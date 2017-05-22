import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Producto } from '../producto';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})

export class FormularioComponent implements OnInit {
	@Output('onProductoAdd')productoAgregado = new EventEmitter<Producto>();

  constructor() { 
  }

  agregarProducto(producto: HTMLInputElement) {
  //console.log(producto);
  this.productoAgregado.emit({producto: producto.value});
   producto.value='';
   producto.focus();
  }


  ngOnInit() {
  }

}
