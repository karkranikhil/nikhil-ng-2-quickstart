import { Component } from '@angular/core';
@Component({
  selector: 'my-contacts',
  templateUrl: 'app/contacts.component.html'
})
export class AppComponent { 
  contacts:any[] = [
    { name: 'Zubin',contactNo:'123457',address:"Africa" },
    { name: 'Micheal Clark',contactNo:'123456',address:"Australia" },
    { name: 'James Bond' , contactNo:'12345',address:"USA"},     
    { name: 'Steve Jobs',contactNo:'123457',address:"Africa" }
  ];
}
