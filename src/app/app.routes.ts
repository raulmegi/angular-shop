import { Routes } from '@angular/router';
import { ProductosComponent } from './components/pages/productos/productos.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RegistroComponent } from './components/pages/registro/registro.component';
import { PerfilComponent } from './components/pages/perfil/perfil.component';
import { CrearProductoComponent } from './components/pages/productos/crear-producto/crear-producto.component';
import { EditarProductoComponent } from './components/pages/productos/editar-producto/editar-producto.component';
import { VerProductoComponent } from './components/pages/productos/ver-producto/ver-producto.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { CarritoComponent } from './components/pages/carrito/carrito.component';





export const routes: Routes = [
    {path:'',redirectTo:'/productos', pathMatch: 'full'},
    {path:'productos', title: "Productos", component: ProductosComponent},
    {path:'login', component: LoginComponent},
    {path:'registro', component: RegistroComponent},
    {path:'perfil', component: PerfilComponent},
    {path: 'productos/ver-producto', component: VerProductoComponent },
    {path: 'productos/crear-producto', component: CrearProductoComponent },
    {path: 'productos/editar/:id', component: EditarProductoComponent },
    {path: 'productos/:id', component: VerProductoComponent },
    {path:'**',redirectTo:'/productos', pathMatch: 'full'},

];
