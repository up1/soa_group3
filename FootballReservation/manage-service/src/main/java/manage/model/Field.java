package manage.model;

import java.sql.Blob;
import java.util.DoubleSummaryStatistics;


public class Field {
    private int field_id;
    private String field_name;
    private String tel;
    private String price;
    private String location;
    private String email;
    private String website;
    private String detail;
    private String image;
    private int stime;
    private int etime;
    private String username;

    public Field() {
    }

    public Field(String field_name, String tel, String price, String location, String email, String website, String detail, String image, int stime, int etime) {
        this.field_name = field_name;
        this.tel = tel;
        this.price = price;
        this.location = location;
        this.email = email;
        this.website = website;
        this.detail = detail;
        this.image = image;
        this.stime = stime;
        this.etime = etime;
    }

    public int getField_id() {
        return field_id;
    }

    public void setField_id(int field_id) {
        this.field_id = field_id;
    }

    public String getField_name() {
        return field_name;
    }

    public void setField_name(String field_name) {
        this.field_name = field_name;
    }

    public String getTel() {
        return tel;
    }

    public void setTel(String tel) {
        this.tel = tel;
    }


    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getWebsite() {
        return website;
    }

    public void setWebsite(String website) {
        this.website = website;
    }

    public String getDetail() {
        return detail;
    }

    public void setDetail(String detail) {
        this.detail = detail;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public int getStime() {
        return stime;
    }

    public void setStime(int stime) {
        this.stime = stime;
    }

    public int getEtime() {
        return etime;
    }

    public void setEtime(int etime) {
        this.etime = etime;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}
