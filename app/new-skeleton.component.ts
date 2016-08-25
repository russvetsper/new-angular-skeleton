import { Component,EventEmitter } from 'angular2/core';
import { Skeleton } from './skeleton.model'

@Component({
  selector: 'add-skeleton',
  outputs: ['onSubmitNewSkeleton'],
  templateUrl: '/app/new-skeleton.component.html'
})

export class addSkeletonComponent{
  public onSubmitNewSkeleton: EventEmitter<string[]>
  constructor(){
    this.onSubmitNewSkeleton = new EventEmitter();
  }

  addSkeleton(name:HTMLInputElement,description:HTMLInputElement,weight:HTMLInputElement){
      var newSkeletonArray: string[] = [name.value, description.value, weight.value];
      this.onSubmitNewSkeleton.emit(newSkeletonArray);
      name.value = "";
      description.value = "";
      weight.value =  "";

  }
}
