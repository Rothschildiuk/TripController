package baidiuk.repository;

import baidiuk.entities.Passenger;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;



public interface PassengerRepository extends CrudRepository<Passenger, Integer> {


    @Query(value = "SELECT * FROM passenger WHERE travel_id = ?1",
            nativeQuery = true)
    Iterable<Passenger> getPassengerWithTravelId(String id);


}