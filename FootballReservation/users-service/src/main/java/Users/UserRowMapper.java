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

        user.setId(resultSet.getLong("id"));
        user.setUser_name(resultSet.getString("user_name"));
        user.setName(resultSet.getString("name"));
        user.setEmail(resultSet.getString("email"));
        user.setProfile_picture(resultSet.getString("profile_picture"));
        user.setUser_Type(resultSet.getString("user_type"));
        return user;

    }
}
