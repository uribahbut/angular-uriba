import { Component,OnInit } from '@angular/core';
import {of , from} from 'rxjs';
import {map , tap,take} from 'rxjs/operators';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  implements OnInit {
  name = 'Angular';
  nums:number[];
  ngOnInit(){
    of(2,3,1).pipe(
      tap(item => console.log(`start with : ${item}`)),
      map(item => item + 2),
      tap(item => console.log(`then with : ${item}`)),
      map(item => item - 3),
      map(c => {
        if(c === 0)
        {
          throw new Error('number is zero.')          
        }
        else
        {
          return c;
        }
      })
      ).subscribe(
      item => console.log(`the string is ${item}`),
      err => console.log(`error is ${err}`),
      () => console.log('Done'));

    from([6,5,14,22]).pipe(take(3)).subscribe(
      item => console.log(`the result is ${item}`),
      err => console.log(`error is ${err}`)
      //() => console.log('Done')
    );

    of('asd','sdsf','dfg').subscribe(
      item => console.log(`the string is ${item}`),
      err => console.log(`error is ${err}`))
      //() => console.log('Done'));
  }
}
//observable = stream of data 
//observer = interface with methods next , error , compleer
//subscriber = observer that can unsubscribe
//subscription = execution of an observable subscribe returns a subscription

