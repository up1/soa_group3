package reserv;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public class ReservRepository {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Transactional(readOnly = true)
    public Reserv findById(Long reserv_id){
        try {
            return this.jdbcTemplate.queryForObject("SELECT * FROM reserv WHERE reserv_id=?", new Object[]{reserv_id}, new ReservRowMapper());
        }catch (Exception ex){
            throw new ReservNotFoundException(reserv_id);
        }
    }
}
