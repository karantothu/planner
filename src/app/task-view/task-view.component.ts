import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.css']
})
export class TaskViewComponent implements OnInit {

  constructor( private myservice: DataService) { }

  taskContent: string;

  @Input() props: {taskList:any; currentDay: any};
  


  ngOnInit(): void {
    //this.tasksList = this.myservice.getTasks();
  }

  addTaskTolist(){
    this.myservice.addTask( this.taskContent, this.props.currentDay);
  }

  deleteTask(id){
    console.log(id)
    this.myservice.deleteTask(this.props.currentDay, id);
  }

  setTaskStatus(id, status){
    this.myservice.setTaskStatus(this.props.currentDay, id, status);
  }

}
