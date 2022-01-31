import { DatePipe, getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { F_Artist } from 'src/app/forms/artist.form';
import { Artist } from 'src/app/models/artist.model';
import { ArtistSharedService } from 'src/app/services/handlers/artist-shared.service';

@Component({
  selector: 'app-artists-form',
  templateUrl: './artists-form.component.html',
  styleUrls: ['./artists-form.component.scss'],
})

export class ArtistsFormComponent implements OnInit {

  artForm: FormGroup = new FormGroup(F_Artist);
  isAnUpdate: boolean = false;
  msg!: string;
  slctdArtist: Artist | null;

  constructor(private sharedServ: ArtistSharedService, private datePipe: DatePipe) {
    this.slctdArtist = null;
  }

  ngOnInit(): void {
    this.sharedServ.currentSlctdArtist.subscribe(
      artist => {
        if (artist) {
          this.slctdArtist = artist;
          this.isAnUpdate = true;
          this.artForm.setValue({
            idArtist: this.slctdArtist.idArtist,
            name: this.slctdArtist.name,
            firstName: this.slctdArtist.firstName,
            birthDate: this.datePipe.transform(this.slctdArtist.birthDate, 'yyyy-MM-dd')
          });

        }
        else {
          this.slctdArtist = null;
          this.isAnUpdate = false;
          this.artForm.reset();
        }
      }
    );
  }

  onSubmit() {
    if (this.artForm.invalid) {
      this.msg = "invalid form sent";
      return;
    }
    else {
      if (this.isAnUpdate)
        this.sharedServ.updateArtist(this.artForm);
      else {
        this.sharedServ.addNewArtist(this.artForm);
        this.artForm.reset();
      }  
    }
  }

  onCancelUpdate() {
    this.sharedServ.deleteArtistToUpdate();
  }
}
