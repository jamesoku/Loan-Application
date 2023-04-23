import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-nav-menu",
  templateUrl: "./nav-menu.component.html",
  styleUrls: ["nav-menu.component.scss"],
})
export class NavMenuComponent implements OnInit {
  @Input() rowData: any;
  public headerTitle: string = "";
  public currentRoute: string = "";

  constructor(private router: Router) {}
  ngOnInit(): void {
    // console.log(this.rowData);
    this.currentRoute = this.router.url;
    if (this.currentRoute === "/create-application") {
      this.headerTitle = "Create Application";
    } else if (this.currentRoute === "/edit-application") {
      this.headerTitle = "Application " + this.rowData.applicationNumber;
    } else {
      this.headerTitle = "Application Manager";
    }
  }
}
