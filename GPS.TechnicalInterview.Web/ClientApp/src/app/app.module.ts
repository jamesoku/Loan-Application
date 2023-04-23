import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { AppComponent } from "./app.component";
import { NavMenuComponent } from "./nav-menu/nav-menu.component";
import { CreateApplicationComponent } from "./create-application/create-application.component";
import { AppRoutingModule } from "./app-routing.module";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./shared/material.module";
import { ApplicationsComponent } from "./applications/applications.component";
import { MatTableModule } from "@angular/material/table";
import { MatSortModule } from "@angular/material/sort";

import { MatMenuModule } from "@angular/material/menu";

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    ApplicationsComponent,
    CreateApplicationComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: "ng-cli-universal" }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MaterialModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatSortModule,
    MatMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
