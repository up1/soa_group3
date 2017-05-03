package reserv;

import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class ReservRowMapper implements RowMapper<Reserv> {

    @Override
    public Reserv mapRow(ResultSet resultSet, int i) throws SQLException {
        Reserv reserv = new Reserv();
        reserv.setReserv_id(resultSet.getInt("reservation_id"));
        reserv.setReserv_user(resultSet.getString("reservation_user"));
        reserv.setReserv_field_id(resultSet.getInt("reservation_field_id"));
        reserv.setReserv_ex_id(resultSet.getInt("reservation_ex_id"));
        reserv.setReserv_start_time(resultSet.getInt("reservation_start_time"));
        reserv.setReserv_end_time(resultSet.getInt("reservation_end_time"));
        reserv.setReserv_date(resultSet.getString("reservation_date"));
        reserv.setReserv_status(resultSet.getString("reservation_status"));
        return reserv;
    }
}
