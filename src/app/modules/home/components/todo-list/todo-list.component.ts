import { TaskList } from './../../model/task-list';
import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements DoCheck {
  ngDoCheck(): void {

    this.SetLocalStorage();
  }
  public taskList: Array<TaskList> = JSON.parse(localStorage.getItem("list") || '[]');

  public addTaskItem(event: TaskList) {
    console.log(event)
    this.taskList.push(event);
  }

  public deleteItemTaskList(event: number) {
    this.taskList.splice(event, 1);
  }

  public deleteAllTaskList() {
    const confirm = window.confirm("Você deseja deletar tudo?");
    if (confirm) {
      this.taskList = [];
    }
  }



  public ValidationInput(event: string, index: number) {
    if (!event.length) {
      const confirm = window.confirm("Task esta vazia, deseja deletar?");
      if (confirm) {
        this.deleteItemTaskList(index);
      }
    }
  }
  public SetLocalStorage() {
    if (this.taskList) {
      this.taskList.sort((first, last) => Number(first.checked) - Number(last.checked));
      localStorage.setItem("list", JSON.stringify(this.taskList));
    }
  }
}
