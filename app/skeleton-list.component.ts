import { Component } from 'angular2/core';
import { Skeleton } from './skeleton.model';

@Component({
  selector: 'skeleton-list',
  inputs: ['skeletonList'],
  template: `
  <div *ngFor="#currentSkeleton of skeletonList" (click)="SkeletonClicked(currentSkeleton)">
    <h3>{{currentSkeleton.name}} | {{currentSkeleton.description}} | {{currentSkeleton.weight}}</h3>
    <form *ngIf="currentSkeleton === selectedSkeleton">
      <input [(ngModel)]="currentSkeleton.name">
      <input [(ngModel)]="currentSkeleton.description">
      <input [(ngModel)]="currentSkeleton.weight">
    </form>
  </div>
  `
})
export class SkeletonListComponent{
  public skeletonList:Skeleton[];
  public selectedSkeleton:Skeleton;

  SkeletonClicked(currentSkeleton:Skeleton):void{
    this.selectedSkeleton=currentSkeleton;
  }

}
