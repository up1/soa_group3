package reserv;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class ReservController {

    private final ReservRepository reservRepository;

    @Autowired
    public ReservController(ReservRepository reservRepository){ this.reservRepository = reservRepository; }

    @RequestMapping("/reserv")
    public Reserv getReserv(@RequestParam(value = "id", defaultValue = "1" ) int reserv_id){
        return this.reservRepository.findById((long) reserv_id);
    }

}
