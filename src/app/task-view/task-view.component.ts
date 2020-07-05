import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.css']
})
export class TaskViewComponent implements OnInit {

  constructor() { }

  currentDay: number =0;

  tasksList: any = [{id:1, title: 'TASK NAME', status:true}]

  ngOnInit(): void {
    console.log(this.tasksList)
  }

}
