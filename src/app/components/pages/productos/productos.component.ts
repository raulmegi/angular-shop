import { Component, inject } from '@angular/core';
import { Producto, ProductosService } from '../../../services/productos.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  private productosService = inject(ProductosService);
  // Primer ejemplo sin http
  productos: string[] = ['Producto 1', 'Producto 2', 'Producto 3'];
  numero= 4;
  // Segundo ejemplo con http
  estosSiSonProductos: Producto[] = [];
  ngOnInit(): void {
    console.log('ProductosComponent initialized');
    this.productosService. getProductos().subscribe({
      next: (productos) => {
        console.log('Productos received:', productos);
        this.estosSiSonProductos = productos;
      },
      error: (err) => console.error('Error fetching productos:', err)
    });
  }
  addData() {
    this.productos.push(`Producto ${this.numero}`);
    this.numero++;
  }
}