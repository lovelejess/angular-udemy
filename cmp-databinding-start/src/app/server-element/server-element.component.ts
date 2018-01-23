import {
    Component,
    ContentChild,
    ElementRef,
    Input,
    OnChanges,
    OnInit,
    SimpleChanges,
    ViewChild,
    ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges {
  @Input('srvElement') public element: {type: string, name: string, content: string};
  @Input() name: string = '';
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') contentParagraph: ElementRef;
  
  constructor() { 
    console.log('constructor was called!');
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges was called!');    
    console.log(changes);
  }

  ngOnInit() {
    console.log('ngOnInit was called!');
    console.log(`Text Content: ${this.header.nativeElement.textContent}`);
    console.log(`Content paragraph: ${this.contentParagraph.nativeElement.textContent}`);
  }

  ngDoCheck() {
    console.log('ngDoCheck was called!');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit was called!');
    console.log(`Content paragraph: ${this.contentParagraph.nativeElement.textContent}`);    
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentsCheck was called!'); 
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit was called!');
    console.log(`Text Content: ${this.header.nativeElement.textContent}`);
  }

  ngOnDestroy() {
    console.log('ngOnDestroy was called!');
  }

}
