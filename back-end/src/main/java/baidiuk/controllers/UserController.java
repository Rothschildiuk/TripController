package baidiuk.controllers;

import baidiuk.entities.User;
import baidiuk.repository.UserRepository;
import com.fasterxml.jackson.databind.JsonNode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "/api")
public class UserController {
    @Autowired
    private UserRepository userRepository;


    @PostMapping(path = "/addUser")
    @ResponseBody
    public ResponseEntity addUser(@RequestBody JsonNode jsonBody) {

        User newUser = new User();

        String name = jsonBody.get("name").asText();
        String surname = jsonBody.get("surname").asText();
        String email = jsonBody.get("email").asText();
        String imageUrl = jsonBody.get("imageUrl").asText();

//        todo check if User already inside is

        newUser.setName(name);
        newUser.setSurname(surname);
        newUser.setEmail(email);
        newUser.setImageUrl(imageUrl);


        userRepository.save(newUser);
        return ResponseEntity.ok().build();


    }
}

