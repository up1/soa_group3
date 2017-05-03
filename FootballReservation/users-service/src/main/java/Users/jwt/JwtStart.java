package Users.jwt;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import javax.annotation.PostConstruct;
import java.util.Base64;
import java.util.Date;
import java.util.UUID;
import java.util.concurrent.TimeUnit;

    @Service
    public class JwtStart {

//        @Value("${authentication.token.expired.hour}")
//        private Long expireHours= Long.valueOf(1);

//        @Value("${authentication.token.secret}")
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

//        protected Date getExpirationTime()
//        {
//            Date now = new Date();
//            Long expireInMilis = TimeUnit.HOURS.toMillis(expireHours);
//            return new Date(expireInMilis + now.getTime());
//        }

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
//            Date now = new Date();
            return Jwts.builder()
//                    .setId(UUID.randomUUID().toString())
                    .setSubject(jwtUser.getUsername())
                    .claim("role",jwtUser.getRole())
//                    .setIssuedAt(now)
//                    .setExpiration(getExpirationTime())
                    .signWith(SignatureAlgorithm.HS512, encodedSecret)
                    .compact();
        }

        public String getToken(Jwt jwtUser)
        {
            return getToken(this.encodedSecret, jwtUser);
        }

    }

