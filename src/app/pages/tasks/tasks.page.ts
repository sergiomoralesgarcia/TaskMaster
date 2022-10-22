import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, NavController } from '@ionic/angular';
import { Task } from 'src/app/models/task.model';
import { AssignmentService } from 'src/app/services/assign.service';
import { TasksService } from 'src/app/services/tasks.service';
import { TaskDetailComponent } from '../task-detail/task-detail.component';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.scss'],
})
export class TasksPage implements OnInit {

    constructor(private user:TasksService,
      private alert:AlertController,
      private modal: ModalController,
      private taskService:TasksService,
      private assignmentsSvc:AssignmentService) {}
  
    ngOnInit() {
    }
  
    getTask(){ 
      return this.user.getTask(); 
    }
  
    async presentTaskForm(task:Task){
      const modal = await this.modal.create ({
        component:TaskDetailComponent,
        componentProps:{
          task:task
        }
      });
      modal.present();
      modal.onDidDismiss().then(result=>{
        if(result && result.data){
          switch(result.data.mode){
            case 'New':
              this.taskService.addTask(result.data.task);
              break;
            case 'Edit':
              this.taskService.updateTask(result.data.task);
              break;
            default:
          }
        }
      });
    }
    
    onNewTask(){
      this.presentTaskForm(null);
      
    }
  
    onEditTask(task){
      this.presentTaskForm(task);
    }
  
    async onDeleteAlert(task){
      const alert = await this.alert.create({
        header: '¿Está seguro de que desear borrar a la tarea?',
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            handler: () => {
              console.log("Operacion cancelada");
            },
          },
          {
            text: 'Borrar',
            role: 'confirm',
            handler: () => {
              this.taskService.deleteTaskById(task.id);
            },
          },
        ],
      });
      await alert.present();
  
    }

    async onTaskExistsAlert(task){
      const alert = await this.alert.create({
        header: 'Error',
        message: 'No es posible borrar la tarea porque está asignada a una persona',
        buttons: [
          {
            text: 'Cerrar',
            role: 'close',
            handler: () => {
              
            },
          },
        ],
      });
  
      await alert.present();
  
      const { role } = await alert.onDidDismiss();
    }
    onDeleteTask(task){
      if(!this.assignmentsSvc.getAssignsByTaskId(task.id).length)
        this.onDeleteAlert(task);
      else
        this.onTaskExistsAlert(task);
    }
  }
  
