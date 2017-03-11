package field;


import field.model.Field;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by phossawatpruekphanasant on 3/7/2017 AD.
 */
public class FieldRowMapper implements RowMapper<Field>{
    @Override
    public Field mapRow(ResultSet resultSet, int rowNumber) throws SQLException {
        Field field = new Field();
        field.setField_id(resultSet.getInt("field_id"));
        field.setField_name(resultSet.getString("field_name"));
        field.setField_image(resultSet.getBlob("field_image"));
        field.setField_type(resultSet.getString("field_type"));
        field.setField_country(resultSet.getString("field_country"));
        field.setField_price(resultSet.getInt("field_price"));
        return field;
    }
}
