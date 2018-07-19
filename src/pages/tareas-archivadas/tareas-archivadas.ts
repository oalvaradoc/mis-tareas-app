import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TareaProvider } from '../../providers/tarea/tarea';

/**
 * Generated class for the TareasArchivadasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-tareas-archivadas',
  templateUrl: 'tareas-archivadas.html',
})
export class TareasArchivadasPage {
  tareasArchivadas = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private sevicioTareas :TareaProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TareasArchivadasPage');
    this.tareasArchivadas = this.sevicioTareas.obtenerTareasArchivadas();
  }

}
