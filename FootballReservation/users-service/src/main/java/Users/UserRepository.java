package users;

import users.exception.UserNotFoundException;
import users.exception.WrongPasswordException;
import users.jwt.JwtStart;
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
        return jdbcTemplate.query(sql, new Object[]{itemPerPage, offset},new UserRowMapper());
    }
    public List<User> findbyRole(int role){
        String sql = "select * from USERS WHERE role=?";
        return jdbcTemplate.query(sql, new Object[]{role},new UserRowMapper());
    }

    public User login(User user){
        User auth = getUser(user.getEmail());

        if(auth!=null){
            if(auth.getPassword() != (user.getPassword())){
                throw new WrongPasswordException();
            }
        }else{
            throw new UserNotFoundException(user.getEmail());
        }
        return auth;
    }

    public void update(User user, Long id){
        String sql = "UPDATE USERS SET user_fname = ? , user_lname = ?, user_email = ?, password = ? WHERE user_id= ?";
        this.jdbcTemplate.update(sql, user.getFname(),  user.getLname(), user.getEmail(),user.getPassword(), id);
    }
}
