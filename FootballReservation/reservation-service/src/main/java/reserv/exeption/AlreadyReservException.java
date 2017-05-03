package reserv.exeption;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;
import reserv.Reserv;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class AlreadyReservException extends RuntimeException{
    public AlreadyReservException(Reserv reserv) {
        super("Cant reserv field " + reserv.getReserv_field_id() +" ex "+ reserv.getReserv_ex_id() +
                " time "+reserv.getReserv_start_time()+" - "+reserv.getReserv_end_time()+" date "+ reserv.getReserv_date());
    }
}
