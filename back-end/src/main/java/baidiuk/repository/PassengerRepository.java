package baidiuk.repository;

import baidiuk.entities.Passenger;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.ArrayList;


public interface PassengerRepository extends CrudRepository<Passenger, Integer> {


    @Query(value = "SELECT * FROM passenger WHERE travel_id_id = ?1",
            nativeQuery = true)
    Iterable<Passenger> getPassengerWithTravelId(String id);

    @Query(value = "select id FROM passenger WHERE travel_id_id = ?1",
            nativeQuery = true)
    ArrayList<Integer> getDeletePassengerIdList(int travelId);
}