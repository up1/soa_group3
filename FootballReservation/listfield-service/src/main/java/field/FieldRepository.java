package field;

import field.model.Field;
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
    public void addField(Field field){
        String sql = "insert into field values(null, ?, ?, ?, ?, ?)";
        jdbcTemplate.update(sql, field.getField_image(),
                field.getField_name(),
                field.getField_country(),
                field.getField_type(),
                field.getField_price());
    }
    public void deleteField(Integer field_id){
        String sql = "DELETE FROM field WHERE field_id = ?";
        jdbcTemplate.update(sql, field_id);
    }


}
