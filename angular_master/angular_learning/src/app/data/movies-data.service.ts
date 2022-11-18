import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesDataService {

  constructor() { }

  data: any[] = [
    {
      id: 1,
      title: "Wrath of Man",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Exercitationem eos dolorem voluptas quasi veniam fugit,",
      tahunrilis: 2012,
      actor: [
        "Jrinx", "Jinx Patra", "Rina mamushi"
      ],
      img: "../../../assets/movie/wrath-of-man.jpeg"
    },
    {
      id: 2,
      title: "Rumble",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Exercitationem eos dolorem voluptas quasi veniam fugit,",
      tahunrilis: 2020,
      actor: [
        "Renshi yamaguchi", "june yellow", "blue mega"
      ],
      img: "../../../assets/movie/rumble.jfif"
    },
    {
      id: 3,
      title: "Army the Thieves",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Exercitationem eos dolorem voluptas quasi veniam fugit,",
      tahunrilis: 2015,
      actor: [
        "rina paliandro", "luffy one", "nammy two"
      ],
      img: "../../../assets/movie/army-the-thieves.jfif"
    },
    {
      id: 4,
      title: "Dune",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Exercitationem eos dolorem voluptas quasi veniam fugit,",
      tahunrilis: 2016,
      actor: [
        "Leo PARD", "aprilia jun", "august meri"
      ],
      img: "../../../assets/movie/dune.jfif"
    },
    {
      id: 5,
      title: "The Tomorrow War",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Exercitationem eos dolorem voluptas quasi veniam fugit,",
      tahunrilis: 2018,
      actor: [
        "pang hablo", "pablo escobar", "Levi Ackerman"
      ],
      img: "../../../assets/movie/the-tomorrow-war.jfif"
    },
    {
      id: 6,
      title: "Raging Fire",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Exercitationem eos dolorem voluptas quasi veniam fugit,",
      tahunrilis: 2017,
      actor: [
        "Eren Ackerman", "Lay Panca", "june yeger"
      ],
      img: "../../../assets/movie/raging-fire.jfif"
    },
  ]
}
