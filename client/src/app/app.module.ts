import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes  } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component'
import { FooterComponent } from './components/footer/footer.component'
import { ProductComponent } from './components/product/product.component'
import { AsideComponent } from './components/aside/aside.component'
import { ProductService } from './services/product.service';
import { UserService } from './services/user.service';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { RechargeComponent } from './components/recharge/recharge.component';
import { UserProductsComponent} from './components/user-products/user-products.component';
import { ProductDetailComponent} from './components/product-detail/product-detail.component';
import { ProductDetailFreeComponent } from './components/product-detail-free/product-detail-free.component';

import { PdfViewerComponent  } from 'ng2-pdf-viewer';
import {VgCoreModule} from 'videogular2/core';
import {VgControlsModule} from 'videogular2/controls';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgBufferingModule} from 'videogular2/buffering';

const routes : Routes = [
  {path:'', component : ProductComponent},
  {path:'user-products', component: UserProductsComponent},
  {path:'product-detail', component: ProductDetailComponent},
  {path:'product-detail-free', component: ProductDetailFreeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductComponent,
		AsideComponent,
		LoginComponent,
    SignupComponent,
    RechargeComponent,
    UserProductsComponent,
    ProductDetailComponent,
    ProductDetailFreeComponent,
    PdfViewerComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
 		VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    RouterModule.forRoot(routes)
  ],

  providers: [ProductService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
