import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-create-application",
  templateUrl: "./create-application.component.html",
  styleUrls: ["./create-application.component.scss"],
})
export class CreateApplicationComponent implements OnInit {
  public applicationForm: FormGroup;
  public statuses: Array<string> = ["New", "Approved", "Funded"];
  rowData: any;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.applicationForm = this.formBuilder.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      phoneNumber: [null, Validators.pattern(/^\d{9}$/)],
      email: [null, Validators.email],
      applicationNumber: [null],
      status: ["New"],
      amount: [null],
      monthlyPayAmount: [null],
      terms: [null],
    });

    this.rowData = this.router.getCurrentNavigation().extras.state;
    console.log(this.rowData);
  }
  ngOnInit() {}
}
