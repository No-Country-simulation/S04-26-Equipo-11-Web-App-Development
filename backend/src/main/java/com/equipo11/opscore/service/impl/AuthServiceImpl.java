package com.equipo11.opscore.service.impl;

import com.equipo11.opscore.model.Usuario;
import com.equipo11.opscore.model.auth.TokenGenerator;
import com.equipo11.opscore.service.AuthService;

public class AuthServiceImpl implements AuthService {

    private TokenGenerator tokenUtil;

    public AuthServiceImpl(TokenGenerator tokenUtil) {
        this.tokenUtil = tokenUtil;
    }

    @Override
    public String generateToken(Usuario user) {
        return tokenUtil.generateToken(user);
    }

    @Override
    public boolean validateToken(String token) {
        return tokenUtil.validateToken(token);
    }

    @Override
    public Long getUserIDFromToken(String token) {
        //Podría encargarse de buscar el usuario en la base y hacer el usar un dto
        return Long.parseLong(tokenUtil.getUserFromToken(token));
    }
}
