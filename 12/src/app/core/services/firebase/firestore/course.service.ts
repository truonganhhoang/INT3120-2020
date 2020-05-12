import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  constructor(private ngFireFirestore: AngularFirestore) {}

  somePopularCourses() {
    /**
     * TODO: need actual popular courses
     */
    return this.ngFireFirestore.collection('courses');
  }

  someTopRatedCourses() {
    /**
     * TODO: need actual top-rated courses
     */
    return this.ngFireFirestore.collection('courses');
  }
}
