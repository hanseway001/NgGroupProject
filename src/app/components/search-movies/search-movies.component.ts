import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { GetMoviesService } from 'src/app/services/get-movies.service';

@Component({
  selector: 'app-search-movies',
  templateUrl: './search-movies.component.html',
  styleUrls: ['./search-movies.component.scss']
})
export class SearchMoviesComponent {

  form: FormGroup;
  formBuilder: FormBuilder = new FormBuilder;  // we'll want to be able to access this later outside of the controller
  
  apiResponse: string = '';
  moviesArray: string[] = [];
  movie: string[] = [];


  constructor (
    private gitDatInfo: GetMoviesService,
    // private cacheDatInfo: CacheDatInfoService, 
    formBuilder: FormBuilder,
    private route: ActivatedRoute,
    )
    {
      this.form = formBuilder.group({
        searchTerm: ['11']
      });
    }

  ngOnInit(){
    this.search();

  }

  // selectImage(imageUrl: string){
  //   let playerId = Number(this.route.snapshot.paramMap.get('player'))
  //   //set that image and player in the service
  //   let player = new Player( playerId, imageUrl)
  //   this.cacheDatInfo.savePlayerData(player)
  // }

  search(){
    let name = this.form.controls['searchTerm'].value;
    this.moviesArray = [];
    this.gitDatInfo.searchMovies(name).subscribe(
      (res: any) => {
        this.apiResponse = JSON.stringify(res);
      
        // if (res.sprites.front_default) this.imageArray.push(res.sprites.front_default);
        // if (res.sprites.fron_female) this.imageArray.push(res.sprites.fron_female);
        // if (res.sprites.back_default) this.imageArray.push(res.sprites.back_default);
        // if (res.sprites.back_female) this.imageArray.push(res.sprites.back_female);
        // if (res.sprites.front_shiny) this.imageArray.push(res.sprites.front_shiny);
        // if (res.sprites.front_shiny_female) this.imageArray.push(res.sprites.front_shiny_female)
        // if (res.sprites.back_shiny) this.imageArray.push(res.sprites.back_shiny);
        // if (res.sprites.back_shiny_female) this.imageArray.push(res.sprites.back_shiny_female);

        // console.log("Image Array:" + this.imageArray)
      } );
  }



}
