import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  // @Input() childTitle: string = ''
  @Input()
  name: string = ""

  @Output()
  nameChange = new EventEmitter<string>
  nameChanges(){
    this.nameChange.emit(this.name)
  }

}
