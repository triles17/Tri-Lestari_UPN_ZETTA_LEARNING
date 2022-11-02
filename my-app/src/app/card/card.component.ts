import { Component } from '@angular/core';

@Component({
   selector: 'card-app',
   templateUrl: './card.component.html',
})
// yang punya tanda @ namanya decoratore untuk enhance class
export class CardComponent {
   title: string = 'Card Title';

   onAddTitle() {
      this.title = 'Title Changed';
   }
}
