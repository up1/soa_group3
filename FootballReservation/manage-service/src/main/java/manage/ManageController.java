package manage;

import java.util.List;

import manage.model.Field;
import manage.model.FieldExtend;
import manage.model.Reservation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@RestController
@CrossOrigin(origins = "*")
public class ManageController {

    private final ManageRepository manageRepository;

    @Autowired
    public ManageController(ManageRepository manageRepository) {
        this.manageRepository = manageRepository;
    }


    @RequestMapping(value = "/field", method = RequestMethod.GET)
    public Field getField( @RequestParam(value = "field_id") int field_id) {
        return this.manageRepository.getFieldByID(field_id);
    }

    @RequestMapping(value = "/field/{field_id}/{ex_id}", method = RequestMethod.GET)
    public FieldExtend getFieldEx(@PathVariable int field_id,
                                  @PathVariable int ex_id) {
        return this.manageRepository.getFieldEXByID(field_id,ex_id);
    }

    @RequestMapping(value = "/field/{field_id}", method = RequestMethod.GET)
    public List<FieldExtend> getFieldExs(@PathVariable int field_id) {
        return this.manageRepository.getFieldExs(field_id);
    }

    @RequestMapping(value = "/field_ex/{ex_id}", method = RequestMethod.GET)
    public List<FieldExtend> getFieldEx(@PathVariable int ex_id) {
        return this.manageRepository.getFieldEx(ex_id);
    }

    @RequestMapping(value = "/field/{id}/update", method = RequestMethod.PUT)
    public void updateField(Field field,@PathVariable Long id) {
        this.manageRepository.updateField(field,id);
    }

    @RequestMapping(value = "/field_ex/{id}/update", method = RequestMethod.PUT)
    public void updateFieldEx(@RequestBody FieldExtend fieldex,@PathVariable Long id) {
        this.manageRepository.updateFieldex(fieldex,id);
    }

    @RequestMapping(value = "/field_ex/add", method = RequestMethod.POST)
    public void addfieldex(@RequestBody FieldExtend fieldExtend) {
        this.manageRepository.saveEx(fieldExtend);
    }

    @RequestMapping(value = "/field_ex/{id}/delete", method = RequestMethod.DELETE)
    public void deleteExfield(@PathVariable Long id) {
        this.manageRepository.deleteEx(id);
    }

    @RequestMapping(value = "/reservation", method = RequestMethod.GET)
    public List<Reservation> getReseervByDate(
            @RequestParam(value = "field_id", required = false) String field_id,
            @RequestParam(value = "ex_id", required = false) String ex_id){
        return this.manageRepository.findByFilter(field_id,ex_id);
    }

    @RequestMapping(value = "/reservation/{reservation_id}", method = RequestMethod.GET)
    public Reservation getReservByID(@PathVariable int reservation_id) {
        return manageRepository.getReservByID(reservation_id);
    }


    @RequestMapping(value = "/reservation/{reservation_id}/confirm", method = RequestMethod.PUT)
    public ResponseEntity confirmReserv(@PathVariable int reservation_id) {
        manageRepository.confirmReserv(reservation_id);
        return new ResponseEntity(HttpStatus.OK);
    }

    //Customer already paid
    @RequestMapping(value = "/reservation/{reservation_id}/cancel", method = RequestMethod.PUT)
    public ResponseEntity cancelReserv(@PathVariable int reservation_id) {
        manageRepository.cancelReserv(reservation_id);
        return new ResponseEntity(HttpStatus.OK);
    }


    @RequestMapping(value = "/reserv/{reserv_id}/delete", method = RequestMethod.DELETE)
    public ResponseEntity deleteReserv(@PathVariable int reserv_id) {
        manageRepository.deleteReserv(reserv_id);
        return new ResponseEntity(HttpStatus.OK);
    }
}
