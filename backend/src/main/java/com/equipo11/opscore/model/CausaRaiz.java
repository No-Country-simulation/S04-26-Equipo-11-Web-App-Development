package com.equipo11.opscore.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "causas_raiz")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CausaRaiz {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String nombre;

    private String descripcion;

    private String categoria;
}
