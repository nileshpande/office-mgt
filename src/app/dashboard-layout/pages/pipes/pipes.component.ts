import { Component, OnInit } from '@angular/core';
import { MypipePipe } from '../../../custompipes/mypipe.pipe';
import { Classone } from 'src/app/customclasses/classone/classone';


@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  public clone = new Classone();
  constructor() { }
  abc:string = "Nilesh Pande jalgaon";

  ngOnInit() {
  }

}
