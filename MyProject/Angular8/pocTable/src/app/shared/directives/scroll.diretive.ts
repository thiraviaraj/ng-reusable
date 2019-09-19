import { Directive, HostListener, EventEmitter, Output, AfterViewInit, ElementRef } from "@angular/core";
const ESCAPE_KEYCODE = 27;
@Directive({
    selector: "[scroll-directive]"
})
export class ScrollDirective implements AfterViewInit {

    // <summary>
    // Event ouptut the current scroll percentage
    // </summary>
    constructor(private elementRef:ElementRef) {
    }
    @Output() onScroll = new EventEmitter<number>();
    ngAfterViewInit(): void {
        if(this.elementRef.nativeElement.querySelector('.ui-table-scrollable-body')) {
            this.elementRef.nativeElement.querySelector('.ui-table-scrollable-body').scrollTop = 50;
            this.elementRef.nativeElement.querySelector('.ui-table-scrollable-body')
            .addEventListener('scroll', this.onTblScroll.bind(this));
                                // document.querySelector('#topPls')
                                // .addEventListener('click', this.onTopClick.bind(this));
                                
                            }
    }
    
    // onTopClick(event) {
    //     alert("click");
    //     this.elementRef.nativeElement.querySelector('.ui-table-scrollable-body').scrollTop = 55
    // }
    onTblScroll(event) {
        const percent = Math.round((event.srcElement.scrollTop / (event.srcElement.scrollHeight - event.srcElement.clientHeight)) * 100);
        // Compare the new with old and only raise the event if values change
        if(this.percentValue !== percent){
          debugger;
          // Update the percent value
          this.percentValue = percent;

          // Emit the event
          this.onScroll.emit(percent);
        }
        // event.srcElement.scroll()
        console.log(event.srcElement.scrollTop);
    }
    // <summary>
    // Holds the current percent value
    // </summary>
    percentValue: number = 10;
    
    // <summary>
    // Event listener for scroll event on the specific ui element
    // </summary>
    @HostListener("window:scroll", ["$event"]) onWindowScroll(ev) {
        // do some stuff here when the window is scrolled
        const verticalOffset = window.pageYOffset 
              || document.documentElement.scrollTop 
              || document.body.scrollTop || 0;
            //   console.log(ev.srcElement);
        // console.log(verticalOffset);
    }
    @HostListener("scroll", ["$event"])
    onListenerTriggered(event: any): void {
        const percent = Math.round((event.srcElement.scrollTop / (event.srcElement.scrollHeight - event.srcElement.clientHeight)) * 100);

        // Compare the new with old and only raise the event if values change
        if(this.percentValue !== percent){
          
          // Update the percent value
          this.percentValue = percent;

          // Emit the event
          this.onScroll.emit(percent);
        }
    }
    @HostListener("click", ["$event"])
    onClickTriggered(event: any): void {
        console.log(event);
        this.elementRef.nativeElement.querySelector('.ui-table-scrollable-body').scrollTop = 0;
    }
    

@HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    // if (event.keyCode === ESCAPE_KEYCODE) {
    //     // ...
    //     console.log(ESCAPE_KEYCODE);
    // }
    console.log(event.keyCode);
}
}