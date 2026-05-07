package com.equipo11.opscore.model;

import com.equipo11.opscore.model.enums.EstadoIncidente;
import com.equipo11.opscore.model.enums.PrioridadIncidente;
import com.equipo11.opscore.model.enums.TipoIncidente;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;

@Entity
@Table(name = "incidentes")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Incidente {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 1000)
    private String descripcion;

    @CreationTimestamp
    @Column(updatable = false)
    private LocalDateTime fechaCreacion;

    private LocalDateTime fechaResolucion;

    private LocalDateTime fechaCierre;

    private LocalDateTime fechaPrimeraAsignacion;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private PrioridadIncidente prioridad;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private TipoIncidente tipo;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private EstadoIncidente estado;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "operador_id", nullable = false)
    private Usuario operador;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "tecnico_id")
    private Usuario tecnico;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "area_id", nullable = false)
    private Area area;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "causa_raiz_id")
    private CausaRaiz causaRaiz;

    @Column(columnDefinition = "TEXT")
    private String notasResolucion;

    @PrePersist
    public void prePersist() {
        if (estado == null) {
            estado = EstadoIncidente.ABIERTO;
        }
    }
}
