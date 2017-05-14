package field;

import field.model.Field;
import field.model.FieldExtend;
import field.rowmapper.FieldExtendRowMapper;
import field.rowmapper.FieldRowMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by phossawatpruekphanasant on 3/7/2017 AD.
 */
@Repository
public class FieldRepository {
    @Autowired
    private JdbcTemplate jdbcTemplate;
    public List<Field> queryFields(int page, int itemPerPage) {
        int offset = (page - 1) * itemPerPage;
        String sql = "select * from field LIMIT ? OFFSET ?";
        return jdbcTemplate.query(sql, new Object[]{itemPerPage, offset},
                new FieldRowMapper());
    }


    public Field getFieldByID(int fieldId) {
        String sql ="select * from field WHERE fieldId=?";
        return jdbcTemplate.queryForObject(sql, new Object[]{fieldId}, new FieldRowMapper());
    }


    public FieldExtend getFieldEXByID(int fieldId, int exId) {
        String sql ="select * from field_extend WHERE exId=? AND fieldId=?";
        return jdbcTemplate.queryForObject(sql, new Object[]{exId,fieldId}, new FieldExtendRowMapper());
    }

    public List<FieldExtend> getFieldExs(int fieldId) {
        String sql ="select * from field_extend WHERE fieldId=?";
        return jdbcTemplate.query(sql, new Object[]{fieldId}, new FieldExtendRowMapper());
    }

    public Field getFieldByUser(Field field) {
        String sql ="select * from field WHERE username=?";
    return jdbcTemplate.queryForObject(sql, new Object[]{field.getUsername()}, new FieldRowMapper());
    }
}
