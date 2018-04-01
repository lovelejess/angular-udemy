import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Observer } from 'rxjs/Observer';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  private numbersSubscription: Subscription;
  private customSubscription: Subscription;

  constructor() { }

  ngOnInit(): void {
    const myNumbers = Observable.interval(1000)
    .map(
      (data: number) => {
        return data * 2;
      });

    this.numbersSubscription = myNumbers.subscribe(
      (number: number) => {
        console.log(number);
      });

    const myObservable: Observable<string> = Observable.create((observer: Observer<string>) => {
      setInterval(() => {
        observer.next('first package');
      }, 2000);
      setTimeout(() => {
        observer.next('second package');
      }, 4000);
      setTimeout(() => {
        observer.error('error');
      }, 5000);
      setTimeout(() => {
      }, 6000);
      setTimeout(() => {
        observer.next('third packagse');
      }, 8000);
    });
    this.customSubscription = myObservable.subscribe(
      (data: string) => { console.log(data);},
      (error: string) => { console.log(error);},
      () => { console.log('completed');},
    );
  }

  ngOnDestroy(): void {
    this.numbersSubscription.unsubscribe();
    this.customSubscription.unsubscribe();
  }
}
