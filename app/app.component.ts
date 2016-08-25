import { Component } from 'angular2/core';
import { Skeleton } from './skeleton.model';
import { SkeletonListComponent } from './skeleton-list.component';
import { addSkeletonComponent } from './new-skeleton.component'

@Component({
  selector: 'my-app',
  directives:[SkeletonListComponent, addSkeletonComponent],
  template: `
  <div class="container">
    <h1>Skeleton selection</h1>
    <h2>Add New skeleton</h2>
    <skeleton-list [skeletonList]="skeleton"></skeleton-list>
    <add-skeleton (onSubmitNewSkeleton)="createSkeleton($event)"><add-skeleton>
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
  var tempweight : number = parseInt(SkeletonDetail[2]);

  this.skeleton.push(
    new Skeleton(SkeletonDetail[0], SkeletonDetail[1], tempweight)
  );
 }
}
