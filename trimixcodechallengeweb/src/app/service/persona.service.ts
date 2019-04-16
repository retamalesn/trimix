import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Persona} from "../model/persona.model";

@Injectable()
export class PersonaService {
    constructor(private http: HttpClient) {}
    baseUrl: string = 'http://localhost:8383/trimixcodechallenge/rest/persona';

    getPersonas() {
        return this.http.get<Persona[]>(this.baseUrl + '/list');
    }

    getPersonaById(id: number) {
        return this.http.get<Persona>(this.baseUrl + '/getById?personaId=' + id);
    }

    createPersona(persona: Persona) {
        return this.http.post(this.baseUrl + '/savePersona', persona);
    }

    updatePersona(persona: Persona) {
        return this.http.put(this.baseUrl + '/' + persona.id, persona);
    }

    deletePersona(id: number) {
        return this.http.delete(this.baseUrl + '/delete?personaId=' + id);
    }

    getPesonaByNombreAndTipoDocumento(persona: Persona){
        return this.http.get<Persona[]>(this.baseUrl + '/getByNombreAndTipoDoc?nombre=' + persona.nombre + '&tipoDoc=' + persona.tipoDocumento);
    }
}
