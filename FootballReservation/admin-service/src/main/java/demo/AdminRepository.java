package demo;

import java.util.List;

import org.apache.catalina.User;
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

    public List<Admin> queryUsers(int page, int itemPerPage) {
        int offset = (page - 1) * itemPerPage;
        String sql = "SELECT * FROM USER LIMIT ? OFFSET ?;";
        List<Admin> admins = jdbcTemplate.query(sql, new Object[]{itemPerPage, offset}, new AdminRowMapper());
        return admins;
    }

    public void deleteUser(int user_id) {
        String sql = "DELETE FROM USER WHERE user_id = ?;";
        this.jdbcTemplate.update(sql, user_id);
    }

    public void changeRole(int user_id){
        String sql = "UPDATE USER SET user_role = 'Manager' WHERE user_id = ?;";
        this.jdbcTemplate.update(sql, user_id);
    }
}
