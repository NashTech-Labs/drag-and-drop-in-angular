import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  technologies : any[] = [
    'Tech 1 - Angular',
    'Tech 2 - React',
    'Tech 3 - Vue',
    'Tech 4 - Javascript',
    'Tech 5 - Typescript',
    'Tech 6 - Java',
    'Tech 7 - Scala',
    'Tech 8 - Rust',
    'Tech 9 - Devops',
    'Tech 10 - Node JS',
  ];

  constructor() { }

  ngOnInit(): void {
  }

  dragItem(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.technologies, event.previousIndex, event.currentIndex);
    /*moveItemInArray moves an item in array from the previous index to the current index 
    and takes the first parameter as the array */
  }

}
