import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

export interface Topic {
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class TopicService {
  constructor(private ngFireFirestore: AngularFirestore) {}

  allTopics() {
    return this.ngFireFirestore.collection<Topic>('topics');
  }
}
