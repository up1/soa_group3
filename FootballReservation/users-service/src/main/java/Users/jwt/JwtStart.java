package users.jwt;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import javax.annotation.PostConstruct;
import java.util.Base64;

    @Service
    public class JwtStart {

        @Value("rfskey")
        private String plainSecret;
        private String encodedSecret;

        @PostConstruct
        protected void init() {
            this.encodedSecret = generateEncodedSecret(this.plainSecret);
        }

        protected String generateEncodedSecret(String plainSecret)
        {
            if (StringUtils.isEmpty(plainSecret))
            {
                throw new IllegalArgumentException("JWT secret cannot be null or empty.");
            }
            return Base64
                    .getEncoder()
                    .encodeToString(this.plainSecret.getBytes());
        }

        protected Jwt getUser(String encodedSecret, String token)
        {
            Claims claims = Jwts.parser()
                    .setSigningKey(encodedSecret)
                    .parseClaimsJws(token)
                    .getBody();
            String userName = claims.getSubject();
            String role = (String) claims.get("role");
            Jwt securityUser = new Jwt();
            securityUser.setUsername(userName);
            securityUser.setRole(role);
            return securityUser;
        }

        public Jwt getUser(String token)
        {
            return getUser(this.encodedSecret, token);
        }

        protected String getToken(String encodedSecret, Jwt jwtUser)
        {
            return Jwts.builder()
                    .setSubject(jwtUser.getUsername())
                    .claim("role",jwtUser.getRole())
                    .signWith(SignatureAlgorithm.HS512, encodedSecret)
                    .compact();
        }

        public String getToken(Jwt jwtUser)
        {
            return getToken(this.encodedSecret, jwtUser);
        }

    }

