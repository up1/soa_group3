package field;

import field.model.Field;
import field.model.FieldExtend;
import org.springframework.beans.factory.annotation.Autowired;
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

    @RequestMapping(value = "/listfield", method = RequestMethod.GET)
    public List<Field> getFields(
            @RequestParam(value = "page", defaultValue = "1") int page,
            @RequestParam(value = "item_per_page", defaultValue = "10000") int itemPerPage) {
        return this.fieldRepository.queryFields(page, itemPerPage);
    }

    @RequestMapping(value = "/field", method = RequestMethod.GET)
    public Field getField( @RequestParam(value = "fieldId") int fieldId) {
        return this.fieldRepository.getFieldByID(fieldId);
    }


    @RequestMapping(value = "/field/{fieldId}/{exId}", method = RequestMethod.GET)
    public FieldExtend getFieldEx(@PathVariable int fieldId,
                                  @PathVariable int exId) {
        return this.fieldRepository.getFieldEXByID(fieldId,exId);
    }

    @RequestMapping(value = "/field/{fieldId}", method = RequestMethod.GET)
    public List<FieldExtend> getFieldExs(@PathVariable int fieldId) {
        return this.fieldRepository.getFieldExs(fieldId);
    }

    @RequestMapping(value = "/fieldmanage", method = RequestMethod.POST)
        public Field getFieldByUser(@RequestBody Field field) {
        return this.fieldRepository.getFieldByUser(field);
    }

}
