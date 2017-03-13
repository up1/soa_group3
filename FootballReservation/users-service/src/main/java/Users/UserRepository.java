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
        return this.jdbcTemplate.queryForObject("SELECT * FROM USERS WHERE id=?", new Object[]{id}, new UserRowMapper());
    }

    @Transactional
    public void save(User user) {
        String sql = "INSERT INTO USERS(user_name, fullname,email,profile_picture,user_type) VALUES (?,?,?,?,?,?)";
        this.jdbcTemplate.update(sql, user.getUser_name(), user.getFullName(), user.getEmail(), user.getProfile_picture(), user.getUser_Type());
    }

    public void delete(Long id) {
        String sql = "DELETE FROM USERS WHERE id=?";
        this.jdbcTemplate.update(sql, id);
    }

    public List<User> findAllUser(int page, int itemPerPage){
        String sql = "select * from USERS LIMIT ? OFFSET ?";
        int offset = (page-1) * itemPerPage;
        List <User> users = jdbcTemplate.query(sql, new Object[]{itemPerPage, offset},new UserRowMapper());
        return users;
    }

    public void update(User user, Long id){
        String sql = "UPDATE USERS SET user_name = ? , fullname = ?,email = ?,profile_picture = ?,type = ? where = ?";
        this.jdbcTemplate.update(sql, user.getUser_name(), user.getFullName(), user.getEmail(), user.getProfile_picture(), user.getUser_Type(), id);
    }
}
