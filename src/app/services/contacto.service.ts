import { Injectable } from '@angular/core';
import { Contacto } from '../domain/contacto';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  contactos: Contacto[] = [] //Array para guardar los contactos

  constructor() { }

  save(contacto: Contacto){
    this.contactos.push(contacto) //Guarda los datos en contacto
    console.log(this.contactos) //Mandamos a imprimir los contactos en consola
  }

  getList(){
    return this.contactos //Retorna los contactos
  }
}
