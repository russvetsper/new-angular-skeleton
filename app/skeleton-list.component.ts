import { Component } from 'angular2/core';
import { Skeleton } from './skeleton.model'

@Component({
  selector: 'skeleton-list',
  inputs: ['skeletonList'],
  template: `

  <div *ngfor="#currentSkeleton of skeletonList | weight:selectedWeight" (clcik)="SkeletonClicked(currentSkeleton)"
    [class.selected]="currentSkeleton === selectedSkeleton">
    <h3>{{currentSkeleton.name}} | {{currentSkeleton. description}} | {{currentSkeleton.weight}}<h3>
    <form *ngIf="currentSkeleton === selectedSkeleton">
    <input [(ngModel)]="currentSkeleton.name">
    <input [(ngModel)]="currentSkeleton.description">
    <input [(ngModel)]="currentSkeleton.weight" type="number"  aria-label="amount">
    </form>
  </div>
    `
})

export class SkeletonListComponent{
  public SkeletonList:Skeleton[];
  public selectedSkeleton:Skeleton;

}
