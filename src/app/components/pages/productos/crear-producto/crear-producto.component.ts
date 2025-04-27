import { Component, inject } from '@angular/core';
import { ProductosService } from '../../../../services/productos.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-crear-producto',
  imports: [ReactiveFormsModule],
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css'],
})
export class CrearProductoComponent {
  private productosService = inject(ProductosService);
  previewUrl: string | null = null;
  producto = new FormGroup({
    nombre: new FormControl<string>('', { nonNullable: true }),
    descripcion: new FormControl<string | null>(null),
    precio: new FormControl<number | null>(null),
    stock: new FormControl<string | null>(null),
    imagen: new FormControl<File | null>(null),
    categoria: new FormControl<string | null>(null)
  });
  createProducto() {
    const formData = new FormData();
    const producto = this.producto.getRawValue();
  
    if (producto.nombre !== null && producto.nombre !== undefined) {
      formData.append('nombre', producto.nombre);
    }
  
    if (producto.descripcion !== null && producto.descripcion !== undefined) {
      formData.append('descripcion', producto.descripcion);
    }
  
    if (producto.precio !== null && producto.precio !== undefined) {
      formData.append('precio', String(producto.precio));
    }
  
    if (producto.stock !== null && producto.stock !== undefined) {
      formData.append('stock', String(producto.stock));
    }
  
    if (producto.categoria !== null && producto.categoria !== undefined) {
      formData.append('categoria', producto.categoria);
    }
  
    if (producto.imagen !== null && producto.imagen instanceof File) {
      formData.append('imagen', producto.imagen);
    }
    this.productosService.CrearProducto(formData).subscribe({
      next: (response) => console.log('Producto creado con imagen', response),
      error: (error) => console.error('Error al crear producto:', error)
    });
  }
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) return;
  
    const file = input.files[0];
    this.producto.patchValue({ imagen: file });
  
    // Previsualización
    const reader = new FileReader();
    reader.onload = () => {
      this.previewUrl = reader.result as string;
    };
    reader.readAsDataURL(file);
  }
}