import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'proficiency'
})
export class ProficiencyPipe implements PipeTransform {

  transform(angularProficiency:number): unknown {
    if(angularProficiency==5){
      return "Excellent"
    }
    else if(angularProficiency<5 && angularProficiency>3){
      return "Good"
    }
    else if(angularProficiency<3 && angularProficiency >2){
      return "Average"
    }else
    {
      return "Bad"
    }
   
  }

}
