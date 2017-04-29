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
        List<Field> fields = jdbcTemplate.query(sql, new Object[]{itemPerPage, offset},
                new FieldRowMapper());
        return fields;
    }


    public Field getFieldByID(int field_id) {
        String sql ="select * from field WHERE field_id=?";
        return jdbcTemplate.queryForObject(sql, new Object[]{field_id}, new FieldRowMapper());
    }


    public FieldExtend getFieldEXByID(int field_id, int ex_id) {
        String sql ="select * from field_extend WHERE ex_id=? AND field_id=?";
        return jdbcTemplate.queryForObject(sql, new Object[]{ex_id,field_id}, new FieldExtendRowMapper());
    }

    public List<FieldExtend> getFieldExs(int field_id) {
        String sql ="select * from field_extend WHERE field_id=?";
        return jdbcTemplate.query(sql, new Object[]{field_id}, new FieldExtendRowMapper());
    }
}
