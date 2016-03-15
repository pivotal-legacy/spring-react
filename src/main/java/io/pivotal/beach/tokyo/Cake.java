package io.pivotal.beach.tokyo;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Data
@Entity
public class Cake {

    private @Id @GeneratedValue Long id;
    private String name;
    private String description;

    private Cake() {}

    public Cake(String name, String description) {
        this.name = name;
        this.description = description;
    }
}
