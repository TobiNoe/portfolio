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
      name: "D. Mages",
      position: "DA Student",
      reference: "Tobias ist ein inspirierender Kommilitone bei der DA. Seine motivierende Art steckt einen an und reißt einen mit sich.Dazu kommt noch die Eigenschaft das Interesse zu entwickeln, sich mit Problemen jenseits seines Tellerrands zu beschäftigen."
    },
    {
      name: "M.Nölle",
      position: "Team Partner",
      reference: "Michael really kept the team together with his great organization and clear communication. We wouldn't have got this far without his commitment. Michael really kept the team together with his great organization and clear communication. We wouldn't have got this far without his commitment."
    },
    {
      name: "S. Stuber",
      position: "DA Student",
      reference: "Tobias habe ich während der Weiterbildung zum Fullstack-Entwickler kennengelernt. Seine Leidenschaft und seine offene Art haben mich sehr begeistert, und daraus entwickelte sich ein regelmäßiger Austausch. Für Tobias gibt es kein Hindernis, sondern die Frage: Wie gehen wir es an, um eine Lösung zu entwickeln? Kurz gesagt – ein smarter Typ, den man gerne um sich hat."
    }
  ];

  myProjects = [
    {
      img: "./../../../../../assets/img/portfolio/project.png",
      link: "https://pokedex.tobias-noelle.de/",
      gitHubLink: "https://github.com/TobiNoe/pokedex",
      projectName: "Pokedex ",
      headline: "Javascript | CSS | HTML",
      description: "Pokedex rules Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories."
    },
    {
      img: "./../../../../../assets/img/portfolio/project.png",
      link: "https://elpolloloco.tobias-noelle.de/",
      gitHubLink: "https://github.com/TobiNoe/PolloLoco",
      projectName: "El Pollo Loco",
      headline: "Javascript | CSS | HTML",
      description: "OOP Game programming Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories."
    },
    {
      img: "./../../../../../assets/img/portfolio/project.png",
      link: "https://join.tobias-noelle.de/",
      gitHubLink: "https://github.com/TobiNoe/Join-Portfolio",
      projectName: "Join",
      headline: "Javascript | Firebase | CSS | HTML",
      description: "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories."
    }
  ]

  navbarImg = [
    "./../../../../../assets/img/navbar/burger_1.png",
    "./../../../../../assets/img/navbar/burger_2.png",
    "./../../../../../assets/img/navbar/burger_3.png",
    "./../../../../../assets/img/navbar/burger_4.png",
    "./../../../../../assets/img/navbar/burger_5.png"
  ];

  constructor() { }
}
