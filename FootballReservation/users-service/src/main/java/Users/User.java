package Users;

/**
 * Created by mosed on 3/13/2017.
 */
public class User {
    private Long id;
    private String user_name;
    private String fullname;
    private String email;
    private String profile_picture;
    private String user_type;

    public User(){

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUser_name() {
        return user_name;
    }

    public void setUser_name(String user_name) {
        this.user_name = user_name;
    }

    public String getFullName() {
        return fullname;
    }

    public void setFullName(String fullname) {
        this.fullname = fullname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getProfile_picture() {
        return profile_picture;
    }

    public void setProfile_picture(String profile_picture) {
        this.profile_picture = profile_picture;
    }

    public String getUser_Type() {
        return user_type;
    }

    public void setUser_Type(String user_type) {
        this.user_type = user_type;
    }
}
