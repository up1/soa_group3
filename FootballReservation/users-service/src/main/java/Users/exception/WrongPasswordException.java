package Users.exception;

/**
 * Created by I3lackJacK on 3/5/2560.
 */
public class WrongPasswordException extends RuntimeException{
    public WrongPasswordException(){
        super("Wrong password please try again.");
    }
}
