import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase) {
  }

  public get allVets(): any {
    return this.af.list('/vets');
  }

  public get allSwiftBoats(): any {
    return this.af.list('/swift-boats');
  }
}
