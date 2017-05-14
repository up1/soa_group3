package reserv;

public class Reserv {
    private int reservId;
    private String reservUser;
    private int reservFieldId;
    private int reservExId;
    private int reservStartTime;
    private int reservEndTime;
    private String reservDate;
    private String reservStatus;

    public Reserv(String reservUser, int reservFieldId, int reservExId, int reservStartTime, int reservEndTime, String reservDate) {
        this.reservUser = reservUser;
        this.reservFieldId = reservFieldId;
        this.reservExId = reservExId;
        this.reservStartTime = reservStartTime;
        this.reservEndTime = reservEndTime;
        this.reservDate = reservDate;
    }

    public int getReservId() {
        return reservId;
    }

    public void setReservId(int reservId) {
        this.reservId = reservId;
    }

    public String getReservUser() {
        return reservUser;
    }

    public void setReservUser(String reservUser) {
        this.reservUser = reservUser;
    }

    public int getReservFieldId() {
        return reservFieldId;
    }

    public void setReservFieldId(int reservFieldId) {
        this.reservFieldId = reservFieldId;
    }

    public int getReservExId() {
        return reservExId;
    }

    public void setReservExId(int reservExId) {
        this.reservExId = reservExId;
    }

    public int getReservStartTime() {
        return reservStartTime;
    }

    public void setReservStartTime(int reservStartTime) {
        this.reservStartTime = reservStartTime;
    }

    public int getReservEndTime() {
        return reservEndTime;
    }

    public void setReservEndTime(int reservEndTime) {
        this.reservEndTime = reservEndTime;
    }

    public String getReservDate() {
        return reservDate;
    }

    public void setReservDate(String reservDate) {
        this.reservDate = reservDate;
    }

    public String getReservStatus() {
        return reservStatus;
    }

    public void setReservStatus(String reservStatus) {
        this.reservStatus = reservStatus;
    }
}