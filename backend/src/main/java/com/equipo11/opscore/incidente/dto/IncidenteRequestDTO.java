package com.equipo11.opscore.incidente.dto;

import com.equipo11.opscore.model.enums.EstadoIncidente;
import com.equipo11.opscore.model.enums.PrioridadIncidente;
import com.equipo11.opscore.model.enums.TipoIncidente;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class IncidenteRequestDTO {

    private String descripcion;
    private PrioridadIncidente prioridad;
    private TipoIncidente tipo;
    private EstadoIncidente estado;

    private Long areaId;
    private Long operadorId;
    private Long tecnicoId;
    private Long causaRaizId;

    private String notasResolucion;
    private LocalDateTime fechaResolucion;
    private LocalDateTime fechaCierre;
    private LocalDateTime fechaPrimeraAsignacion;
}
