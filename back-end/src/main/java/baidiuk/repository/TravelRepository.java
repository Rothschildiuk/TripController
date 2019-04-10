package baidiuk.repository;

import baidiuk.entities.Travel;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete

public interface TravelRepository extends CrudRepository<Travel, Integer> {

    @Query(
            value = "SELECT travel.id, travel.date FROM travel WHERE date < CURRENT_DATE ORDER BY date",
            nativeQuery = true)
    Iterable<Travel> getPastTravels();

    @Query(
            value = "SELECT travel.id, travel.date FROM travel WHERE date >= CURRENT_DATE ORDER BY date",
            nativeQuery = true)
    Iterable<Travel> getUpcomingTravels();



}