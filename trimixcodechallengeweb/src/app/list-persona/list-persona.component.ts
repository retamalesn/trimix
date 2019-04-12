import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {Router} from "@angular/router";
import {PersonaService} from "../service/persona.service";
import {Persona} from "../model/persona.model";
import {MatTableDataSource, MatPaginator} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-list-persona',
  templateUrl: './list-persona.component.html',
  styleUrls: ['./list-persona.component.css']
})
export class ListPersonaComponent implements OnInit, AfterViewInit  {

  
  personas: Array<any>;
  dataSource = new MatTableDataSource<Element>();
  ELEMENT_DATA: Element[] = [];
  displayedColumns = ['nombre', 'apellido', 'fechaNacimiento', 'tipoDocumento', 'nroDocumento', 'acciones'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  tipoDocumentos = ['DNI', 'Pasaporte', 'Cedula'];

  constructor(
    private router: Router, 
    private personaService: PersonaService,
    private formBuilder: FormBuilder) {}

  searchForm: FormGroup;

  ngOnInit() {
    this.getPersonas();
    this.searchForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      tipoDocumento: ['DNI']
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deletePersona(personaId: number): void {
    this.personaService.deletePersona(personaId)
        .subscribe(data => {
          this.getPersonas();
        });    
  };

  editPersona(persona: Persona): void {
    localStorage.removeItem("editPersonaId");
    localStorage.setItem("editPersonaId", persona.id.toString());
    this.router.navigate(['add-persona']);
  };

  ngAfterViewInit(): void {
    setTimeout(() => this.dataSource.paginator = this.paginator);
    
  }

  onSubmit() {
    this.personaService.getPesonaByNombreAndTipoDocumento(this.searchForm.value)
      .subscribe(data => {
        this.setPersonasFilter(data);
        this.router.navigate(['list-persona']);
      });
  }

  getPersonas(){
    this.personaService.getPersonas()
      .subscribe(data => {
        this.personas = data;
        this.ELEMENT_DATA = this.personas;
        this.dataSource = new MatTableDataSource<Element>(this.personas);
        setTimeout(() => this.dataSource.paginator = this.paginator);
      });
  }

  setPersonasFilter(data){
    this.personas = data;
    this.ELEMENT_DATA = this.personas;
    this.dataSource = new MatTableDataSource<Element>(this.personas);
    setTimeout(() => this.dataSource.paginator = this.paginator);
  }

  limpiarFiltro(){
    this.getPersonas();
    this.searchForm.reset();
    this.router.navigate(['list-persona']);
  }
}
