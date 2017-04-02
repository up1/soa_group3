package field.rowmapper;


import field.model.Field;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class FieldRowMapper implements RowMapper<Field>{
    @Override
    public Field mapRow(ResultSet resultSet, int rowNumber) throws SQLException {
        Field field = new Field();
        field.setField_id(resultSet.getInt("field_id"));
        field.setField_name(resultSet.getString("field_name"));
        field.setTel(resultSet.getString("tel"));
        field.setPrice(resultSet.getString("price_range"));
        field.setLocation(resultSet.getString("location"));
        field.setEmail(resultSet.getString("email"));
        field.setWebsite(resultSet.getString("website"));
        field.setDetail(resultSet.getString("detail"));
        field.setImage(resultSet.getString("image"));
        field.setStime(resultSet.getInt("stime"));
        field.setEtime(resultSet.getInt("etime"));
        field.setUsername(resultSet.getString("username"));
        return field;
    }
}
