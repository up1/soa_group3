package manage.rowmapper;

import manage.model.Reservation;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class ReservationRowMapper implements RowMapper<Reservation> {

    @Override
    public Reservation mapRow(ResultSet resultSet, int i) throws SQLException {
        Reservation reserv = new Reservation();
        reserv.setReserv_id(resultSet.getInt("reservation_id"));
        reserv.setReserv_user(resultSet.getString("reservation_user"));
        reserv.setReserv_field_id(resultSet.getInt("reservation_field_id"));
        reserv.setReserv_ex_id(resultSet.getInt("reservation_ex_id"));
        reserv.setReserv_time(resultSet.getInt("reservation_time"));
        reserv.setReserv_date(resultSet.getString("reservation_date"));
        reserv.setReserv_status(resultSet.getString("reservation_status"));
        return reserv;
    }
}
