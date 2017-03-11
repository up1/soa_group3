package reserv;

import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class ReservRowMapper implements RowMapper<Reserv> {

    @Override
    public Reserv mapRow(ResultSet resultSet, int i) throws SQLException {
        Reserv reserv = new Reserv();
        reserv.setReserv_id(resultSet.getInt("reserv_id"));
        reserv.setReserv_user(resultSet.getString("reserv_user"));
        reserv.setReserv_field_id(resultSet.getInt("reserv_field_id"));
        reserv.setReserv_ex_id(resultSet.getInt("reserv_ex_id"));
        reserv.setReserv_time(resultSet.getInt("reserv_time"));
        reserv.setReserv_date(resultSet.getString("reserv_date"));
        reserv.setReserv_status(resultSet.getString("reserv_status"));
        return reserv;
    }
}
