package users;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by mosed on 3/13/2017.
 */
@RestController
@CrossOrigin(origins = "*")
public class UserController {
    private final UserRepository userRepository;

    @Autowired
    public UserController(UserRepository userRepository){ this.userRepository = userRepository; }

    @RequestMapping(value = "/user/{id}",method = RequestMethod.GET)
    public User getUser(@PathVariable int id) {
        return this.userRepository.findById((long) id);
    }

    @RequestMapping(value = "/users",method = RequestMethod.GET)
    public List<User> getUsers(
            @RequestParam(value="page", defaultValue="1") int page,
            @RequestParam(value="item_per_page", defaultValue="10") int itemPerPage) {
        return this.userRepository.findAllUser(page, itemPerPage);
    }

    @RequestMapping(value = "/user" , method = RequestMethod.POST)
    public ResponseEntity loginUser(@RequestBody User user) {
        return  new ResponseEntity(this.userRepository.login(user), HttpStatus.OK);
    }

    @RequestMapping(value = "/user/add", method = RequestMethod.POST)
    public ResponseEntity addUser(@RequestBody User user) {
        this.UserRepository.save(user);
        return new ResponseEntity(HttpStatus.CREATED);
    }

    @RequestMapping(value = "/user/{id}/delete", method = RequestMethod.DELETE)
    public void deleteUser(@PathVariable Long id) {
        this.userRepository.delete(id);
    }

    @RequestMapping(value = "/user/{id}/update", method = RequestMethod.PUT)
    public void updateUser(@RequestBody User user,@PathVariable Long id) {
        this.userRepository.update(user,id);
    }
    
    @RequestMapping(value = "/users/management/{role}",method = RequestMethod.GET)
    public List<User> getUsers(@PathVariable int role) {
        return this.userRepository.findbyRole(role);
    }

}
