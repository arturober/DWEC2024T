import { JsonPipe } from '@angular/common';
import { Component, DestroyRef, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import {
  CapacitorSQLite,
  SQLiteConnection,
  SQLiteDBConnection,
} from '@capacitor-community/sqlite';
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonList,
  IonMenuButton,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import { Person } from './person';

@Component({
  selector: 'app-sqlite',
  templateUrl: './sqlite.page.html',
  styleUrls: ['./sqlite.page.scss'],
  standalone: true,
  imports: [
    FormsModule,
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonInput,
    IonItem,
    IonMenuButton,
    IonTitle,
    IonToolbar,
    IonList,
    IonIcon,
    JsonPipe
  ],
})
export class SqlitePage {
  sqlite!: SQLiteConnection;
  db!: SQLiteDBConnection;
  open = signal(false);
  people = signal<Person[]>([]);
  person: Person = {
    name: '',
    age: 0,
  };

  #destroyRef = inject(DestroyRef);

  constructor() {
    this.connect();
    this.#destroyRef.onDestroy(async () => {
      if (this.open()) {
        console.log('Closing connection');
        await this.sqlite.closeConnection('testsqlite', false);
      }
    });
  }

  async connect() {
    this.sqlite = new SQLiteConnection(CapacitorSQLite);
    this.db = await this.sqlite.createConnection(
      'testsqlite',
      false,
      'no-encryption',
      1,
      false
    );
    await this.db.open();
    this.open.set(true);

    await this.db.execute(`CREATE TABLE IF NOT EXISTS person (
      id integer primary key,
      name text not null,
      age integer not null)`);

    const result = await this.db.query('SELECT * FROM person');
    this.people.set(result.values!);
  }

  async add(personForm: NgForm) {
    if (!this.open) {
      return;
    }

    const addRes = await this.db.run(
      'INSERT INTO person (name, age) VALUES (?,?)',
      [this.person.name, this.person.age]
    );

    const idRes = await this.db.query('SELECT last_insert_rowid()');

    this.person.id = +Object.values<number>(idRes.values![0])[0];
    this.people.update(people => people.concat(this.person));
    this.person = { name: '', age: 0 };
    personForm.resetForm(); // Resets validation styles
  }

  async remove(
    person: Person,
    index: number
  ) {
    if (!this.open) {
      return;
    }

    const delRes = await this.db.run('DELETE FROM person WHERE id = ?', [
      person.id,
    ]);

    if (delRes.changes!.changes! > 0) {
      this.people.update(people => people.filter((p,i) => i !== index));
    }
  }
}
