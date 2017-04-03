package Users;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by mosed on 3/13/2017.
 */
public class UserRowMapper implements RowMapper<User>{
    @Override
    public User mapRow(ResultSet resultSet, int rowNumber) throws SQLException {
        User user = new User();

        user.setId(resultSet.getLong("user_id"));
        user.setFullname(resultSet.getString("user_fullname"));
        user.setEmail(resultSet.getString("user_email"));
        user.setAddress(resultSet.getString("user_address"));
        user.setPicture(resultSet.getString("user_picture"));
        user.setUsername(resultSet.getString("username"));
        user.setPassword(resultSet.getString("password"));
        user.setRole(resultSet.getString("role"));
        return user;

    }
}
