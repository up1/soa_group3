package demo;

/**
 * By Nattakit 57070033
 */

public class Admin {
    private int user_id;
    private String user_firstname;
    private String user_lastname;
    private String user_address;
    private String user_email;
    private String user_role;


    public Admin(int user_id) {
        this.user_id = user_id;
        this.user_firstname = "user_firstname";
        this.user_lastname = "user_lastname";
        this.user_address = "user_address";
        this.user_email = "user_email";
        this.user_role = "user_role";
    }

    public Admin() {
    	
    }

    public int getUser_id() {
        return user_id;
    }

    public void setUser_id(int user_id) {
        this.user_id = user_id;
    }

    public String getUser_firstname() {
        return user_firstname;
    }

    public void setUser_firstname(String user_name) {
        this.user_firstname = user_name;
    }

    public String getUser_lastname() {
        return user_lastname;
    }

    public void setUser_lastname(String user_lastname) {
        this.user_lastname = user_lastname;
    }

    public String getUser_address() {
        return user_address;
    }

    public void setUser_address(String user_address) {
        this.user_address = user_address;
    }

    public String getUser_email() {
        return user_email;
    }

    public void setUser_email(String user_email) {
        this.user_email = user_email;
    }

    public String getUser_role() {
        return user_role;
    }

    public void setUser_role(String user_role) {
        this.user_role = user_role;
    }
}
