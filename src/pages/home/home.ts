import { Component } from '@angular/core';
import { NavController, AlertController, reorderArray } from 'ionic-angular';
import { TareaProvider } from '../../providers/tarea/tarea';
import { TareasArchivadasPage } from '../tareas-archivadas/tareas-archivadas';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tareas =[];
  habilitarOrdenamiento=true;
  paginaTareasArchivadas= TareasArchivadasPage;
  constructor(
    public navCtrl: NavController,
    private alertController:AlertController,
    private servicioTareas:TareaProvider) {
    this.tareas = this.servicioTareas.obtenerTareas();
  }

  agregarTarea()
  {
    const alerta = this.alertController.create({
      title:'Agregar Tarea',
      message:'Ingrese la información necesaria',
      inputs:[{
        name:'tareaInput',placeholder:'ingrese la tarea..'
      }],
      buttons:[{
        text:'Cancelar'
      },
      {
        text:'Agregar',
        handler: datos => {
          console.log(datos);
          this.servicioTareas.agregarTarea(datos.tareaInput);
          //this.tareas.push(datos.tareaInput);
          //this.agregarTarea(datos.tareaInput);
          console.log(this.tareas);
        }
      }
    ]
    });
    alerta.present();
  }

  
  toggleOrdenamiento()
  {
    this.habilitarOrdenamiento = !this.habilitarOrdenamiento;
  }

  ordenarArray(evento)
  {
    reorderArray(this.tareas,evento)
    console.log(evento);
  }

  archivarTarea(indiceTarea:number)
  {
    console.log(indiceTarea);
    this.servicioTareas.archivarTarea(indiceTarea);
  }

  editarTarea(indiceTarea:number)
  {
    let alerta = this.alertController.create({
      title:"Editar tarea",
      message:"Por favor ingrese la nueva tarea",
      inputs:[{
        name:"editarTareaInput",
        value:this.tareas[indiceTarea]
      }],
      buttons:[{
        text:"Cancelar"
      },
      {
        text:"Listo",
        handler:data => {
          this.servicioTareas.editarTarea(indiceTarea,data.editarTareaInput)
        }
      }
    ]
    });
    alerta.present();
  }

}
