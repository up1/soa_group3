package demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * By Nattakit 57070033
 */

@RestController
@CrossOrigin(origins = "*")
public class AdminController {

    private final AdminRepository adminRepository;

    @Autowired
    public AdminController(AdminRepository adminRepository) {
        this.adminRepository = adminRepository;
    }

    @RequestMapping(value = "/admin/management/{role}",method = RequestMethod.GET)
    public List<User> getUsers(@PathVariable int role) {
        return this.adminRepository.findbyRole(role);
    }

    @RequestMapping(value = "/admin", method = RequestMethod.GET)
    public List<User> getUsers(
            @RequestParam(value="page", defaultValue="1") int page,
            @RequestParam(value="item_per_page", defaultValue="10") int itemPerPage) {
        return this.adminRepository.queryUsers(page, itemPerPage);
    }
    
    @RequestMapping(value = "/admin/{user_id}/delete", method = RequestMethod.DELETE)
    public ResponseEntity cancelUser(@PathVariable String user_id) {
        adminRepository.deleteUser(Integer.valueOf(user_id));
        return new ResponseEntity(HttpStatus.OK);
    }

    @RequestMapping(value = "/admin/{user_id}/changerole", method = RequestMethod.PUT)
    public ResponseEntity updateRole(@PathVariable int user_id) {
        adminRepository.changeRole(Integer.valueOf(user_id));
        return new ResponseEntity(HttpStatus.OK);
    }
}
