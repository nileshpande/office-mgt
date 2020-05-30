import { Pipe, PipeTransform } from '@angular/core';
import { StepperSelectionEvent } from '@angular/cdk/stepper';

@Pipe({
  name: 'mypipe'
})
export class MypipePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value.length * args[0];
  }

}
