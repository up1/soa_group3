package manage.model;

/**
 * Created by LoserGhost on 16/4/2560.
 */
public class FieldExtend {
    int ex_id;
    int field_id;
    String fieldex_name;
    int rent;
    String image;
    String size;
    String floor;

    public FieldExtend() {
    }

    public FieldExtend(String fieldex_name, int rent, String image, String size, String floor) {
        this.fieldex_name = fieldex_name;
        this.rent = rent;
        this.image = image;
        this.size = size;
        this.floor = floor;
    }


    public int getEx_id() {
        return ex_id;
    }

    public void setEx_id(int ex_id) {
        this.ex_id = ex_id;
    }

    public int getField_id() {
        return field_id;
    }

    public void setField_id(int field_id) {
        this.field_id = field_id;
    }

    public String getFieldex_name() {
        return fieldex_name;
    }

    public void setFieldex_name(String fieldex_name) {
        this.fieldex_name = fieldex_name;
    }

    public int getRent() {
        return rent;
    }

    public void setRent(int rent) {
        this.rent = rent;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
    }

    public String getFloor() {
        return floor;
    }

    public void setFloor(String floor) {
        this.floor = floor;
    }
}
