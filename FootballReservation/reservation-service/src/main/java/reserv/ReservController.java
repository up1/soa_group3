package reserv;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
public class ReservController {

    private final ReservRepository reservRepository;

    @Autowired
    public ReservController(ReservRepository reservRepository){ this.reservRepository = reservRepository; }

    @RequestMapping(value = "/reservation", method = RequestMethod.GET)
    public List<Reserv> getReseervByDate(
            @RequestParam(value = "date", required = false) String date,
            @RequestParam(value = "user_id", required = false) int userId){
        return this.reservRepository.findByFilter(date,userId);
    }

    @RequestMapping(value = "/reservations", method = RequestMethod.GET)
    public List<Reserv> getReseervs(
            @RequestParam(value = "page", defaultValue = "1") int page,
            @RequestParam(value = "item_per_page", defaultValue = "30") int itemPerPage) {
        return this.reservRepository.findByPage(page, itemPerPage);
    }

    @RequestMapping(value = "/reservation/{reservationId}", method = RequestMethod.GET)
    public Reserv getReservByID(@PathVariable int reservationId) {
        return reservRepository.getReservByID(reservationId);
    }

    @RequestMapping(value = "/reservation/{reservationId}/confirm", method = RequestMethod.PUT)
    public ResponseEntity confirmReserv(@PathVariable int reservationId) {
        reservRepository.confirmReserv(reservationId);
        return new ResponseEntity(HttpStatus.OK);
    }

    //Customer already paid
    @RequestMapping(value = "/reservation/{reservationId}/cancel", method = RequestMethod.PUT)
    public ResponseEntity cancelReserv(@PathVariable int reservationId) {
        reservRepository.cancelReserv(reservationId);
        return new ResponseEntity(HttpStatus.OK);
    }


    @RequestMapping(value = "/reserv/{reservId}/delete", method = RequestMethod.DELETE)
    public ResponseEntity deleteReserv(@PathVariable int reservId) {
        reservRepository.deleteReserv(reservId);
        return new ResponseEntity(HttpStatus.OK);
    }

    @RequestMapping(value = "/reserv", method = RequestMethod.POST)
    public ResponseEntity postReserv(@RequestBody Reserv reserv) {
        reservRepository.doReserv(reserv);
        return new ResponseEntity(HttpStatus.CREATED);
    }


}
