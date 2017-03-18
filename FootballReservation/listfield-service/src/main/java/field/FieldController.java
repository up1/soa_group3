package field;

import field.model.Field;
import field.model.Field_extend;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by phossawatpruekphanasant on 3/7/2017 AD.
 */
@RestController
@CrossOrigin(origins = "*")
public class FieldController {
    private final FieldRepository fieldRepository;

    @Autowired
    public FieldController(FieldRepository filedRepository) {
        this.fieldRepository = filedRepository;
    }

    @RequestMapping(value = "/field", method = RequestMethod.GET)
    public List<Field> getFields(
            @RequestParam(value = "page", defaultValue = "1") int page,
            @RequestParam(value = "item_per_page", defaultValue = "10") int itemPerPage) {
        return this.fieldRepository.queryFields(page, itemPerPage);
    }

    @RequestMapping(value = "/field/{field_id}", method = RequestMethod.GET)
    public Field getField(@PathVariable int field_id) {
        return this.fieldRepository.getFieldByID(field_id);
    }

    @RequestMapping(value = "/field/{field_id}/{ex_id}", method = RequestMethod.GET)
    public Field_extend getFieldEx(@PathVariable int field_id,
                                   @PathVariable int ex_id) {
        return this.fieldRepository.getFieldEXByID(field_id,ex_id);
    }

    @RequestMapping(value = "/field/{field_id}/ex", method = RequestMethod.GET)
    public List<Field_extend> getFieldExs(@PathVariable int field_id) {
        return this.fieldRepository.getFieldExs(field_id);
    }

}
