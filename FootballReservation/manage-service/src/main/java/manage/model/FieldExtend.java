package manage.model;

/**
 * Created by LoserGhost on 16/4/2560.
 */
public class FieldExtend {
    int exId;
    int fieldId;
    String fieldexName;
    int rent;
    String image;
    String size;
    String floor;

    public FieldExtend(String fieldexName, int rent, String image, String size, String floor) {
        this.fieldexName = fieldexName;
        this.rent = rent;
        this.image = image;
        this.size = size;
        this.floor = floor;
    }


    public int getExId() {
        return exId;
    }

    public void setExId(int exId) {
        this.exId = exId;
    }

    public int getFieldId() {
        return fieldId;
    }

    public void setFieldId(int fieldId) {
        this.fieldId = fieldId;
    }

    public String getFieldexName() {
        return fieldexName;
    }

    public void setFieldexName(String fieldexName) {
        this.fieldexName = fieldexName;
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
