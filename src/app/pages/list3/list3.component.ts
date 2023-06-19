import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/domain/producto';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-list3',
  templateUrl: './list3.component.html',
  styleUrls: ['./list3.component.scss']
})
export class List3Component {
  producto: Producto = new Producto();

  constructor(private produtoService: ProdutoService,
    private router: Router) {

      let params = this.router.getCurrentNavigation()?.extras.queryParams;
      if(params){
        console.log(params)
        this.producto = new Producto()
        this.producto = params['producto']
      }
    }

  guardar(){
    console.log(this.producto);
    this.produtoService.save(this.producto)
    this.producto = new Producto()
    this.router.navigate(['paginas/lista4'])
  }

  actualizar(){
    this.produtoService.update(this.producto.uid, this.producto)
    this.router.navigate(['paginas/lista4'])
  }
}
