import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'reverse-json', loadChildren: () => import(`./reverse-jsonpath/reverse-jsonpath.module`).then(m => m.ReverseJsonpathModule) },
  { path: '', redirectTo: 'reverse-json', pathMatch: 'full' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
