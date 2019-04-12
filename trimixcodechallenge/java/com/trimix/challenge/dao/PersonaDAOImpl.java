package com.trimix.challenge.dao;

import java.util.List;

import javax.persistence.Query;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.MatchMode;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.trimix.challenge.entity.Persona;

@Repository
public class PersonaDAOImpl implements PersonaDAO{
	
	@Autowired
    private SessionFactory sessionFactory;

    @SuppressWarnings("unchecked")
	@Override
    public List<Persona> getPersonas() {
        Session session = sessionFactory.getCurrentSession();
        CriteriaBuilder cb = session.getCriteriaBuilder();
        CriteriaQuery <Persona> cq = cb.createQuery(Persona.class);
        Root <Persona> root = cq.from(Persona.class);
        cq.select(root);
        Query query = session.createQuery(cq);
        return query.getResultList();
    }

    @Override
    public void deletePersona(int id) {
        Session session = sessionFactory.getCurrentSession();
        Persona persona = session.byId(Persona.class).load(id);
        session.delete(persona);
    }

    @Override
    public void savePersona(Persona persona) {
        Session currentSession = sessionFactory.getCurrentSession();
        currentSession.saveOrUpdate(persona);
    }

    @Override
    public Persona getPersona(int theId) {
        Session currentSession = sessionFactory.getCurrentSession();
        Persona persona = currentSession.get(Persona.class, theId);
        return persona;
    }
    
    @Override
    public List<Persona> getByNombreAndTipoDoc(String nombre, String tipoDoc) {
        Session currentSession = sessionFactory.getCurrentSession();
        CriteriaBuilder cb = currentSession.getCriteriaBuilder();
        CriteriaQuery <Persona> cq = cb.createQuery(Persona.class);
        Root<Persona> root = cq.from(Persona.class);
        if(nombre.isEmpty()) {
        	cq.select(root).where(cb.like(root.get("tipoDocumento"), "%"+tipoDoc+"%"));
        }else
        	if(tipoDoc.isEmpty()) {
        		cq.select(root).where(cb.like(root.get("nombre"), "%"+nombre+"%"));
        	}else {
        		cq.select(root).where(cb.or(cb.like(root.get("nombre"), "%"+nombre+"%"),cb.like(root.get("tipoDocumento"), "%"+tipoDoc+"%")));
        	}
        Query query = currentSession.createQuery(cq);
        List<Persona> personas = query.getResultList();
        return personas;
    }
    
    @Override
    public List<Persona> getPersonaByTipoDoc(String tipoDoc) {
        Session currentSession = sessionFactory.getCurrentSession();
        CriteriaBuilder cb = currentSession.getCriteriaBuilder();
        CriteriaQuery <Persona> cq = cb.createQuery(Persona.class);
        Root<Persona> root = cq.from(Persona.class);
        cq.select(root).where(cb.like(root.get("tipoDocumento"), "%"+tipoDoc+"%"));
        Query query = currentSession.createQuery(cq);
        List<Persona> personas = query.getResultList();
        return personas;
    }
}
