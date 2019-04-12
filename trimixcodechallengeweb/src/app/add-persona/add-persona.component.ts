import {Component, OnInit} from '@angular/core';
import {Route, Router, ActivatedRoute, Params} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PersonaService} from "../service/persona.service";
import {first} from "rxjs/operators";
import {Persona} from '../model/persona.model';

@Component({
  selector: 'app-add-persona',
  templateUrl: './add-persona.component.html',
  styleUrls: ['./add-persona.component.css']
})
export class AddPersonaComponent implements OnInit {

  public persona: Persona;
  submitted = false;
  tipoDocumentos = ['DNI', 'Pasaporte', 'Cedula']


  constructor(
    private formBuilder: FormBuilder, 
    private router: Router, 
    private personaService: PersonaService,
    private _route: ActivatedRoute
    ) {
    this.persona = new Persona(null, '', '', '', '', 0);
    }

  addForm: FormGroup;

  ngOnInit() {
    this.getPersona();
    this.addForm = this.formBuilder.group({
      id: [],
      nombre: ['', [Validators.required, Validators.minLength(4)]],
      apellido: ['', [Validators.required, Validators.minLength(4)]],
      fechaNacimiento: ['', [Validators.required]],
      tipoDocumento: ['DNI'],
      nroDocumento: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]]
    });

  }

  onSubmit() {

    this.submitted = true;

    if (this.addForm.invalid) {
      return;
    }
    this.personaService.createPersona(this.addForm.value)
      .subscribe(data => {
        this.router.navigate(['list-persona']);
      });
  }

  editPersona(){
    this.personaService.updatePersona(this.addForm.value)
      .subscribe(data => {
        this.router.navigate(['list-persona']);
      });
  }

  getPersona() {
    this._route.params.forEach((params: Params) => {
      let id = params['id'];
      if(id != null){
        this.personaService.getPersonaById(id).subscribe(
          response => {
            if (!response) {
              this.router.navigate(['list-persona']);
            } else {
              this.persona = response;
            }
          },
          error => {
            console.log(<any>error);
            this.router.navigate(['list-persona']);
          }
        )
      }
      
    })
  }

  get f() {return this.addForm.controls;}

}
