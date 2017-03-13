package demo;


public class Field {
    private long stadium_id;
    private long field_no;
    private String field_name;
    private int field_size;
    private String field_description;

    public Field(int id) {
        this.stadium_id = stadium_id;
        this.field_no = field_no;
        this.field_name = field_name;
        this.field_size = field_size;
        this.field_description = field_description;
    }

    public Field() {

    }

    public long getStadium_id() {
        return stadium_id;
    }

    public void setStadium_id(long stadium_id) {
        this.stadium_id = stadium_id;
    }

    public long getField_no() {
        return field_no;
    }

    public void setField_no(long field_no) {
        this.field_no = field_no;
    }

    public String getField_name() {
        return field_name;
    }

    public void setField_name(String field_name) {
        this.field_name = field_name;
    }

    public int getField_size() {
        return field_size;
    }

    public void setField_size(int field_size) {
        this.field_size = field_size;
    }

    public String getField_description() {
        return field_description;
    }

    public void setField_description(String field_description) {
        this.field_description = field_description;
    }
}
