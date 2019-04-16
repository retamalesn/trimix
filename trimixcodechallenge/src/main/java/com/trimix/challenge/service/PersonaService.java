package com.trimix.challenge.service;

import java.util.List;

import com.trimix.challenge.entity.Persona;

public interface PersonaService {
	
	public List <Persona> getPersonas();

    public void savePersona(Persona persona);

    public Persona getPersona(int theId);

    public void deletePersona(int theId);
    
    public List <Persona> getByNombreAndTipoDoc(String nombre, String tipoDoc);
    
    public List <Persona> getPersonaByTipoDoc(String tipoDoc);
}
