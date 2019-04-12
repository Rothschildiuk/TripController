package baidiuk.entities;

import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Data
@Entity // This tells Hibernate to make a table out of this class
public class Travel {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;


    @Temporal(TemporalType.DATE)
    @NotNull
    private java.util.Date date;

}