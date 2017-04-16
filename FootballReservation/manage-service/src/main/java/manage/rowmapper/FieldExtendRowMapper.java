package manage.rowmapper;


import manage.model.FieldExtend;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class FieldExtendRowMapper implements RowMapper<FieldExtend>{
    @Override
    public FieldExtend mapRow(ResultSet resultSet, int rowNumber) throws SQLException {
        FieldExtend extend = new FieldExtend();
        extend.setEx_id(resultSet.getInt("ex_id"));
        extend.setField_id(resultSet.getInt("field_id"));
        extend.setFieldex_name(resultSet.getString("fieldex_name"));
        extend.setRent(resultSet.getInt("rent"));
        extend.setImage(resultSet.getString("image"));
        extend.setSize(resultSet.getString("size"));
        extend.setFloor(resultSet.getString("floor"));
        return extend;
    }
}