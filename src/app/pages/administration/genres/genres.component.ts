import { Component, OnInit } from '@angular/core';
import { Genre } from 'src/app/models/genre.model';
import { GenresService } from 'src/app/services/genres.service';

@Component({
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss']
})
export class GenresComponent implements OnInit {
  genresList!: Genre[] ;
  newGenreLabel : string = "";

  constructor(private genreServ : GenresService ) {
  }

  ngOnInit(): void {
  this.loadGenres();
  }

  loadGenres(){
    this.genreServ.getAll().subscribe({
      next : (genresList  => this.genresList = genresList),
      error : (e) => console.error(e),
      complete : () => {},
    });
  }

  onSubmitAction(){
    this.genreServ.addNewGenre(this.newGenreLabel).subscribe({
      next : () => {
        alert(`${this.newGenreLabel} enregistré`);
        this.newGenreLabel = "";
        this.loadGenres();
      },
      error : (e) => console.error(e),
      complete: () => {},
    });
  }

  onDeleteAction(id : number){
    this.genreServ.deleteGenre(id).subscribe({
      next : () => {
        alert(`Genre supprimé`);
        this.loadGenres();
      },
      error : (e) => console.error(e),
      complete: () => {},
    });
    }

    onUpdateAction(id : number){
      let input = <HTMLInputElement>document.getElementById(id.toString());
      let update = input.value;
      this.genreServ.updateGenre({idGenre : id, label : update}).subscribe({
        next : () => {
          alert(`${update} mis à jour`);
          this.loadGenres();
        },
        error : (e) => console.error(e),
        complete: () => {},
      });
  }

}
