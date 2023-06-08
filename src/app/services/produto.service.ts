import { Injectable } from '@angular/core';
import { Producto } from '../domain/producto';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private dbPath = '/productos'; 
  productos: Producto[] = [] //Array para guardar los contactos

  productosRef: AngularFirestoreCollection<Producto>;

  constructor(private db: AngularFirestore) {
    this.productosRef = db.collection(this.dbPath);
  }

  save(producto: Producto){
    this.productos.push(producto) //Guarda los datos en contacto
    console.log(this.productos) //Mandamos a imprimir los contactos en consola
    producto.uid = this.db.createId()
    this.create(producto)
  }

  getList(){
    return this.productos //Retorna los contactos
  }
  
  getAll() {
    return this.productosRef.valueChanges();
  }

  create(producto: Producto): any {
    return this.productosRef.doc(producto.uid).set({ ...producto });
  }

  update(id: string, data: any): Promise<void> {
    return this.productosRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.productosRef.doc(id).delete();
  }
}
