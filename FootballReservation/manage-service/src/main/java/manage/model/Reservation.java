package manage.model;

/**
 * Created by LoserGhost on 16/4/2560.
 */
public class Reservation {
    private int reserv_id;
    private String reserv_user;
    private int reserv_field_id;
    private int reserv_ex_id;
    private int reserv_time;
    private String reserv_date;
    private String reserv_status;

    public Reservation(String reserv_user, int reserv_field_id, int reserv_ex_id, int reserv_time, String reserv_date) {
        this.reserv_user = reserv_user;
        this.reserv_field_id = reserv_field_id;
        this.reserv_ex_id = reserv_ex_id;
        this.reserv_time = reserv_time;
        this.reserv_date = reserv_date;
    }

    public Reservation() {
    }

    public int getReserv_id() {
        return reserv_id;
    }

    public void setReserv_id(int reserv_id) {
        this.reserv_id = reserv_id;
    }

    public String getReserv_user() {
        return reserv_user;
    }

    public void setReserv_user(String reserv_user) {
        this.reserv_user = reserv_user;
    }

    public int getReserv_field_id() {
        return reserv_field_id;
    }

    public void setReserv_field_id(int reserv_field_id) {
        this.reserv_field_id = reserv_field_id;
    }

    public int getReserv_ex_id() {
        return reserv_ex_id;
    }

    public void setReserv_ex_id(int reserv_ex_id) {
        this.reserv_ex_id = reserv_ex_id;
    }

    public int getReserv_time() {
        return reserv_time;
    }

    public void setReserv_time(int reserv_time) {
        this.reserv_time = reserv_time;
    }

    public String getReserv_date() {
        return reserv_date;
    }

    public void setReserv_date(String reserv_date) {
        this.reserv_date = reserv_date;
    }

    public String getReserv_status() {
        return reserv_status;
    }

    public void setReserv_status(String reserv_status) {
        this.reserv_status = reserv_status;
    }
}