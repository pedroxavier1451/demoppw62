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
  listadoContactosFire: any;

  constructor(private contactoService: ContactoService, 
      private router: Router){
    this.listadoContactos = contactoService.getList()
    console.log('listadoContactos', this.listadoContactos)
    this.listadoContactosFire = contactoService.getAll()
    console.log('listadoContactosFire', this.listadoContactosFire)
    
  }

  editar(contacto: Contacto){
    console.log(contacto)
    let params: NavigationExtras = {
      queryParams: {
        contacto: contacto
      }
    }
    this.router.navigate(['paginas/listaContactos'], params)
  }
  
  eliminar(contacto: Contacto){
    this.contactoService.delete(contacto.uid);

    
    for(let i = 0 ; i < this.listadoContactos.length ; i++){
      if(this.listadoContactos[i] === contacto){
        console.log("son iguales");
        this.listadoContactos.splice(i,1);
      }
    }
    
  }

  
}
