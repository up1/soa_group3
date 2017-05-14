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
    public Reserv getReservByID(int reservId) {
        try {
            return this.jdbcTemplate.queryForObject("SELECT * FROM RESERVATION WHERE reservation_id=?",
                    new Object[]{reservId},new ReservRowMapper());
        }catch (Exception ex){
            throw new ReservNotFoundException(ex);
        }
    }

    @Transactional(readOnly = true)
    public List<Reserv> findByPage(int page, int itemPerPage) {
        int offset = (page-1) * itemPerPage;
        return this.jdbcTemplate.query("SELECT * FROM RESERVATION WHERE reservation_id ORDER BY reservation_id LIMIT ? OFFSET ?",
                new Object[]{itemPerPage,offset},new ReservRowMapper());
    }

    @Transactional(readOnly = true)
    public List<Reserv> findByFilter(String date,int userId) {
        if(date == null && userId < 1) {
            LocalDate localDate = LocalDate.now();
            return this.jdbcTemplate.query("SELECT * FROM RESERVATION WHERE reservation_date>?",
                    new Object[]{dtf.format(localDate)}, new ReservRowMapper());
        }
        else if(date != null && userId > 0){
            return this.jdbcTemplate.query("SELECT * FROM RESERVATION WHERE reservation_date=? AND reservation_user_id=?",
                    new Object[]{date,userId}, new ReservRowMapper());
        }else if(date != null){
            return this.jdbcTemplate.query("SELECT * FROM RESERVATION WHERE reservation_date=?",
                    new Object[]{date}, new ReservRowMapper());
        }else{
            return this.jdbcTemplate.query("SELECT * FROM RESERVATION WHERE reservation_user_id=?",
                    new Object[]{userId}, new ReservRowMapper());
        }
    }

    @Transactional
    public void doReserv(Reserv reserv){
        String sql = "INSERT INTO RESERVATION" +
                "(reservation_user_id, reservation_field_id, reservation_ex_id, reservation_start_time, reservation_end_time, reservation_date)" +
                "VALUES(?,?,?,?,?,?);";
        try {
            this.jdbcTemplate.update(sql, reserv.getReservUserId(), reserv.getReservFieldId(),
                    reserv.getReservExId(), reserv.getReservStartTime(), reserv.getReservEndTime(), reserv.getReservDate());
        }catch (Exception ex){
            throw new AlreadyReservException(ex);
        }

    }

    @Transactional
    public void confirmReserv(int reservId){
        String sql = "UPDATE RESERVATION SET reservation_status='confirm' WHERE reservation_id=?;";
        try {
            this.jdbcTemplate.update(sql,reservId);
        }catch (Exception ex){
            throw new ReservNotFoundException(ex);
        }
    }

    @Transactional
    public void deleteReserv(int reservId) {
        String sql = "DELETE FROM RESERVATION WHERE reservation_id=?;";
        try {
            this.jdbcTemplate.update(sql, reservId);
        }catch (Exception ex){
            throw new ReservNotFoundException(ex);
        }
    }

    //Customer already paid
    @Transactional
    public void cancelReserv(int reservId) {
        String sql = "UPDATE RESERVATION SET reservation_status='cancel' WHERE reservation_id=?;";
        try {
            this.jdbcTemplate.update(sql,reservId);
        }catch (Exception ex) {
            throw new ReservNotFoundException(ex);
        }
    }
}
