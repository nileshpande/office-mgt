import { Component, OnInit } from '@angular/core';
import { OrganisationsService } from 'src/app/services/organisations.service';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.scss']
})
export class EmpListComponent implements OnInit {

  emplist=[];
  constructor(public orgservice:OrganisationsService) { }

  ngOnInit() {
    this.orgservice.get().subscribe((data: any[])=>{
      console.log(data);
      this.emplist = data;
    });
  }

}
