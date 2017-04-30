package manage;

import manage.model.Field;
import manage.model.FieldExtend;
import manage.exception.*;
import manage.model.Reservation;
import manage.rowmapper.FieldExtendRowMapper;
import manage.rowmapper.FieldRowMapper;
import manage.rowmapper.ReservationRowMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;

@Repository
public class ManageRepository {


    @Autowired
    private JdbcTemplate jdbcTemplate;

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

    public List<FieldExtend> getFieldEx(int ex_id) {
        String sql ="select * from field_extend WHERE ex_id=?";
        return jdbcTemplate.query(sql, new Object[]{ex_id}, new FieldExtendRowMapper());
    }

    public void updateField(Field field, Long id){
        String sql = "UPDATE field SET field_name = ? ,tel = ? ,price_range = ?,location = ?,email = ?" +
                ",website = ?,detail = ?,image = ?,stime = ?,etime = ? WHERE field_id= ?";
        this.jdbcTemplate.update(sql, field.getField_name(),field.getTel(),field.getPrice(),
                field.getLocation(),field.getEmail(),field.getWebsite(),field.getDetail(),
                field.getImage(),field.getStime(),field.getEtime(), id);
    }

    public void updateFieldex(FieldExtend fieldex, Long id){
        String sql = "UPDATE field_extend SET fieldex_name = ? ,rent = ? ,image = ?,size = ?,floor = ? WHERE ex_id= ?";
        this.jdbcTemplate.update(sql, fieldex.getFieldex_name(),fieldex.getRent(),fieldex.getImage(),
                fieldex.getSize(),fieldex.getFloor(), id);
    }

    @Transactional
    public void saveEx(FieldExtend ex) {
        String sql = "INSERT INTO field_extend(field_id, fieldex_name, rent, image, size, floor) VALUES (?,?,?,?,?,?)";
        this.jdbcTemplate.update(sql,ex.getField_id(), ex.getFieldex_name(),ex.getRent(), ex.getImage(),ex.getSize(),ex.getFloor());
    }

    public void deleteEx(Long id) {
        String sql = "DELETE FROM field_extend WHERE ex_id=?";
        this.jdbcTemplate.update(sql, id);
    }

    @Transactional(readOnly = true)
    public Reservation getReservByID(int reserv_id) {
        try {
            return this.jdbcTemplate.queryForObject("SELECT * FROM reservation WHERE reservation_id=?",
                    new Object[]{reserv_id},new ReservationRowMapper());
        }catch (Exception ex){
            throw new ReservNotFoundException(reserv_id);
        }
    }

    @Transactional(readOnly = true)
    public List<Reservation> findByFilter(String field_id, String ex_id) {
        if(field_id == null && ex_id == null) {
            throw new ManageException();
        }
        else if(field_id != null && ex_id != null){
            return this.jdbcTemplate.query("SELECT * FROM reservation WHERE reservation_field_id=? AND reservation_ex_id=?",
                    new Object[]{field_id,ex_id}, new ReservationRowMapper());
        }else if(field_id != null){
            return this.jdbcTemplate.query("SELECT * FROM reservation WHERE reservation_field_id=?",
                    new Object[]{field_id}, new ReservationRowMapper());
        }else{
            return this.jdbcTemplate.query("SELECT * FROM reservation WHERE reservation_ex_id=?",
                    new Object[]{ex_id}, new ReservationRowMapper());
        }
    }


    @Transactional
    public void confirmReserv(int reserv_id){
        String sql = "UPDATE reserv SET reserv_status='confirm' WHERE reserv_id=?;";
        try {
            this.jdbcTemplate.update(sql,reserv_id);
        }catch (Exception ex){
            throw new ReservNotFoundException(reserv_id);
        }
    }

    @Transactional
    public void deleteReserv(int reserv_id) {
        String sql = "DELETE FROM reserv WHERE reserv_id=?;";
        try {
            this.jdbcTemplate.update(sql, reserv_id);
        }catch (Exception ex){
            throw new ReservNotFoundException(reserv_id);
        }
    }

    //Customer already paid
    @Transactional
    public void cancelReserv(int reserv_id) {
        String sql = "UPDATE reserv SET reserv_status='cancel' WHERE reserv_id=?;";
        try {
            this.jdbcTemplate.update(sql,reserv_id);
        }catch (Exception ex) {
            throw new ReservNotFoundException(reserv_id);
        }
    }
}
