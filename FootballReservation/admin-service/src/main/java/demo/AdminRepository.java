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
        return jdbcTemplate.query(sql, new Object[]{itemPerPage, offset}, new AdminRowMapper());
    }

    public void deleteUser(int userId) {
        String sql = "DELETE FROM USERS WHERE user_id = ?;";
        this.jdbcTemplate.update(sql, userId);
    }

    public void changeRole(int userId){
        String sql = "UPDATE USERS SET role = 'Manager' WHERE user_id = ?;";
        this.jdbcTemplate.update(sql, userId);
    }
    public List<User> findbyRole(int role){
        String sql = "select * from USERS WHERE role=?";
        return jdbcTemplate.query(sql, new Object[]{role},new AdminRowMapper());
    }
}
