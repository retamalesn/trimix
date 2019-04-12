package com.trimix.challenge.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.trimix.challenge.dao.PersonaDAO;
import com.trimix.challenge.entity.Persona;

@Service
public class PersonaServiceImpl implements PersonaService{

	@Autowired
    private PersonaDAO personaDAO;

    @Override
    @Transactional
    public List <Persona> getPersonas() {
        return personaDAO.getPersonas();
    }

    @Override
    @Transactional
    public void savePersona(Persona persona) {
    	personaDAO.savePersona(persona);
    }

    @Override
    @Transactional
    public Persona getPersona(int theId) {
        return personaDAO.getPersona(theId);
    }

    @Override
    @Transactional
    public void deletePersona(int theId) {
        personaDAO.deletePersona(theId);
    }
    
    @Override
    @Transactional
    public List <Persona> getByNombreAndTipoDoc(String nombre, String tipoDoc) {
        return personaDAO.getByNombreAndTipoDoc(nombre, tipoDoc);
    }
    
    @Override
    @Transactional
    public List <Persona> getPersonaByTipoDoc(String tipoDoc) {
        return personaDAO.getPersonaByTipoDoc(tipoDoc);
    }
}
