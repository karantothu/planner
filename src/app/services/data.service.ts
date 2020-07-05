import { Injectable, Input } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  tasks = { 
    1:[
      { id:'vInOd', title:'Angular Assignment', status: true}
    ]
  };

  currentDay: any =0;

  constructor() { }

  getTasks(){
    if(this.currentDay ==0){
      return [];
    }
    return this.tasks[this.currentDay];
  }

  setCurrentDay(day){
    this.currentDay = day;
  }

  getCurrentDay(){
    return this.currentDay;
  }

  addDayToTasks(day){
    this.tasks[day]=[];
    //console.log(this.tasks)
  }

  addTask(content, day){
    var result             = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;

    for ( var i = 0; i < 5; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    this.tasks[day].push({id:result, title: content, status: false})
  }

  deleteTask(day, id){
    //console.log(day, id);
    this.tasks[day].forEach( (item, index) => {
      if(item.id === id) this.tasks[day].splice(index,1);
    });    
  }

  setTaskStatus(day, id, status){
    this.tasks[day].forEach( (item, index) => {
      if(item.id === id) this.tasks[day][index].status = !status;
    });
  }

}
