import {Component, OnInit} from '@angular/core';
import {Card} from '../../shared/interfaces';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  public studentData: Card[] = [];
  public teacherData: Card[] = [];

  constructor() {
    this.studentData = this.getStudentData();
    this.teacherData = this.getTeacherData();
  }

  ngOnInit(): void {
  }

  private getStudentData(): Card[] {
    let studentCard: Card[] = [];
    studentCard = [];
    studentCard.push(
      {
        cardTitle: 'Anique',
        cardCount: 1,
        cardType: 'English',
        cardText: 'Great at English. Always does better in the class. Advance level of knowledge.'
      }
    );
    studentCard.push(
      {
        cardTitle: 'Anita',
        cardCount: 2,
        cardType: 'Math',
        cardText: 'Great at Math. Doing great and try to be super in math. She is currently trying to be superior.'
      }
    );
    studentCard.push(
      {
        cardTitle: 'Rosemary',
        cardCount: 1,
        cardType: 'Science',
        cardText: 'Science? She always likes practical. She is collecting some items from great desert of California.'
      }
    );
    return studentCard;
  }

  private getTeacherData(): Card[] {
    let teacherCard: Card[] = [];
    teacherCard = [];
    teacherCard.push(
      {
        cardTitle: 'Sayed',
        cardCount: 5,
        cardType: 'English',
        cardText: 'A great teacher to teach English. He is keeping student busy as much as possible. Sometimes students fail to complete his homework.'
      }
    );
    teacherCard.push(
      {
        cardTitle: 'Joyel',
        cardCount: 2,
        cardType: 'Math',
        cardText: 'All students like him. Some students does not do their homework at all. But the teacher is above of them. He is happy for doing nothing'
      }
    );
    teacherCard.push(
      {
        cardTitle: 'Chirs',
        cardCount: 6,
        cardType: 'Science',
        cardText: 'He is very active for his class. He always try to show something to his student but sometimes it is not possible for him to do that.'
      }
    );
    return teacherCard;
  }
}
