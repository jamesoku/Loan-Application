import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { DialogBodyComponent } from "../dialog-body/dialog-body.component";
import { MatDialog } from "@angular/material/dialog";
<<<<<<< HEAD
<<<<<<< HEAD
import { HttpClient } from "@angular/common/http";

=======
=======
>>>>>>> cb30f421ccb3cf9311226e1fe48bf6fbd8e5e694

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
const ELEMENT_DATA: PeriodicElement[] = [
  {
    applicationNumber: 1,
    status: "Hydrogen",
    amount: 1.0079,
    dateApplied: new Date(2022 / 4 / 21),
    actions: { edit: true, delete: true, viewDetails: true },
  },
  {
    applicationNumber: 2,
    status: "Helium",
    amount: 4.0026,
    dateApplied: new Date(2022 / 4 / 21),
    actions: { edit: true, delete: true, viewDetails: true },
  },
  {
    applicationNumber: 3,
    status: "Lithium",
    amount: 6.941,
    dateApplied: new Date(2022 / 4 / 21),
    actions: { edit: true, delete: true, viewDetails: true },
  },
  {
    applicationNumber: 4,
    status: "Beryllium",
    amount: 9.0122,
    dateApplied: new Date(2022 / 4 / 21),
    actions: { edit: true, delete: true, viewDetails: true },
  },
];
>>>>>>> cb30f421ccb3cf9311226e1fe48bf6fbd8e5e694
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
<<<<<<< HEAD
<<<<<<< HEAD

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
=======
=======
>>>>>>> cb30f421ccb3cf9311226e1fe48bf6fbd8e5e694
  dataSource = ELEMENT_DATA;
  constructor(private router: Router, private MatDialog: MatDialog) {}
  openDialog() {
    this.MatDialog.open(DialogBodyComponent, {
      width: "600px",
<<<<<<< HEAD
>>>>>>> cb30f421ccb3cf9311226e1fe48bf6fbd8e5e694
=======
>>>>>>> cb30f421ccb3cf9311226e1fe48bf6fbd8e5e694
    });
  }
  editRowData(rowData: any) {
    console.log(rowData);
    this.router.navigate(["edit-application", rowData.applicationNumber]);
  }
}
