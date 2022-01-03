
export class Employee {
  id_utilisateur!: number;
  nom!: string;
  prenom!: string;
  url_photo!: any;
  email!: string;
  num_tel!: string;
  profil!: string;

  constructor(object: any) {
    Object.assign(this, object)
  }




}
