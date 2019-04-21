package baidiuk.repository;

import baidiuk.entities.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;


public interface UserRepository extends CrudRepository<User, Integer> {

    @Query(value = "SELECT * FROM TC.user WHERE email = ?1",
            nativeQuery = true)
    boolean checkUser(String email);

}