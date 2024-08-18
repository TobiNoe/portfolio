import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  mySkills = [
    {
      name: "Angular",
      img: "./../../../../assets/img/mySkills/angular.png"
    },
    {
      name: "TypeScript",
      img: "./../../../../assets/img/mySkills/typescript.png"
    }
  ]

  constructor() { }
}
