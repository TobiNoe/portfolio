import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  mySkills = [
    {
      name: "Angular",
      img: "./../../../../assets/img/mySkills/angular.png",
    },
    {
      name: "TypeScript",
      img: "./../../../../assets/img/mySkills/typescript.png"
    },
    {
      name: "JavaScript",
      img: "./../../../../assets/img/mySkills/javascript.png"
    },
    {
      name: "HTML",
      img: "./../../../../assets/img/mySkills/html.png"
    },
    {
      name: "CSS",
      img: "./../../../../assets/img/mySkills/css.png"
    },
    {
      name: "Firebase",
      img: "./../../../../assets/img/mySkills/firebase.png"
    },
    {
      name: "Git",
      img: "./../../../../assets/img/mySkills/git.png"
    },
    {
      name: "Scrum",
      img: "./../../../../assets/img/mySkills/scrum.png"
    },
    {
      name: "Rest-Api",
      img: "./../../../../assets/img/mySkills/rest_api.png"
    },
    {
      name: "Material Design",
      img: "./../../../../assets/img/mySkills/material_design.png"
    }
  ];

  myReferences = [
    {
      name: "T.Nölle",
      position: "Team Partner",
      reference: "Michael really kept the team together with his great organization and clear communication. We wouldn't have got this far without his commitment."
    },
    {
      name: "M.Nölle",
      position: "Team Partner",
      reference: "Michael really kept the team together with his great organization and clear communication. We wouldn't have got this far without his commitment. Michael really kept the team together with his great organization and clear communication. We wouldn't have got this far without his commitment."
    },
    {
      name: "T.Nölle",
      position: "Team Partner",
      reference: "Michael really kept the team together with his great organization and clear communication. We wouldn't have got this far without his commitment."
    }
  ];

  constructor() { }
}
