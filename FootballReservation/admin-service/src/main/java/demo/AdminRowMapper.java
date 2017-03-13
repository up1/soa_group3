package demo;

import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * By Nattakit 57070033
 */

public class AdminRowMapper implements RowMapper<Admin> {
    @Override
    public Admin mapRow(ResultSet resultSet, int rowNumber) throws SQLException {
        Admin admin = new Admin();
        admin.setUser_id(resultSet.getInt("user_id"));
        admin.setUser_firstname(resultSet.getString("user_firstname"));
        admin.setUser_lastname(resultSet.getString("user_lastname"));
        admin.setUser_address(resultSet.getString("user_address"));
        admin.setUser_email(resultSet.getString("user_email"));
        admin.setUser_role(resultSet.getString("user_role"));
        return admin;
    }
}
