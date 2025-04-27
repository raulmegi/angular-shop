import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductosService, Producto } from '../../../../services/productos.service';

@Component({
  selector: 'app-ver-producto',
  templateUrl: './ver-producto.component.html',
  styleUrls: ['./ver-producto.component.css'],
  standalone: true,
  imports: [RouterLink],
})
export class VerProductoComponent {
  private route = inject(ActivatedRoute);
  private productosService = inject(ProductosService);

  productos: Producto[] = []; // Declare the 'productos' property
  producto: Producto | null = null;

  ngOnInit(): void {
    // Fetch the list of products
    this.productosService.getProductos().subscribe({
      next: (data) => {
        this.productos = data; // Assign the fetched products to the 'productos' property
        console.log('Productos fetched:', this.productos);
      },
      error: (err) => {
        console.error('Error fetching productos:', err);
      },
    });

    // Handle query parameters for a specific product
    this.route.queryParams.subscribe((params) => {
      const id = params['id'];
      console.log('ID del producto:', id);
    });
  }
}