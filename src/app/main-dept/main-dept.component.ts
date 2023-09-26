import { Component } from '@angular/core';

@Component({
  selector: 'app-main-dept',
  templateUrl: './main-dept.component.html',
  styleUrls: ['./main-dept.component.scss']
})
export class MainDeptComponent {
  public displayText = '';

  public updateText() {
    this.displayText = 'Button Clicked'
  }
}
