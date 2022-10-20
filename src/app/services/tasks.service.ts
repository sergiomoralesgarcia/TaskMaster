import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private _task: Task[] = [
    {
      id: 0,
      name: 'Lavar platos',
      description: 'Lava todos los platos sucios de la cocina',
      timeInSeconds: 20000,
      image: ''
    },
    {
      id: 1,
      name: 'Ordenar la habitación',
      description: 'Limpia y recoje tu cuarto, dejandolo ordenado',
      timeInSeconds: 40000,
      image: ''
    },
    {
      id: 2,
      name: 'Hacer los deberes',
      description: 'Haz los deberes que tengas pendientes antes de que acabe el dia',
      timeInSeconds: 30000,
      image: ''
    },
    {
      id: 3,
      name: 'Ir al gimnasio',
      description: 'Ve al gym a hacer ejercicio y despejarte un poco',
      timeInSeconds: 12000,
      image: ''
    },
    {
      id: 4,
      name: 'Jugar al lol',
      description: 'Gana una ranked en un torneo contra Werlyb',
      timeInSeconds: 50000,
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
