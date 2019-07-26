import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColumnsComponent } from './columns/columns.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SplashComponent } from './splash/splash.component';
import { ContainerComponent } from './container/container.component';
import { HomeComponent } from './home/home.component';
import { TextComponent } from './text/text.component';
import { ButtonComponent } from './button/button.component';
import { DividerComponent } from './divider/divider.component';
import { ImageComponent } from './image/image.component';
import { CardComponent } from './card/card.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { IntroComponent } from './intro/intro.component';
import { MenuLeftComponent } from './menu-left/menu-left.component';
import { ToggleComponent } from './toggle/toggle.component';
import { FormItemComponent } from './form-item/form-item.component';
import { FormComponent } from './form/form.component'
import { InputComponent } from './input/input.component';
import { ModifiersComponent } from './modifiers/modifiers.component';
import { GetStartedComponent } from './get-started/get-started.component';

import { HighlightModule } from 'ngx-highlightjs';
import xml from 'highlight.js/lib/languages/xml';
import javascript from 'highlight.js/lib/languages/javascript';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faFileUpload, faPlus, faCalculator, faFile, faBlog, faVial, faPlay, faInfoCircle, faSearch, faCalendar, faLock, faPen, faInfinity } from '@fortawesome/free-solid-svg-icons';
import { ColorsComponent } from './colors/colors.component';
import { PositioningComponent } from './positioning/positioning.component';
import { SizingComponent } from './sizing/sizing.component';
import { TableComponent } from './table/table.component';



export function hljsLanguages() {
  return [
    { name: 'xml', func: xml },
    { javascript: 'javascript', func: javascript }

  ];
}

@NgModule({
  declarations: [
    AppComponent,
    ColumnsComponent,
    HeaderComponent,
    MenuComponent,
    NavigationComponent,
    SplashComponent,
    ContainerComponent,
    HomeComponent,
    TextComponent,
    ButtonComponent,
    DividerComponent,
    ImageComponent,
    CardComponent,
    DocumentationComponent,
    IntroComponent,
    MenuLeftComponent,
    ToggleComponent,
    FormItemComponent,
    FormComponent,
    InputComponent,
    ModifiersComponent,
    GetStartedComponent,
    ColorsComponent,
    PositioningComponent,
    SizingComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HighlightModule.forRoot({
      languages: hljsLanguages
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    // Add an icon to the library for convenient access in other components
    library.add(faEnvelope, faFileUpload, faPlus, faCalculator, faFile, faPlay, faBlog, faVial,
      faInfoCircle, faSearch, faLock, faCalendar, faPen, faInfinity);
  }
}