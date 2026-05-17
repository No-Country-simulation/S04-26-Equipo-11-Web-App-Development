package com.equipo11.opscore.incidente.dto;

import com.equipo11.opscore.model.enums.EstadoIncidente;
import com.equipo11.opscore.model.enums.PrioridadIncidente;
import com.equipo11.opscore.model.enums.TipoIncidente;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class IncidenteResponseDTO {

    private Long id;
    private String descripcion;
    private EstadoIncidente estado;
    private PrioridadIncidente prioridad;
    private TipoIncidente tipo;

    private LocalDateTime fechaCreacion;
    private LocalDateTime fechaResolucion;
    private LocalDateTime fechaCierre;
    private LocalDateTime fechaPrimeraAsignacion;

    private Long areaId;
    private String areaNombre;

    private Long operadorId;
    private String operadorNombre;

    private Long tecnicoId;
    private String tecnicoNombre;

    private Long causaRaizId;
    private String causaRaizNombre;

    private String notasResolucion;
}
