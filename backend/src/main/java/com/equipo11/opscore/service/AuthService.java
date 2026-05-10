package com.equipo11.opscore.service;

import com.equipo11.opscore.model.Usuario;

public interface AuthService {

    public String generateToken(Usuario user);

    public boolean validateToken(String token);

    public Long getUserIDFromToken(String token);
}
