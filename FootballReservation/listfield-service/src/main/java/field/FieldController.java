package field;

import field.model.Field;
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

    @RequestMapping(value = "/fields", method = RequestMethod.GET)
    public List<Field> getFields(
            @RequestParam(value = "page", defaultValue = "1") int page,
            @RequestParam(value = "item_per_page", defaultValue = "10") int itemPerPage) {
        return this.fieldRepository.queryFields(page, itemPerPage);
    }

	@RequestMapping(value = "/fields/add", method = RequestMethod.POST)
    public ResponseEntity postFields(
            @RequestBody Field field){
        fieldRepository.addField(field);
        return new ResponseEntity(HttpStatus.CREATED);
    }

}
