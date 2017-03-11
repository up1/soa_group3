package reserv;


import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class ReservNotFoundException extends RuntimeException{
    public ReservNotFoundException(Long id) {
        super("Could not find reserv " + id);
    }
}
