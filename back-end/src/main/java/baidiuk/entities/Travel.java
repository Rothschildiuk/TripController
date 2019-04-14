package baidiuk.entities;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.List;

@Data
@Entity // This tells Hibernate to make a table out of this class
public class Travel {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;


    @Temporal(TemporalType.DATE)
    @NotNull
    private java.util.Date date;

    @JsonManagedReference
    @OneToMany(mappedBy = "travel", orphanRemoval = true)
    private List<Passenger> passengers = new ArrayList<>();

}