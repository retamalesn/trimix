package com.trimix.challenge.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.trimix.challenge.entity.Persona;
import com.trimix.challenge.service.PersonaService;

@RestController
@RequestMapping("/persona")
public class PersonaController {
	
	@Autowired
    private PersonaService personaService;

	@CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/list")
    @ResponseBody
    public List <Persona> listPersonas(Model theModel) {
        List <Persona> personas = personaService.getPersonas();
        theModel.addAttribute("personas", personas);
        return personas;
    }
	
	@CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/getById")
    @ResponseBody
    public Persona getById(@RequestParam("personaId") int theId) {
        return personaService.getPersona(theId);
    }
	
	@CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/getByNombreAndTipoDoc")
    @ResponseBody
    public List <Persona> getByNombre(@RequestParam("nombre") String nombre,
    		@RequestParam("tipoDoc") String tipoDoc) {
        return personaService.getByNombreAndTipoDoc(nombre, tipoDoc);
    }
	
	@CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/getByTipoDoc")
    @ResponseBody
    public List <Persona> getByTipoDoc(@RequestParam("tipoDoc") String tipoDoc) {
        return personaService.getPersonaByTipoDoc(tipoDoc);
    }

	@CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/showForm")
    public String showFormForAdd(Model theModel) {
    	Persona persona = new Persona();
        theModel.addAttribute("persona", persona);
        return "persona-form";
    }

	@CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/savePersona")
    public Persona savePersona(@Valid @RequestBody Persona persona) {
        personaService.savePersona(persona);
        return persona;
    }

	@CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/updateForm")
    public String showFormForUpdate(@RequestParam("personaId") int theId,
        Model theModel) {
    	Persona persona = personaService.getPersona(theId);
        theModel.addAttribute("persona", persona);
        return "persona-form";
    }

	@CrossOrigin(origins = "http://localhost:4200")
    @DeleteMapping("/delete")
    public int deletePersona(@RequestParam("personaId") int theId) {
    	personaService.deletePersona(theId);
        return theId;
    }
}
