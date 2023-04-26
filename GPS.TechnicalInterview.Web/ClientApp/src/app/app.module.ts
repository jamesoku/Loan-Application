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
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatDialogModule } from "@angular/material/dialog";
import { DialogBodyComponent } from "./dialog-body/dialog-body.component";
<<<<<<< HEAD
<<<<<<< HEAD
import { MatSnackBar, MatSnackBarModule } from "@angular/material/snack-bar";
=======
>>>>>>> cb30f421ccb3cf9311226e1fe48bf6fbd8e5e694
=======
>>>>>>> cb30f421ccb3cf9311226e1fe48bf6fbd8e5e694

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    ApplicationsComponent,
    CreateApplicationComponent,
    DialogBodyComponent,
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
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
<<<<<<< HEAD
<<<<<<< HEAD
    MatSnackBarModule,
=======
>>>>>>> cb30f421ccb3cf9311226e1fe48bf6fbd8e5e694
=======
>>>>>>> cb30f421ccb3cf9311226e1fe48bf6fbd8e5e694
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogBodyComponent],
})
export class AppModule {}
