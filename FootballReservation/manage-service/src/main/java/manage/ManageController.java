package manage;

import java.util.List;

import manage.model.Field;
import manage.model.FieldExtend;
import manage.model.Reservation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
public class ManageController {

    private final ManageRepository manageRepository;

    @Autowired
    public ManageController(ManageRepository manageRepository) {
        this.manageRepository = manageRepository;
    }


    @RequestMapping(value = "/field", method = RequestMethod.GET)
    public Field getField( @RequestParam(value = "field_id") int fieldId) {
        return this.manageRepository.getFieldByID(fieldId);
    }

    @RequestMapping(value = "/field/{fieldId}/{exId}", method = RequestMethod.GET)
    public FieldExtend getFieldEx(@PathVariable int fieldId,
                                  @PathVariable int exId) {
        return this.manageRepository.getFieldEXByID(fieldId,exId);
    }

    @RequestMapping(value = "/field/{fieldId}", method = RequestMethod.GET)
    public List<FieldExtend> getFieldExs(@PathVariable int fieldId) {
        return this.manageRepository.getFieldExs(fieldId);
    }

    @RequestMapping(value = "/field_ex/{exId}", method = RequestMethod.GET)
    public List<FieldExtend> getFieldEx(@PathVariable int exId) {
        return this.manageRepository.getFieldEx(exId);
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
            @RequestParam(value = "field_id", required = false) String fieldId,
            @RequestParam(value = "ex_id", required = false) String exId){
        return this.manageRepository.findByFilter(fieldId,exId);
    }

    @RequestMapping(value = "/reservation/{reservationId}", method = RequestMethod.GET)
    public Reservation getReservByID(@PathVariable int reservationId) {
        return manageRepository.getReservByID(reservationId);
    }


    @RequestMapping(value = "/reservation/{reservationId}/confirm", method = RequestMethod.PUT)
    public ResponseEntity confirmReserv(@PathVariable int reservationId) {
        manageRepository.confirmReserv(reservationId);
        return new ResponseEntity(HttpStatus.OK);
    }

    //Customer already paid
    @RequestMapping(value = "/reservation/{reservationId}/cancel", method = RequestMethod.PUT)
    public ResponseEntity cancelReserv(@PathVariable int reservationId) {
        manageRepository.cancelReserv(reservationId);
        return new ResponseEntity(HttpStatus.OK);
    }


    @RequestMapping(value = "/reserv/{reservId}/delete", method = RequestMethod.DELETE)
    public ResponseEntity deleteReserv(@PathVariable int reservId) {
        manageRepository.deleteReserv(reservId);
        return new ResponseEntity(HttpStatus.OK);
    }
}
