import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, PRIMARY_OUTLET, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { distinctUntilChanged, map, subscribeOn } from 'rxjs/operators';
 
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
 
  
  router: string;

  constructor(public _router: Router){

          this.router = _router.url; 
    }

  
  ngOnInit() {
     
 }

 

}

