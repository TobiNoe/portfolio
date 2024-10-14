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
      name: "O. Huber",
      position: "Team Partner",
      reference: "Tobias erledigt seine Aufgaben stets zuverlässig, kommuniziert klar und effektiv im Team und erarbeitet durchdachte Lösungen. Seine motivierende Art steckt andere an und sorgt für eine positive Arbeitsatmosphäre."
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
      description: "" /* to input into de.json ans en.json */
    },
    {
      img: "./../../../../../assets/img/portfolio/project.png",
      link: "https://elpolloloco.tobias-noelle.de/",
      gitHubLink: "https://github.com/TobiNoe/PolloLoco",
      projectName: "El Pollo Loco",
      headline: "Javascript | CSS | HTML",
      description: "" /* to input into de.json ans en.json */
    },
    {
      img: "./../../../../../assets/img/portfolio/project.png",
      link: "https://join.tobias-noelle.de/",
      gitHubLink: "https://github.com/TobiNoe/Join-Portfolio",
      projectName: "Join",
      headline: "Javascript | Firebase | CSS | HTML",
      description: "" /* to input into de.json ans en.json */
    }
  ]

  navbarImg = [
    "./../../../../../assets/img/navbar/burger_1.png",
    "./../../../../../assets/img/navbar/burger_2.png",
    "./../../../../../assets/img/navbar/burger_3.png",
    "./../../../../../assets/img/navbar/burger_4.png",
    "./../../../../../assets/img/navbar/burger_5.png"
  ];

  scrollToFragment(fragment: string): void {
    setTimeout(() => {
      const element = document.querySelector(fragment);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 25);
  }

  scrollTop() {
    setTimeout(() => {
      window.scroll({ top: 0 })
    }, 50);
  }

  constructor() { };
}
