import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { DialogBodyComponent } from "../dialog-body/dialog-body.component";
import { MatDialog } from "@angular/material/dialog";

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
@Component({
  selector: "app-applications",
  templateUrl: "./applications.component.html",
  styleUrls: ["./applications.component.scss"],
})
export class ApplicationsComponent {
  public displayedColumns: Array<string> = [
    "applicationNumber",
    "amount",
    "dateApplied",
    "status",
    "actions",
  ];
  dataSource = ELEMENT_DATA;
  constructor(private router: Router, private MatDialog: MatDialog) {}
  openDialog() {
    this.MatDialog.open(DialogBodyComponent, {
      width: "600px",
    });
  }
  editRowData(rowData: any) {
    console.log(rowData);
    this.router.navigate(["edit-application"], { state: rowData });
  }
}
