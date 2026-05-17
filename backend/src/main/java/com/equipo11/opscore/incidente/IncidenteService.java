package com.equipo11.opscore.incidente;

import com.equipo11.opscore.incidente.dto.IncidenteRequestDTO;
import com.equipo11.opscore.incidente.dto.IncidenteResponseDTO;
import com.equipo11.opscore.model.enums.EstadoIncidente;

import java.util.List;

public interface IncidenteService {

    List<IncidenteResponseDTO> getAll();

    IncidenteResponseDTO getById(Long id);

    List<IncidenteResponseDTO> getByOperadorId(Long operadorId);

    List<IncidenteResponseDTO> getByTecnicoId(Long tecnicoId);

    List<IncidenteResponseDTO> getByEstado(EstadoIncidente estado);

    IncidenteResponseDTO create(IncidenteRequestDTO dto);

    IncidenteResponseDTO update(Long id, IncidenteRequestDTO dto);

    void delete(Long id);
}
