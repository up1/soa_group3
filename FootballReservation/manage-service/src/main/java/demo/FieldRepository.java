package demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public class FieldRepository {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Transactional(readOnly = true)
    public List<Field> displayAllField(){
        String sql = "select * from field_list";
        List <Field> fields = jdbcTemplate.query(sql, new Object[]{}, new FieldRowMapper());
        return fields;
    }

    @Transactional
    public void save(Field field) {
        String sql = "INSERT INTO USERS(id, firstname, lastname) VALUES (?,?,?)";
        //this.jdbcTemplate.update(sql, user.getId(), user.getFirstname(), user.getLastname());
    }

    public void delete(Long id) {
        String sql = "DELETE FROM USERS WHERE id=?";
        this.jdbcTemplate.update(sql, id);
    }
}
