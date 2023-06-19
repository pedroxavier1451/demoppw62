import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Contacto } from 'src/app/domain/contacto';
import { ContactoService } from 'src/app/services/contacto.service';

@Component({
  selector: 'app-list-contactos',
  templateUrl: './list-contactos.component.html',
  styleUrls: ['./list-contactos.component.scss']
})
export class ListContactosComponent {
  contacto: Contacto = new Contacto();

  constructor(private contactoService: ContactoService,
    private router: Router) {

      let params = this.router.getCurrentNavigation()?.extras.queryParams;
      if(params){
        console.log(params)
        this.contacto = new Contacto()
        this.contacto = params['contacto']
      }
    }

  guardar(){
    console.log(this.contacto);
    this.contactoService.save(this.contacto)
    this.contacto = new Contacto()
    this.router.navigate(['paginas/lista2'])
  }

  actualizar(){
    this.contactoService.update(this.contacto.uid, this.contacto)
    this.router.navigate(['paginas/lista2'])
  }
}
