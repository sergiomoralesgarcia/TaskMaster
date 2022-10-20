import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private _task: Task[] = [
    {
      id: 0,
      name: 'Diego Rodriguez',
      description: 'Cordobeh',
      timeInSeconds: 20,
      image: ''
    },
    {
      id: 1,
      name: 'Alejandro Cueto',
      description: 'Friki',
      timeInSeconds: 19,
      image: ''
    },
    {
      id: 2,
      name: 'Alberto Parra',
      description: 'Parringson',
      timeInSeconds: 18,
      image: ''
    },
    {
      id: 3,
      name: 'Álvaro Linero',
      description: 'ElRey',
      timeInSeconds: 19,
      image: ''
    },
    {
      id: 4,
      name: 'David Antúnez',
      description: 'Fernando Alonso',
      timeInSeconds: 19,
      image: ''
    }
  ]
  id: number = this._task.length + 1;
  constructor() { }

  getTask() {
    return this._task;
  }

  getTaskById(id: number) {
    return this._task.find(p => p.id == id);
  }

  deleteTaskById(id: number) {
    this._task = this._task.filter(p => p.id != id);
  }

  addTask(task: Task) {
    task.id = this.id++;
    this._task.push(task);
  }

  updateTask(task: Task) {
    var _task = this._task.find(p => p.id == task.id);
    if (_task) {
      _task.name = task.name;
      _task.description = task.description;
      _task.timeInSeconds = task.timeInSeconds;
      _task.image = task.image;
    }

  }
}
