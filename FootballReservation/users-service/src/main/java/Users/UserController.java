package Users;

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
    private final UserRepository UserRepository;

    @Autowired
    public UserController(UserRepository UserRepository){ this.UserRepository = UserRepository; }

    @RequestMapping(value = "/user/{id}",method = RequestMethod.GET)
    public User getUser(@PathVariable int id) {
        return this.UserRepository.findById((long) id);
    }

    @RequestMapping(value = "/users",method = RequestMethod.GET)
    public List<User> getUsers(
            @RequestParam(value="page", defaultValue="1") int page,
            @RequestParam(value="item_per_page", defaultValue="10") int itemPerPage) {
        return this.UserRepository.findAllUser(page, itemPerPage);
    }

    @RequestMapping(value = "/user" , method = RequestMethod.POST)
    public ResponseEntity loginUser(@RequestBody User user) {
        return  new ResponseEntity(this.UserRepository.login(user), HttpStatus.OK);
    }

//    @RequestMapping(value = "/user" , method = {RequestMethod.GET, RequestMethod.POST})
//    public ResponseEntity loginUser(@RequestBody User user) {
//        new ResponseEntity("asdf",HttpStatus.ACCEPTED);
//        return  new ResponseEntity(this.UserRepository.login(user), HttpStatus.CREATED);
//    }

    @RequestMapping(value = "/user/add", method = RequestMethod.POST)
    public void addUser(@RequestBody User user) {
        this.UserRepository.save(user);
    }

    @RequestMapping(value = "/user/{id}/delete", method = RequestMethod.DELETE)
    public void deleteUser(@PathVariable Long id) {
        this.UserRepository.delete(id);
    }

    @RequestMapping(value = "/user/{id}/update", method = RequestMethod.PUT)
    public void updateUser(@RequestBody User user,@PathVariable Long id) {
        this.UserRepository.update(user,id);
    }
    @RequestMapping(value = "/users/management/{role}",method = RequestMethod.GET)
    public List<User> getUsers(@PathVariable int role) {
        return this.UserRepository.findbyRole(role);
    }



}
