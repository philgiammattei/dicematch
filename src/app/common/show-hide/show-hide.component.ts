import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-show-hide',
  templateUrl: './show-hide.component.html',
  styleUrls: ['./show-hide.component.css']
})
export class ShowHideComponent implements OnInit {
  isHidden: boolean;
  @Output() hiddenEvent = new EventEmitter<boolean>();

  constructor() {
    this.isHidden = true;
   }

  ngOnInit() {
  }

  toggleHidden() {
    this.isHidden = !this.isHidden;
    this.hiddenEvent.emit(this.isHidden);
  }

}
