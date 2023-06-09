import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { DialogBodyComponent } from "../dialog-body/dialog-body.component";
import { MatDialog } from "@angular/material/dialog";
import { HttpClient } from "@angular/common/http";

export interface PeriodicElement {
  applicationNumber: number;
  amount: number;
  dateApplied: Date;
  status: string;
  actions: Actions;
}
interface Actions {
  edit: boolean;
  delete: boolean;
  viewDetails: boolean;
}

@Component({
  selector: "app-applications",
  templateUrl: "./applications.component.html",
  styleUrls: ["./applications.component.scss"],
})
export class ApplicationsComponent implements OnInit {
  public displayedColumns: Array<string> = [
    "applicationNumber",
    "amount",
    "dateApplied",
    "status",
    "actions",
  ];

  dataSource: any;

  constructor(
    private router: Router,
    private MatDialog: MatDialog,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.http
      .get<any>("https://localhost:5001/ApplicationManager/readJson")
      .subscribe(
        (data) => {
          console.log(data);
          this.dataSource = data;

          this.dataSource.forEach((element: any) => {
            if (element.status === 0) {
              element.status = "New";
            } else if (element.status === 1) {
              element.status = "Approved";
            } else if (element.status === 2) {
              element.status = "Funded";
            }
          });
        },
        (error) => {
          console.log(error);
        }
      );
  }

  openDialog(rowData: any) {
    console.log(rowData.applicationNumber);
    const dialogRef = this.MatDialog.open(DialogBodyComponent, {
      width: "600px",
      data: rowData.applicationNumber, // pass the rowData to the dialog
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.ngOnInit();
    });
  }

  editRowData(rowData: any) {
    console.log(rowData);
    this.router.navigate(["edit-application", rowData.applicationNumber]);
  }
}
