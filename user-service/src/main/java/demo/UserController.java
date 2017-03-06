package demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
public class UserController {

    private final UserRepository userRepository;

    @Autowired
    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @RequestMapping("/user")
    public User getUser(@RequestParam(value="id", defaultValue="1") int id) {
        return this.userRepository.findById((long) id);
    }
    @RequestMapping("/users")
    public List<User> getUsers(
            @RequestParam(value="page", defaultValue="1") int page,
            @RequestParam(value="item_per_page", defaultValue="10") int itemPerPage) {
        return this.userRepository.findAllUser(page, itemPerPage);
    }
}
