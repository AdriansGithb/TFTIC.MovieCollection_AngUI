import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Country } from 'src/app/models/country.model';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})

export class CountriesComponent implements OnInit {
  countriesList!: Country[] ;
  newCntryName : string = "";

  constructor(private cntryServ : CountriesService ) {
  }

  ngOnInit(): void {
  this.loadCountries();
  }

  loadCountries(){
    this.cntryServ.getAll().subscribe({
      next : (countriesList  => this.countriesList = countriesList),
      error : (e) => console.error(e),
      complete : () => {},
    });
  }

  onSubmitAction(){
    this.cntryServ.addNewCountry(this.newCntryName).subscribe({
      next : () => {
        alert(`${this.newCntryName} enregistré`);
        this.newCntryName = "";
        this.loadCountries();
      },
      error : (e) => console.error(e),
      complete: () => {},
    });
  }

  onDeleteAction(id : number){
    this.cntryServ.deleteCountry(id).subscribe({
      next : () => {
        alert(`Pays supprimé`);
        this.loadCountries();
      },
      error : (e) => console.error(e),
      complete: () => {},
    });
    }

    onUpdateAction(id : number){
      let input = <HTMLInputElement>document.getElementById(id.toString());
      let update = input.value;
      this.cntryServ.updateCountry({idCountry : id, name : update}).subscribe({
        next : () => {
          alert(`${update} mis à jour`);
          this.loadCountries();
        },
        error : (e) => console.error(e),
        complete: () => {},
      });
  }

}
