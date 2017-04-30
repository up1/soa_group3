package Users;

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


    @Transactional(readOnly = true)
    public User findById(Long id) {
        return this.jdbcTemplate.queryForObject("SELECT * FROM USERS WHERE user_id=?", new Object[]{id}, new UserRowMapper());
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

    public User login(String email, String password){
        return this.jdbcTemplate.queryForObject("SELECT * FROM USERS WHERE email=? AND password=?", new Object[]{email,password}, new UserRowMapper());
    }

    public void update(User user, Long id){
        String sql = "UPDATE USERS SET user_fname = ? , user_lname = ?, user_email = ? , WHERE user_id= ?";
        this.jdbcTemplate.update(sql, user.getFname(),  user.getLname(), user.getEmail(), id);
    }
}
