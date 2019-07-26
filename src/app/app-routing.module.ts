import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColumnsComponent } from './columns/columns.component';
import { SplashComponent } from './splash/splash.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { ContainerComponent } from './container/container.component';
import { TextComponent } from './text/text.component';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { DividerComponent } from './divider/divider.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { IntroComponent } from './intro/intro.component';
import { ImageComponent } from './image/image.component';
import { MenuComponent } from './menu/menu.component';
import { ToggleComponent } from './toggle/toggle.component';
import { FormComponent } from './form/form.component';
import { FormItemComponent } from './form-item/form-item.component';
import { InputComponent } from './input/input.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { ModifiersComponent } from './modifiers/modifiers.component';
import { TableComponent } from './table/table.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'get-started', component: GetStartedComponent },
  {
    path: 'documentation', component: DocumentationComponent, children: [
      { path: '', component: IntroComponent },
      { path: 'basic/columns', component: ColumnsComponent },
      { path: 'basic/container', component: ContainerComponent },
      { path: 'basic/text', component: TextComponent },
      { path: 'basic/navigation', component: NavigationComponent },
      { path: 'components/toggle', component: ToggleComponent },
      { path: 'components/button', component: ButtonComponent },
      { path: 'components/splash', component: SplashComponent },
      { path: 'components/card', component: CardComponent },
      { path: 'components/image', component: ImageComponent },
      { path: 'components/divider', component: DividerComponent },
      { path: 'components/menu', component: MenuComponent },
      { path: 'components/table', component: TableComponent },
      { path: 'form/form', component: FormComponent },
      { path: 'form/form-item', component: FormItemComponent },
      { path: 'form/input', component: InputComponent },
      { path: 'modifiers/modifiers', component: ModifiersComponent }
    ],
  },






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
