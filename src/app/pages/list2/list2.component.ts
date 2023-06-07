import { Component, EventEmitter, Output } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Contacto } from 'src/app/domain/contacto';
import { ContactoService } from 'src/app/services/contacto.service';

@Component({
  selector: 'app-list2',
  templateUrl: './list2.component.html',
  styleUrls: ['./list2.component.scss']
})
export class List2Component {
  isChecked = true;
  
  listadoContactos: Contacto[] = []

  constructor(private contactoService: ContactoService, 
      private router: Router){
    this.listadoContactos = contactoService.getList()
    console.log('listadoContactos', this.listadoContactos)
  }

  editar(contacto: Contacto){
    console.log(contacto)
    console.log(this.listadoContactos)
    let params: NavigationExtras = {
      queryParams: {
        contacto: contacto
      }
    }
    this.router.navigate(['template/contact'], params)
  }
  
  eliminar(contacto: Contacto){

    for(let i = 0 ; i < this.listadoContactos.length ; i++){
      if(this.listadoContactos[i] === contacto){
        console.log("son iguales");
        this.listadoContactos.splice(i,1);
      }
    }
  }

  
}
