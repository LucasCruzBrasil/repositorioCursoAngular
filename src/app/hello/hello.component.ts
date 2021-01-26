import { Component } from "@angular/core";




@Component({
    selector: 'hello',
    template: `
          <h2>
          
             Hello Mano {{nome}}
          
          </h2>
    
    `

})
export class HelloComponent{

    nome = 'Lucas';

}