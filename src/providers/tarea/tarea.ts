import { Injectable } from '@angular/core';

@Injectable()
export class TareaProvider {

  tareas = [];
  tareasArchivadas = [];
  //habilitarOrdenamiento = false;
  constructor() {
    console.log('Hello TareaProvider Provider');
  }

  obtenerTareas() {
    return this.tareas;
  }

  agregarTarea(tarea) {
    this.tareas.push(tarea);
  }

  archivarTarea(indiceTarea) {
    let tarea = this.tareas[indiceTarea];
    this.tareasArchivadas.push(tarea);
    this.tareas.splice(indiceTarea, 1);
  }

  obtenerTareasArchivadas() {
    return this.tareasArchivadas;
  }

  editarTarea(indiceTarea, nuevaTarea) {
    this.tareas[indiceTarea] = nuevaTarea;
  }


}
