package Users;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by mosed on 3/13/2017.
 */
@RestController
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
    @RequestMapping(value = "/user" , method = {RequestMethod.GET, RequestMethod.POST})
    public User loginUser(
            @RequestParam(value="username") String username,
            @RequestParam(value="password") String password) {
        return this.UserRepository.login(username,password);
    }

    @RequestMapping(value = "/user/add", method = RequestMethod.POST)
    public void addUser(@RequestBody User user) {
        this.UserRepository.save(user);
    }

    @RequestMapping(value = "/user/{id}/delete", method = RequestMethod.DELETE)
    public void deleteUser(@PathVariable Long id) {
        this.UserRepository.delete(id);
    }

    @RequestMapping(value = "/user/{id}/update", method = RequestMethod.PUT)
    public void updateUser(User user,@PathVariable Long id) {
        this.UserRepository.update(user,id);
    }



}