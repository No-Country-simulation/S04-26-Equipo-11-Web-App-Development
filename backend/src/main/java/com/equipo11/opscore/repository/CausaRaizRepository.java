package com.equipo11.opscore.repository;

import com.equipo11.opscore.model.CausaRaiz;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CausaRaizRepository extends JpaRepository<CausaRaiz, Long> {
}
