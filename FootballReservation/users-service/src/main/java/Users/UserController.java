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

    @RequestMapping("/user/{id}")
    public User getUser(@PathVariable int id) {
        return this.UserRepository.findById((long) id);
    }
    @RequestMapping("/users")
    public List<User> getUsers(
            @RequestParam(value="page", defaultValue="1") int page,
            @RequestParam(value="item_per_page", defaultValue="10") int itemPerPage) {
        return this.UserRepository.findAllUser(page, itemPerPage);
    }
    @RequestMapping("/user")
    public User loginUser(
            @RequestParam(value="username") String username,
            @RequestParam(value="password") String password) {
        return this.UserRepository.login(username,password);
    }

    @RequestMapping("/user/add")
    public void addUser(User user) {
        this.UserRepository.save(user);
    }

    @RequestMapping("/user/{id}/delete")
    public void deleteUser(@PathVariable Long id) {
        this.UserRepository.delete(id);
    }

    @RequestMapping("/user/{id}/update")
    public void updateUser(User user,@PathVariable Long id) {
        this.UserRepository.update(user,id);
    }



}
