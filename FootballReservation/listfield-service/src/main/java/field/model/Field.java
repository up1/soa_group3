package field.model;

import java.sql.Blob;
import java.util.DoubleSummaryStatistics;

/**
 * Created by phossawatpruekphanasant on 3/7/2017 AD.
 */
public class Field {
    private int field_id;
    private String field_name;
    private Blob field_image;
    private String field_type;
    private String field_country;
    private int field_price;

    public Field(int field_id){
        this.field_id = field_id;
        this.field_name = "test";
        this.field_type = "test";
        this.field_country = "test";
        this.field_price = 10000;
    }
    public Field(){

    }

    public int getField_id() {
        return field_id;
    }

    public void setField_id(int field_id) {
        this.field_id = field_id;
    }

    public Blob getField_image() {
        return field_image;
    }

    public void setField_image(Blob field_image) {
        this.field_image = field_image;
    }

    public String getField_type() {
        return field_type;
    }

    public void setField_type(String field_type) {
        this.field_type = field_type;
    }

    public String getField_country() {
        return field_country;
    }

    public void setField_country(String field_country) {
        this.field_country = field_country;
    }

    public int getField_price() {
        return field_price;
    }

    public void setField_price(int field_price) {
        this.field_price = field_price;
    }

    public String getField_name() {
        return field_name;
    }

    public void setField_name(String field_name) {
        this.field_name = field_name;
    }
}
