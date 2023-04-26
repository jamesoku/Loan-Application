import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  selector: "app-dialog-body",
  templateUrl: "./dialog-body.component.html",
  styleUrls: ["./dialog-body.component.css"],
})
export class DialogBodyComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DialogBodyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private http: HttpClient
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  confirmdelete() {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
    });
    const applicationNumber = this.data;
    console.log(typeof applicationNumber);
    this.http
      .post(
        "https://localhost:5001/ApplicationManager/deleteForm",
        JSON.stringify(applicationNumber),
        {
          headers: headers,
        }
      )
      .subscribe(
        (response) => {
          console.log("Data saved:", response);
        },
        (error) => {
          console.error("Error saving data:", error);
        }
      );
  }

  ngOnInit(): void {
    console.log(this.data);
  }
}
