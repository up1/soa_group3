package reserv;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class ReservController {

    private final ReservRepository reservRepository;

    @Autowired
    public ReservController(ReservRepository reservRepository){ this.reservRepository = reservRepository; }

    @RequestMapping(value = "/reserv", method = RequestMethod.GET)
    public Reserv getReserv(
            @RequestParam(value = "id", defaultValue = "1" ) int reserv_id){
        return this.reservRepository.findById((long) reserv_id);
    }

    @RequestMapping(value = "/reservs", method = RequestMethod.GET)
    public List<Reserv> getReseervs(
            @RequestParam(value = "page", defaultValue = "1") int page,
            @RequestParam(value = "item_per_page", defaultValue = "10") int itemPerPage) {
        return this.reservRepository.findByPage(page, itemPerPage);
    }
    @RequestMapping(value = "/reserv/filter", method = RequestMethod.GET)
    public List<Reserv> getReseervByDate(
            @RequestParam(value = "date", required = false) String date,
            @RequestParam(value = "user", required = false) String user){
        return this.reservRepository.findByFilter(date,user);
    }






    @RequestMapping(value = "/reserv/{reserv_id}/confirm", method = RequestMethod.PUT)
    public ResponseEntity putReserv(@PathVariable int reserv_id) {
        reservRepository.confirmReserv(reserv_id);
        return new ResponseEntity(HttpStatus.OK);
    }

    @RequestMapping(value = "/reserv/{reserv_id}/delete", method = RequestMethod.DELETE)
    public ResponseEntity deleteReserv(@PathVariable int reserv_id) {
        reservRepository.deleteReserv(reserv_id);
        return new ResponseEntity(HttpStatus.OK);
    }

    @RequestMapping(value = "/reserv", method = RequestMethod.POST)
    public ResponseEntity postReserv(@RequestBody Reserv reserv) {
        if(reserv != null) {
            reservRepository.doReserv(reserv);
        }
        else {
            System.out.print("Null");
        }
        return new ResponseEntity(HttpStatus.CREATED);
    }


}
