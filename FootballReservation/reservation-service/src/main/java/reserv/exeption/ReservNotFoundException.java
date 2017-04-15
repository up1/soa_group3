package reserv.exeption;


import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class ReservNotFoundException extends RuntimeException{
    public ReservNotFoundException(int user) {
        super("Could not find user " + user);
    }
}
