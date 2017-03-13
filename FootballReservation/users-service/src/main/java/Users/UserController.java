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

    @RequestMapping("/user")
    public User getUser(@RequestParam(value="id", defaultValue="1") int id) {
        return this.UserRepository.findById((long) id);
    }
    @RequestMapping("/users")
    public List<User> getUsers(
            @RequestParam(value="page", defaultValue="1") int page,
            @RequestParam(value="item_per_page", defaultValue="10") int itemPerPage) {
        return this.UserRepository.findAllUser(page, itemPerPage);
    }

    @RequestMapping("/user/add")
    public void addUser(User user) {
        this.UserRepository.save(user);
    }

    @RequestMapping("/user/delete")
    public void addUser(Long id) {
        this.UserRepository.delete(id);
    }

    @RequestMapping("/user/update")
    public void addUser(User user,Long id) {
        this.UserRepository.update(user,id);
    }



}
