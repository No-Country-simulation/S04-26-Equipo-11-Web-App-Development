package com.equipo11.opscore.repository;

import com.equipo11.opscore.model.Incidente;
import com.equipo11.opscore.model.enums.EstadoIncidente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IncidenteRepository extends JpaRepository<Incidente, Long> {
    List<Incidente> findByEstado(EstadoIncidente estado);
    List<Incidente> findByOperadorId(Long operadorId);
    List<Incidente> findByTecnicoId(Long tecnicoId);
}
