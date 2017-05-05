package demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

/**
 * By Nattakit 57070033
 */

@Repository
public class AdminRepository {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public List<User> queryUsers(int page, int itemPerPage) {
        int offset = (page - 1) * itemPerPage;
        String sql = "SELECT * FROM USERS LIMIT ? OFFSET ?;";
        List<User> users = jdbcTemplate.query(sql, new Object[]{itemPerPage, offset}, new AdminRowMapper());
        return users;
    }

    public void deleteUser(int user_id) {
        String sql = "DELETE FROM USERS WHERE user_id = ?;";
        this.jdbcTemplate.update(sql, user_id);
    }

    public void changeRole(int user_id){
        String sql = "UPDATE USERS SET role = 'Manager' WHERE user_id = ?;";
        this.jdbcTemplate.update(sql, user_id);
    }
    public List<User> findbyRole(int role){
        String sql = "select * from USERS WHERE role=?";
        List <User> users = jdbcTemplate.query(sql, new Object[]{role},new AdminRowMapper());
        return users;
    }
}
