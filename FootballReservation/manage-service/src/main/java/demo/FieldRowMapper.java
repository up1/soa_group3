package demo;

import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class FieldRowMapper implements RowMapper<Field> {
    @Override
    public Field mapRow(ResultSet resultSet, int rowNumber) throws SQLException {
        Field field = new Field();
        field.setStadium_id(resultSet.getLong("stadium_id"));
        field.setField_no(resultSet.getLong("field_no"));
        field.setField_name(resultSet.getString("field_name"));
        field.setField_size(resultSet.getInt("field_size"));
        field.setField_description(resultSet.getString("field_description"));
        return field;
    }
}
