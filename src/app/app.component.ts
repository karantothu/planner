import { Component, OnInit } from '@angular/core';
import { DataService }  from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor( private mysevice: DataService) {}

  title = 'Planner';
  opened: boolean = false;

  daysArray:any = [1];

  tasksList: any =[];

  myProps = { taskList:[], currentDay: 0};

  ngOnInit() {
    
  }  

  toggleSidebar() {
    this.opened = !this.opened;
  }

  getRandomColor() {
    var color = Math.floor(0x1000000 * Math.random()).toString(16);
    return '#' + ('000000' + color).slice(-6);
  }

  addDay() {
    const intDay = this.daysArray.length+1;
    this.daysArray.push(intDay);
    this.mysevice.addDayToTasks(intDay)
  }

  setDay(event, day){
    this.mysevice.setCurrentDay(day)
    this.myProps.currentDay= this.mysevice.getCurrentDay();
  }

  getTasks(){
    this.myProps.taskList = this.mysevice.getTasks();
    console.log(this.myProps.taskList)
  }
}
