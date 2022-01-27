import { Component, OnInit } from '@angular/core';
import { Audience } from 'src/app/models/audience.model';
import { AudiencesService } from 'src/app/services/audiences.service';

@Component({
  templateUrl: './audiences.component.html',
  styleUrls: ['./audiences.component.scss']
})
export class AudiencesComponent implements OnInit {
  audiencesList!: Audience[] ;
  newAudienceLabel : string = "";

  constructor(private audServ : AudiencesService ) {
  }

  ngOnInit(): void {
  this.loadAudiences();
  }

  loadAudiences(){
    this.audServ.getAll().subscribe({
      next : (audiencesList  => this.audiencesList = audiencesList),
      error : (e) => console.error(e),
      complete : () => {},
    });
  }

  onSubmitAction(){
    this.audServ.addNewAudience(this.newAudienceLabel).subscribe({
      next : () => {
        alert(`${this.newAudienceLabel} enregistré`);
        this.newAudienceLabel = "";
        this.loadAudiences();
      },
      error : (e) => console.error(e),
      complete: () => {},
    });
  }

  onDeleteAction(id : number){
    this.audServ.deleteAudience(id).subscribe({
      next : () => {
        alert(`Audience supprimée`);
        this.loadAudiences();
      },
      error : (e) => console.error(e),
      complete: () => {},
    });
    }

    onUpdateAction(id : number){
      let input = <HTMLInputElement>document.getElementById(id.toString());
      let update = input.value;
      this.audServ.updateAudience({idAudience : id, label : update}).subscribe({
        next : () => {
          alert(`${update} mis à jour`);
          this.loadAudiences();
        },
        error : (e) => console.error(e),
        complete: () => {},
      });
  }

}
