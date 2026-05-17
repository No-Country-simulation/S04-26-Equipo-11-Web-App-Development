package com.equipo11.opscore.incidente;

import com.equipo11.opscore.incidente.dto.IncidenteRequestDTO;
import com.equipo11.opscore.incidente.dto.IncidenteResponseDTO;
import com.equipo11.opscore.model.enums.EstadoIncidente;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/incidentes")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class IncidenteController {

    private final IncidenteService incidenteService;

    // GET /api/incidentes
    @GetMapping
    public ResponseEntity<List<IncidenteResponseDTO>> getAll() {
        return ResponseEntity.ok(incidenteService.getAll());
    }

    // GET /api/incidentes/{id}
    @GetMapping("/{id}")
    public ResponseEntity<IncidenteResponseDTO> getById(@PathVariable Long id) {
        return ResponseEntity.ok(incidenteService.getById(id));
    }

    // GET /api/incidentes/operador/{id}
    @GetMapping("/operador/{id}")
    public ResponseEntity<List<IncidenteResponseDTO>> getByOperador(@PathVariable Long id) {
        return ResponseEntity.ok(incidenteService.getByOperadorId(id));
    }

    // GET /api/incidentes/tecnico/{id}
    @GetMapping("/tecnico/{id}")
    public ResponseEntity<List<IncidenteResponseDTO>> getByTecnico(@PathVariable Long id) {
        return ResponseEntity.ok(incidenteService.getByTecnicoId(id));
    }

    // GET /api/incidentes/estado/{estado}
    @GetMapping("/estado/{estado}")
    public ResponseEntity<List<IncidenteResponseDTO>> getByEstado(@PathVariable EstadoIncidente estado) {
        return ResponseEntity.ok(incidenteService.getByEstado(estado));
    }

    // POST /api/incidentes
    @PostMapping
    public ResponseEntity<IncidenteResponseDTO> create(@RequestBody IncidenteRequestDTO dto) {
        return ResponseEntity.status(HttpStatus.CREATED).body(incidenteService.create(dto));
    }

    // PUT /api/incidentes/{id}
    @PutMapping("/{id}")
    public ResponseEntity<IncidenteResponseDTO> update(@PathVariable Long id,
                                                       @RequestBody IncidenteRequestDTO dto) {
        return ResponseEntity.ok(incidenteService.update(id, dto));
    }

    // DELETE /api/incidentes/{id}
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        incidenteService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
