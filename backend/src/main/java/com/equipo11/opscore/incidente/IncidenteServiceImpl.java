package com.equipo11.opscore.incidente;

import com.equipo11.opscore.exception.ResourceNotFoundException;
import com.equipo11.opscore.incidente.dto.IncidenteRequestDTO;
import com.equipo11.opscore.incidente.dto.IncidenteResponseDTO;
import com.equipo11.opscore.model.Area;
import com.equipo11.opscore.model.CausaRaiz;
import com.equipo11.opscore.model.Incidente;
import com.equipo11.opscore.model.Usuario;
import com.equipo11.opscore.model.enums.EstadoIncidente;
import com.equipo11.opscore.repository.AreaRepository;
import com.equipo11.opscore.repository.CausaRaizRepository;
import com.equipo11.opscore.repository.IncidenteRepository;
import com.equipo11.opscore.repository.UsuarioRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class IncidenteServiceImpl implements IncidenteService {

    private final IncidenteRepository incidenteRepository;
    private final UsuarioRepository usuarioRepository;
    private final AreaRepository areaRepository;
    private final CausaRaizRepository causaRaizRepository;

    @Override
    @Transactional(readOnly = true)
    public List<IncidenteResponseDTO> getAll() {
        return incidenteRepository.findAll()
                .stream()
                .map(this::toResponseDTO)
                .toList();
    }

    @Override
    @Transactional(readOnly = true)
    public IncidenteResponseDTO getById(Long id) {
        Incidente incidente = incidenteRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Incidente", id));
        return toResponseDTO(incidente);
    }

    @Override
    @Transactional(readOnly = true)
    public List<IncidenteResponseDTO> getByOperadorId(Long operadorId) {
        return incidenteRepository.findByOperadorId(operadorId)
                .stream()
                .map(this::toResponseDTO)
                .toList();
    }

    @Override
    @Transactional(readOnly = true)
    public List<IncidenteResponseDTO> getByTecnicoId(Long tecnicoId) {
        return incidenteRepository.findByTecnicoId(tecnicoId)
                .stream()
                .map(this::toResponseDTO)
                .toList();
    }

    @Override
    @Transactional(readOnly = true)
    public List<IncidenteResponseDTO> getByEstado(EstadoIncidente estado) {
        return incidenteRepository.findByEstado(estado)
                .stream()
                .map(this::toResponseDTO)
                .toList();
    }

    @Override
    @Transactional
    public IncidenteResponseDTO create(IncidenteRequestDTO dto) {
        if (dto.getDescripcion() == null || dto.getDescripcion().isBlank()) {
            throw new IllegalArgumentException("La descripción es obligatoria.");
        }
        if (dto.getPrioridad() == null) {
            throw new IllegalArgumentException("La prioridad es obligatoria.");
        }
        if (dto.getTipo() == null) {
            throw new IllegalArgumentException("El tipo es obligatorio.");
        }
        if (dto.getAreaId() == null) {
            throw new IllegalArgumentException("El área es obligatoria.");
        }
        if (dto.getOperadorId() == null) {
            throw new IllegalArgumentException("El operador es obligatorio.");
        }

        Usuario operador = usuarioRepository.findById(dto.getOperadorId())
                .orElseThrow(() -> new ResourceNotFoundException("Usuario (operador)", dto.getOperadorId()));

        Area area = areaRepository.findById(dto.getAreaId())
                .orElseThrow(() -> new ResourceNotFoundException("Area", dto.getAreaId()));

        Incidente.IncidenteBuilder builder = Incidente.builder()
                .descripcion(dto.getDescripcion())
                .prioridad(dto.getPrioridad())
                .tipo(dto.getTipo())
                .estado(EstadoIncidente.ABIERTO)
                .operador(operador)
                .area(area);

        if (dto.getTecnicoId() != null) {
            Usuario tecnico = usuarioRepository.findById(dto.getTecnicoId())
                    .orElseThrow(() -> new ResourceNotFoundException("Usuario (técnico)", dto.getTecnicoId()));
            builder.tecnico(tecnico);
        }

        if (dto.getCausaRaizId() != null) {
            CausaRaiz causaRaiz = causaRaizRepository.findById(dto.getCausaRaizId())
                    .orElseThrow(() -> new ResourceNotFoundException("CausaRaiz", dto.getCausaRaizId()));
            builder.causaRaiz(causaRaiz);
        }

        return toResponseDTO(incidenteRepository.save(builder.build()));
    }

    @Override
    @Transactional
    public IncidenteResponseDTO update(Long id, IncidenteRequestDTO dto) {
        Incidente incidente = incidenteRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Incidente", id));

        if (dto.getDescripcion() != null && !dto.getDescripcion().isBlank()) {
            incidente.setDescripcion(dto.getDescripcion());
        }
        if (dto.getPrioridad() != null) {
            incidente.setPrioridad(dto.getPrioridad());
        }
        if (dto.getTipo() != null) {
            incidente.setTipo(dto.getTipo());
        }
        if (dto.getEstado() != null) {
            incidente.setEstado(dto.getEstado());
        }
        if (dto.getNotasResolucion() != null) {
            incidente.setNotasResolucion(dto.getNotasResolucion());
        }
        if (dto.getFechaResolucion() != null) {
            incidente.setFechaResolucion(dto.getFechaResolucion());
        }
        if (dto.getFechaCierre() != null) {
            incidente.setFechaCierre(dto.getFechaCierre());
        }
        if (dto.getFechaPrimeraAsignacion() != null) {
            incidente.setFechaPrimeraAsignacion(dto.getFechaPrimeraAsignacion());
        }
        if (dto.getAreaId() != null) {
            Area area = areaRepository.findById(dto.getAreaId())
                    .orElseThrow(() -> new ResourceNotFoundException("Area", dto.getAreaId()));
            incidente.setArea(area);
        }
        if (dto.getTecnicoId() != null) {
            Usuario tecnico = usuarioRepository.findById(dto.getTecnicoId())
                    .orElseThrow(() -> new ResourceNotFoundException("Usuario (técnico)", dto.getTecnicoId()));
            incidente.setTecnico(tecnico);
        }
        if (dto.getCausaRaizId() != null) {
            CausaRaiz causaRaiz = causaRaizRepository.findById(dto.getCausaRaizId())
                    .orElseThrow(() -> new ResourceNotFoundException("CausaRaiz", dto.getCausaRaizId()));
            incidente.setCausaRaiz(causaRaiz);
        }

        return toResponseDTO(incidenteRepository.save(incidente));
    }

    @Override
    @Transactional
    public void delete(Long id) {
        if (!incidenteRepository.existsById(id)) {
            throw new ResourceNotFoundException("Incidente", id);
        }
        incidenteRepository.deleteById(id);
    }

    // ── Mapper ──────────────────────────────────────────────────────────────────

    private IncidenteResponseDTO toResponseDTO(Incidente i) {
        return IncidenteResponseDTO.builder()
                .id(i.getId())
                .descripcion(i.getDescripcion())
                .estado(i.getEstado())
                .prioridad(i.getPrioridad())
                .tipo(i.getTipo())
                .fechaCreacion(i.getFechaCreacion())
                .fechaResolucion(i.getFechaResolucion())
                .fechaCierre(i.getFechaCierre())
                .fechaPrimeraAsignacion(i.getFechaPrimeraAsignacion())
                .notasResolucion(i.getNotasResolucion())
                .areaId(i.getArea() != null ? i.getArea().getId() : null)
                .areaNombre(i.getArea() != null ? i.getArea().getNombre() : null)
                .operadorId(i.getOperador() != null ? i.getOperador().getId() : null)
                .operadorNombre(i.getOperador() != null ? i.getOperador().getNombre() : null)
                .tecnicoId(i.getTecnico() != null ? i.getTecnico().getId() : null)
                .tecnicoNombre(i.getTecnico() != null ? i.getTecnico().getNombre() : null)
                .causaRaizId(i.getCausaRaiz() != null ? i.getCausaRaiz().getId() : null)
                .causaRaizNombre(i.getCausaRaiz() != null ? i.getCausaRaiz().getNombre() : null)
                .build();
    }
}
