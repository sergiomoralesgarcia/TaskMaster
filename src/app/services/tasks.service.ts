import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private _task: Task[] = [
    {
      id: 1,
      name: 'Lavar los baños',
      description: 'Lava los baños del intituto NUEVO, ten en cuenta que el baño de caballeros te llevará más tiempo',
      timeInSeconds: 20000,
      image: "https://drive.google.com/uc?export=view&id=1ac5Xoo6-LXMykb438PtuRPnxcJGgyhkm"
    },
    {
      id: 2,
      name: 'Desarrolla Overwatch 3',
      description: 'David Antúnez quiere jugar al Overwatch 3, solo tienes que copiar y pegar la segunda entrega',
      timeInSeconds: 40000,
      image: "https://drive.google.com/uc?export=view&id=1IrLSTWK1jWfCi_gfr5n8pEMXKhhGAVc9"
    },
    {
      id: 3,
      name: 'Ir al gym',
      description: 'Ve al gimnasio a entrenar que el cuerpo necesita  que te muevas un rato',
      timeInSeconds: 30000,
      image: "https://drive.google.com/uc?export=view&id=1_dCCErHYqm2kyJrwNukHvQiT_YojXSPH"
    },
    {
      id: 4,
      name: 'Hacer churros',
      description: 'Los estudiantes de 2º DAM acaban de salir de clase y están ansiosos de comerse uno churros',
      timeInSeconds: 12000,
      image: "https://drive.google.com/uc?export=view&id=1zcXUwvvxmwjSmffVCJ35ngBpPseUojGc"
    },
    {
      id: 5,
      name: 'Haz de Uber',
      description: 'Un amigo mio necesita urgentemente que le lleves a un sitio importante, no le falles, le dejaron tirado el otro día',
      timeInSeconds: 50000,
      image: "https://drive.google.com/uc?export=view&id=1ikR-01aVn3ICRaJgXedSqdjDm0wNDoZG"
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
