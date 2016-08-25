import { Component } from 'angular2/core';
import { Skeleton } from './skeleton.model'

@Component({
  selector: 'my-app',
  directives:[],
  template: `
  <div class="container">
    <h1>Skeleton selection</h1>
    <h2>Add New skeleton</h2>
    <skeleton-list [skeletonList]="skeleton"></skeleton-list>
  </div>
  `
})

export class AppComponent {
public skeleton: Skeleton[];
  constructor() {
    this.skeleton = [
      new Skeleton("Russ", "Big skeleton", 200),
      new Skeleton("Yi", "Small skeleton", 100),
      new Skeleton("Rouz", "Big skeleton", 160)
    ];
  }
createSkeleton(SkeletonDetail:string[]):void{
  var Skeleton: number = parseInt(SkeletonDetail[2]);


 }
}
