import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { LoanApplication } from "../models/loanapplication.model";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-create-application",
  templateUrl: "./create-application.component.html",
  styleUrls: ["./create-application.component.scss"],
})
export class CreateApplicationComponent implements OnInit {
  // Properties
  public applicationForm: FormGroup;
  public statuses: Array<string> = ["New", "Approved", "Funded"];
<<<<<<< HEAD
  public rowData: any;
  public currentRoute: string = "";
  public isReadOnly: boolean;
  public foundApplication: any;
=======
  rowData: any;
  public currentRoute: string = "";
  isReadOnly: Boolean;
<<<<<<< HEAD
>>>>>>> cb30f421ccb3cf9311226e1fe48bf6fbd8e5e694
=======
>>>>>>> cb30f421ccb3cf9311226e1fe48bf6fbd8e5e694

  // Constructor
  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.applicationForm = this.formBuilder.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      phoneNumber: [null, Validators.pattern(/^\d{9}$/)],
      email: [null, Validators.email],
<<<<<<< HEAD
<<<<<<< HEAD
      applicationNumber: [null, [Validators.required]],
=======
=======
>>>>>>> cb30f421ccb3cf9311226e1fe48bf6fbd8e5e694
      applicationNumber: [
        null,
        [
          Validators.required,
          Validators.pattern(/^(?!0\.0*$)(?!\.?\d$)\d*(\.\d{1})?$/),
        ],
      ],
<<<<<<< HEAD
>>>>>>> cb30f421ccb3cf9311226e1fe48bf6fbd8e5e694
=======
>>>>>>> cb30f421ccb3cf9311226e1fe48bf6fbd8e5e694
      status: ["New"],
      amount: [
        null,
        [
          Validators.required,
<<<<<<< HEAD
<<<<<<< HEAD
          Validators.pattern(
            /^(?!\$?0(?:\.0{1,2})?$)(?!\$0\.0)(?!\$0\.00)(?<![\d,])\$?[\d]+(?:,[\d]{3})*(\.\d{1,2})?$/
          ),
        ],
      ],
      monthlyPayAmount: [null],
      terms: [null, [Validators.required, Validators.pattern(/^[1-9]\d*$/)]],
=======
          Validators.pattern(/^(?!0\.0*$)(?!\.?\d$)\d*(\.\d{1,2})?$/),
        ],
      ],
      monthlyPayAmount: [null],
=======
          Validators.pattern(/^(?!0\.0*$)(?!\.?\d$)\d*(\.\d{1,2})?$/),
        ],
      ],
      monthlyPayAmount: [null],
>>>>>>> cb30f421ccb3cf9311226e1fe48bf6fbd8e5e694
      terms: [
        null,
        [
          Validators.required,
          Validators.pattern(/^(?!0\.0*$)(?!\.?\d$)\d*(\.\d{1})?$/),
        ],
      ],
