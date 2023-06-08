import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Producto } from 'src/app/domain/producto';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-list4',
  templateUrl: './list4.component.html',
  styleUrls: ['./list4.component.scss']
})
export class List4Component {
  isChecked = true;
  
  listadoProductos: Producto[] = []
  listadoProductosFire: any;

  constructor(private produtoService: ProdutoService, 
      private router: Router){
    this.listadoProductos = produtoService.getList()
    console.log('listadoProductos', this.listadoProductos)
    this.listadoProductosFire = produtoService.getAll()
    console.log('listadoProductosFire', this.listadoProductosFire)
    
  }

  editar(producto: Producto){
    console.log(producto)
    console.log(this.listadoProductos)
    let params: NavigationExtras = {
      queryParams: {
        producto: producto
      }
    }
    this.router.navigate(['template/contact'], params)
  }
  
  eliminar(producto: Producto){
    this.produtoService.delete(producto.uid);

    
    for(let i = 0 ; i < this.listadoProductos.length ; i++){
      if(this.listadoProductos[i] === producto){
        console.log("son iguales");
        this.listadoProductos.splice(i,1);
      }
    }
    
  }
}
