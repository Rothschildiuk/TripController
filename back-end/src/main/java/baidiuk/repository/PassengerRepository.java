package baidiuk.repository;

import baidiuk.entities.Passenger;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.http.ResponseEntity;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete

public interface PassengerRepository extends CrudRepository<Passenger, Integer> {


    @Query(value = "SELECT * FROM passenger WHERE travel_id_id = ?1",
            nativeQuery = true)
    Iterable<Passenger> getPassengerWithTravelId(String id);



}