<<<<<<< HEAD
>>>>>>> cb30f421ccb3cf9311226e1fe48bf6fbd8e5e694
=======
>>>>>>> cb30f421ccb3cf9311226e1fe48bf6fbd8e5e694
    });
  }
  ngOnInit() {
<<<<<<< HEAD
<<<<<<< HEAD
    // Get current route
    this.currentRoute = this.router.url;

    if (this.currentRoute === "/create-application") {
      // Sets Applicationnumber textbox to readonly
      this.isReadOnly = false;
    } else {
      // Get application data if in edit mode
      this.isReadOnly = true;
      const id = this.currentRoute.split("/")[2];

      // Retrieve a particular application based on the application number or id from server
      this.http
        .get<any>("https://localhost:5001/ApplicationManager/readJson")
        .subscribe(
          (data) => {
            const foundApplication = data.find(
              (application) => application.applicationNumber === id
            );

            // Map status integer to string
            if (foundApplication.status === 0) {
              foundApplication.status = "New";
            } else if (foundApplication.status === 1) {
              foundApplication.status = "Approved";
            } else if (foundApplication.status === 2) {
              foundApplication.status = "Funded";
            }

            // Set foundApplication property
            this.foundApplication = foundApplication;

            // set the values of the form control here with the foundApplication
            this.applicationForm.controls["firstName"].setValue(
              this.foundApplication.personalInfo.name.first
                .charAt(0)
                .toUpperCase() +
                this.foundApplication.personalInfo.name.first
                  .slice(1)
                  .toLowerCase()
            );

            this.applicationForm.controls["lastName"].setValue(
              this.foundApplication.personalInfo.name.last
                .charAt(0)
                .toUpperCase() +
                this.foundApplication.personalInfo.name.last
                  .slice(1)
                  .toLowerCase()
            );

            this.applicationForm.patchValue({
              phoneNumber: foundApplication?.personalInfo?.phoneNumber,
            });

            this.applicationForm.controls["email"].setValue(
              this.foundApplication.personalInfo.email.charAt(0).toUpperCase() +
                this.foundApplication.personalInfo.email.slice(1).toLowerCase()
            );

            this.applicationForm.patchValue({
              applicationNumber: foundApplication?.applicationNumber,
            });

            this.applicationForm.patchValue({
              status: foundApplication?.status,
            });

            this.applicationForm.patchValue({
              amount: foundApplication?.loanterms?.amount?.toLocaleString(
                "en-US",
                {
                  style: "currency",
                  currency: "USD",
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                }
              ),
            });

            this.applicationForm.patchValue({
              monthlyPayAmount:
                foundApplication?.loanterms?.monthlyPaymentAmount?.toLocaleString(
                  "en-US",
                  {
                    style: "currency",
                    currency: "USD",
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  }
                ),
            });

            this.applicationForm.patchValue({
              terms: foundApplication?.loanterms?.term,
            });
          },
          (error) => {
            console.log(error);
          }
        );
    }
  }

  // Method to save form data
  saveForm() {
    // Check for form validity
    if (this.applicationForm.invalid) {
      console.log("invalid");
      return;
    }

    // Gets form data from applicationForm and saves it
    let formData = this.applicationForm.value;

    //take any dollar sign($) and comma in the value
    formData.amount = formData.amount.replace(/\$|,/g, "");

    if (formData.status === "New") {
      formData.status = 0;
    } else if (formData.status === "Approved") {
      formData.status = 1;
    } else if (formData.status === "Funded") {
      formData.status = 2;
    }

    formData.monthlyPayAmount = (formData.amount / formData.terms).toFixed(2);

    // converts the into the right format to Post to the WebApi(.Net)
    const loanApplicationData = this.convertInputToLoanApplication(formData);

    // Send data to server
    const url = "https://localhost:5001/ApplicationManager/saveForm";

    const headers = new HttpHeaders({
      "Content-Type": "application/json",
    });
    //Post request
    this.http
      .post<any>(url, loanApplicationData, { headers: headers })
      .subscribe(
        (res) => {
          console.log(res.message);
          if (res.message == "saved.") {
            this.snackBar.open("Saved successfully.", "Ok", {});
            this.ngOnInit();
          } else {
            this.snackBar.open("Created successfully.", "Ok", {});
            this.applicationForm.reset();
          }
        },
        (err) => {
          console.error("Error saving form data:", err);
        }
      );
  }

  // Method to convert input data to LoanApplication object
  convertInputToLoanApplication = (input: any): LoanApplication => {
    const loanApplication: LoanApplication = {
      applicationNumber: input.applicationNumber,
      loanterms: {
        amount: Number(input.amount),
        monthlyPaymentAmount: Number(input.monthlyPayAmount),
        term: input.terms,
      },
      personalInfo: {
        name: {
          First: input.firstName,
          last: input.lastName,
        },
        PhoneNumber: input.phoneNumber,
        Email: input.email,
      },
      // Set the current date as the applied date if appliction is being created
      dateApplied: this.foundApplication?.dateApplied
        ? new Date(this.foundApplication.dateApplied)
        : new Date(),

      status: input.status,
    };

    return loanApplication;
  };
=======
=======
>>>>>>> cb30f421ccb3cf9311226e1fe48bf6fbd8e5e694
    this.currentRoute = this.router.url;
    if (this.currentRoute === "/create-application") {
      this.isReadOnly = false;
    } else this.isReadOnly = true;

    console.log(this.isReadOnly);
  }
<<<<<<< HEAD
>>>>>>> cb30f421ccb3cf9311226e1fe48bf6fbd8e5e694
=======
>>>>>>> cb30f421ccb3cf9311226e1fe48bf6fbd8e5e694
}
