package Users;

import Users.exception.UserNotFoundException;
import Users.exception.WrongPasswordException;
import Users.jwt.Jwt;
import Users.jwt.JwtStart;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Created by mosed on 3/13/2017.
 */

@Repository
public class UserRepository {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Autowired
    private JwtStart jwtStart;


    @Transactional(readOnly = true)
    public User findById(Long id) {
        return this.jdbcTemplate.queryForObject("SELECT * FROM USERS WHERE user_id=?", new Object[]{id}, new UserRowMapper());
    }

    @Transactional(readOnly = true)
    public User getUser(String email) {
        return this.jdbcTemplate.queryForObject("SELECT * FROM USERS WHERE user_email=?", new Object[]{email}, new UserRowMapper());
    }

    @Transactional
    public void save(User user) {
        String sql = "INSERT INTO USERS(user_fname, user_lname, user_email, password, role) VALUES (?,?,?,?,?)";
        this.jdbcTemplate.update(sql, user.getFname(), user.getLname(), user.getEmail(), user.getPassword(), user.getRole());
    }

    public void delete(Long id) {
        String sql = "DELETE FROM USERS WHERE user_id=?";
        this.jdbcTemplate.update(sql, id);
    }

    public List<User> findAllUser(int page, int itemPerPage){
        String sql = "select * from USERS LIMIT ? OFFSET ?";
        int offset = (page-1) * itemPerPage;
        List <User> users = jdbcTemplate.query(sql, new Object[]{itemPerPage, offset},new UserRowMapper());
        return users;
    }
    public List<User> findbyRole(int role){
        String sql = "select * from USERS WHERE role=?";
        List <User> users = jdbcTemplate.query(sql, new Object[]{role},new UserRowMapper());
        return users;
    }

    public User login(User user){
        User auth = getUser(user.getEmail());

        String token = "";

        if(auth!=null){
            if(auth.getPassword().equals(user.getPassword())){
                user = auth;
            }else{
                throw new WrongPasswordException();
            }
        }else{
            throw new UserNotFoundException(user.getEmail());
        }
        return user;
    }

//    public String login(User user){
//
//        User auth = getUser(user.getEmail());
//
//        String token = "";
//
//        if(auth!=null){
//            if(auth.getPassword().equals(user.getPassword())){
//                Jwt jwtUser = new Jwt(auth.getEmail(), auth.getRole());
//                token = jwtStart.getToken(jwtUser);
//            }else{
//                throw new WrongPasswordException();
//            }
//        }else{
//            throw new UserNotFoundException(user.getEmail());
//        }
//        return token;
//    }

    public void update(User user, Long id){
        String sql = "UPDATE USERS SET user_fname = ? , user_lname = ?, user_email = ? , WHERE user_id= ?";
        this.jdbcTemplate.update(sql, user.getFname(),  user.getLname(), user.getEmail(), id);
    }
}
