import {
    Directive,
    HostListener,
    EventEmitter,
    Output,
    AfterViewInit,
    ElementRef
} from "@angular/core";
import { DomHandler } from 'primeng/components/dom/domhandler';
@Directive({selector: "[trigger-tab]"})
export class TriggerTabDirective implements AfterViewInit {
    // <summary> Event ouptut the current scroll percentage </summary>
    constructor(private elementRef : ElementRef) {}
    @Output()onScroll = new EventEmitter <KeyboardEvent> ();
    ngAfterViewInit() : void {
    }

    // <summary> Holds the current percent value </summary>
    percentValue : number = 10;

    // <summary> Event listener for scroll event on the specific ui element
    // </summary>
    @HostListener("window:scroll", ["$event"])onWindowScroll(ev) {}
    @HostListener("blur", ["$event"])
    onListenerTriggered(event : any) : void {
        // alert("cam in")
    }
    @HostListener("click", ["$event"])
    onClickTriggered(event : any) : void {
        console.log(event);
    }
    findCell(element) {
        if (element) {
            let cell = element;
            while (cell && !DomHandler.hasClass(cell, 'ui-editing-cell')) {
                cell = cell.parentElement;
            }
    
            return cell;
        }
        else {
            return null;
        }
    }
    findTopEditableColumn(cell: Element) {
        return cell.parentElement.previousElementSibling && cell.parentElement.previousElementSibling.children[cell['cellIndex']]
    }
    findBottomEditableColumn(cell: Element) {
        return cell.parentElement.nextElementSibling && cell.parentElement.nextElementSibling.children[cell['cellIndex']]
    }
    findNextEditableColumn(cell: Element) {
        let nextCell = cell.nextElementSibling;
        debugger;
        if (!nextCell) {
            let nextRow = cell.parentElement.nextElementSibling;
            if (nextRow) {
                nextCell = nextRow.firstElementChild;
            }
        }
      
        if (nextCell) {
            if (DomHandler.hasClass(nextCell, 'ui-editable-column'))
                return nextCell;
            else
                return this.findNextEditableColumn(nextCell);
        }
        else {
            return null;
        }
    }
    findPreviousEditableColumn(cell: Element) {
        let prevCell = cell.previousElementSibling;
    
        if (!prevCell) {
            let previousRow = cell.parentElement.previousElementSibling;
            if (previousRow) {
                prevCell = previousRow.lastElementChild;
            }
        }
    
        if (prevCell) {
            if (DomHandler.hasClass(prevCell, 'ui-editable-column'))
                return prevCell;
            else
                return this.findPreviousEditableColumn(prevCell);
        }
        else {
            return null;
        }
    }

    @HostListener('keydown', ['$event'])onKeydownHandler(event : KeyboardEvent) {
        // left
        if (event.keyCode == 37) {
            let currentCell = this.findCell(event.target);
            
            let targetCell = this.findPreviousEditableColumn(currentCell);
            if (targetCell) {
                DomHandler.invokeElementMethod(event.target, 'blur');
                DomHandler.invokeElementMethod(targetCell, 'click');
            }
            event.preventDefault();
        }
        // right
        if (event.keyCode == 39) {
            let currentCell = this.findCell(event.target);
            let targetCell = this.findNextEditableColumn(currentCell);
            if (targetCell) {
                DomHandler.invokeElementMethod(event.target, 'blur');
                DomHandler.invokeElementMethod(targetCell, 'click');
            }
            event.preventDefault();
        }
        // up
        if (event.keyCode == 38) {
            let currentCell = this.findCell(event.target);
            
            let targetCell = this.findTopEditableColumn(currentCell);
            if(targetCell) {
                DomHandler.invokeElementMethod(event.target, 'blur');
                DomHandler.invokeElementMethod(targetCell, 'click');
            }
            event.preventDefault();
        }
        // bottom
        if (event.keyCode == 40) {
            let currentCell = this.findCell(event.target);
            let targetCell = this.findBottomEditableColumn(currentCell);
            if(targetCell) {
                DomHandler.invokeElementMethod(event.target, 'blur');
                DomHandler.invokeElementMethod(targetCell, 'click');
            }
            event.preventDefault();
        }
        console.log(event.keyCode);
    }
        
}