package Users.jwt;


public class Jwt {
    private String username;
    private String role;

    public Jwt(String username, String role) {
        this.username = username;
        this.role = role;
    }

    public Jwt() {

    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

}
