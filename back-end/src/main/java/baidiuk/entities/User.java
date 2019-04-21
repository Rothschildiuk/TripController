package baidiuk.entities;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Data
@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;


    @NotNull
    private String name;
    @NotNull
    private String surname;

    @NotNull
    private String email;

    @NotNull
    private String imageUrl;


}