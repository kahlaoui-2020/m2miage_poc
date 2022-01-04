import { Component, OnInit } from '@angular/core';
import {EditSkillsService} from "../services/edit-skills.service";
import {FormControl} from "@angular/forms";
import {SearchEmployeeService} from "../services/search-employee.service";


class Skill {

  competence!: string;
  id_competence!: number;
  nb_experience!: number;
  niveau!: number;
  constructor(skill: any) {
    Object.assign(this, skill)
  }
}

class Certification {

  date_d!: string;
  date_f!: string;
  id_certification!: number
  score!: number;
  titule!: string;
  constructor(cert: any) {
    Object.assign(this, cert)
  }
}

class Employee {

  email!: string;
  nom!: string;
  num_tel!: string;
  prenom!: string;
  profil!: string;
  photo!: any;
  skills: Skill[] = [];
  certifications: Certification[] = [];
  constructor(empl: any) {
    Object.assign(this, empl)
  }
}

@Component({
  selector: 'app-find-employee',
  templateUrl: './find-employee.component.html',
  styleUrls: ['./find-employee.component.css']
})
export class FindEmployeeComponent implements OnInit {


  selectedCatCtr = new FormControl('');
  categories: any;
  skills: any;
  selectedSkillsCtr = new FormControl('');

  choices: any[] = [];

  employees: Employee[] = [];
  imageDefault = 'assets/images/profil.png';
  constructor(private editSkillsService: EditSkillsService,
              private searchEmplService: SearchEmployeeService) { }

  ngOnInit(): void {
    this.editSkillsService.Categories.subscribe((result: any) => {
      this.categories = result;
      this.selectedCatCtr.setValue(result[0].id_categorie)
      this.editSkillsService.getSkills(this.selectedCatCtr.value).subscribe((data) => {
        this.skills = data;
      })
    })
  }

  changeSkill() {
    this.editSkillsService.getSkills(this.selectedCatCtr.value).subscribe((data) => {
      this.skills = data;
    })
  }


  add() {
    let choicess= this.choices.map((select: any) => select.id_competence)

    this.selectedSkillsCtr.value.forEach((value:any) => {
      if(choicess.includes(value.id_competence)) {

      }else {
        this.choices.push(value)
      }
    })

  }


  reset() {
    this.selectedSkillsCtr.reset();
    this.choices = []
    this.employees = []


  }

  search() {

    this.employees = []
    let res: any;
    let employee!: Employee;


    let choicess= this.choices.map((select: any) => select.id_competence)
    this.searchEmplService.searchBySkills(choicess).subscribe((result: any) => {
      res = result.data
      console.log(res[0].profil)
      for(let res of result.data) {
        employee =  new Employee(JSON.parse(res.profil));
        console.log(employee)
        console.log(res.skills)
        for(let s of res.skills.split(";")) {
          let skill = new Skill(JSON.parse(s))
          employee.skills.push(skill)

        }
        for(let c of res.certifications.split(";")) {
          let certification = new Certification(JSON.parse(c))
          employee.certifications.push(certification)

        }
        this.employees.push(employee)
      }
     console.log(this.employees)




    })
  }
}


