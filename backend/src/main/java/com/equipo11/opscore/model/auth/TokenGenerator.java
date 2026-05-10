package com.equipo11.opscore.model.auth;

import com.equipo11.opscore.model.Usuario;

public interface TokenGenerator {

    public String generateToken(Usuario user);
    public boolean validateToken(String token);
    public String getUserFromToken(String token);
}
