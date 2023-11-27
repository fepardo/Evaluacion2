import { Component } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx'


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  pageName: String = "";
  userName: String = "";
  constructor(private sqlite: SQLite) {


    this.sqlite.create({
      name: 'data.db',
      location: 'default'
    })
      .then((db: SQLiteObject) => {
        //Lo ideal sería guardar esta instancia de SQLiteObject en una variables estática para utilizarla desde un servicio con un patrón singleton.
        db.executeSql('create table datosUsuario(id INTERGER PRIMARY KEY, name VARCHAR(32), pass VARCHAR(32), token VARCHAR(32))', [])
          .then(() => {console.log('Executed SQL se creo la talba :D ');
        })
          .catch(e => {console.log(e);
          });
      })
      .catch(e => console.log(e));


  }


}




