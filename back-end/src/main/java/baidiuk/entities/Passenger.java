package baidiuk.entities;

import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Data
@Entity // This tells Hibernate to make a table out of this class
public class Passenger {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private String name;
    private String surname;
    private String phoneNumber;
    private String address;
    private String comment;

    @ManyToOne
    @JoinColumn
    @NotNull
    private Travel travel;

}