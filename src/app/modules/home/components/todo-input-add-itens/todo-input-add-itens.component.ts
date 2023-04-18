import { TaskList } from './../../model/task-list';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.scss']
})
export class TodoInputAddItensComponent {
@Output() public EmitirItemTask = new EventEmitter();

public addItemTaskList:string = "";


public submitTaskList(){
  this.addItemTaskList = this.addItemTaskList.trim();
  if(this.addItemTaskList.length > 0){
    console.log(this.addItemTaskList);
    this.EmitirItemTask.emit({task:this.addItemTaskList, checked:false})
    this.addItemTaskList = "";
  }else{
    window.confirm("Você deve digitar um valor válido.")
  }
}
}
