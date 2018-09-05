import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { TareaProvider } from '../../providers/tarea/tarea';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tareas = [];
  constructor(
    public navCtrl: NavController,
    private alerta: AlertController,
    private servicioTarea: TareaProvider
  ) {
this.tareas=servicioTarea.obtenerTarea();
  }
  agregarTarea() {
    let alert = this.alerta.create({
      title: "agragar tarea",
      inputs: [{
        name: "textoTarea",
        type: "text"
      }],
      buttons: [
        {
          text: "Cancelar"
        },
        {
          text: "Agregar",
          handler: (datos) => {
            console.log(datos);
            //this.tareas.push(datos.textoTarea);
            this.servicioTarea.agregarTarea(datos.textoTarea);
          }
        }
      ]
    })
    alert.present();
    //this.tareas.push("nueva tarea");
    //console.log(this.tareas);
  }
}
