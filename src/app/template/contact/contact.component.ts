import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Contacto } from 'src/app/domain/contacto';
import { ContactoService } from 'src/app/services/contacto.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

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
  }

  actualizar(){
    console.log(this.contacto)
    this.contacto = new Contacto();
  }

  
}
