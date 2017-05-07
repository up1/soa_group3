package reserv;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import reserv.exeption.AlreadyReservException;
import reserv.exeption.ReservNotFoundException;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;

@Repository
public class ReservRepository {

    DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd");

    @Autowired
    private JdbcTemplate jdbcTemplate;


    @Transactional(readOnly = true)
    public Reserv getReservByID(int reserv_id) {
        try {
            return this.jdbcTemplate.queryForObject("SELECT * FROM RESERVATION WHERE reservation_id=?",
                    new Object[]{reserv_id},new ReservRowMapper());
        }catch (Exception ex){
            throw new ReservNotFoundException(reserv_id);
        }
    }

    @Transactional(readOnly = true)
    public List<Reserv> findByPage(int page, int itemPerPage) {
        int offset = (page-1) * itemPerPage;
        return this.jdbcTemplate.query("SELECT * FROM RESERVATION WHERE reservation_id ORDER BY reservation_id LIMIT ? OFFSET ?",
                new Object[]{itemPerPage,offset},new ReservRowMapper());
    }

    @Transactional(readOnly = true)
    public List<Reserv> findByFilter(String date,int user_id) {
        if(date == null && user_id < 1) {
            LocalDate localDate = LocalDate.now();
            return this.jdbcTemplate.query("SELECT * FROM RESERVATION WHERE reservation_date>?",
                    new Object[]{dtf.format(localDate)}, new ReservRowMapper());
        }
        else if(date != null && user_id > 0){
            return this.jdbcTemplate.query("SELECT * FROM RESERVATION WHERE reservation_date=? AND reservation_user_id=?",
                    new Object[]{date,user_id}, new ReservRowMapper());
        }else if(date != null){
            return this.jdbcTemplate.query("SELECT * FROM RESERVATION WHERE reservation_date=?",
                    new Object[]{date}, new ReservRowMapper());
        }else{
            return this.jdbcTemplate.query("SELECT * FROM RESERVATION WHERE reservation_user_id=?",
                    new Object[]{user_id}, new ReservRowMapper());
        }
    }

    @Transactional
    public void doReserv(Reserv reserv){
        String sql = "INSERT INTO RESERVATION" +
                "(reservation_user_id, reservation_field_id, reservation_ex_id, reservation_start_time, reservation_end_time, reservation_date)" +
                "VALUES(?,?,?,?,?,?);";
        try {
            this.jdbcTemplate.update(sql, reserv.getReserv_user_id(), reserv.getReserv_field_id(),
                    reserv.getReserv_ex_id(), reserv.getReserv_start_time(), reserv.getReserv_end_time(), reserv.getReserv_date());
        }catch (Exception ex){
            throw new AlreadyReservException(reserv);
        }

    }

    @Transactional
    public void confirmReserv(int reserv_id){
        String sql = "UPDATE RESERVATION SET reservation_status='confirm' WHERE reservation_id=?;";
        try {
            this.jdbcTemplate.update(sql,reserv_id);
        }catch (Exception ex){
            throw new ReservNotFoundException(reserv_id);
        }
    }

    @Transactional
    public void deleteReserv(int reserv_id) {
        String sql = "DELETE FROM RESERVATION WHERE reservation_id=?;";
        try {
            this.jdbcTemplate.update(sql, reserv_id);
        }catch (Exception ex){
            throw new ReservNotFoundException(reserv_id);
        }
    }

    //Customer already paid
    @Transactional
    public void cancelReserv(int reserv_id) {
        String sql = "UPDATE RESERVATION SET reservation_status='cancel' WHERE reservation_id=?;";
        try {
            this.jdbcTemplate.update(sql,reserv_id);
        }catch (Exception ex) {
            throw new ReservNotFoundException(reserv_id);
        }
    }
}
