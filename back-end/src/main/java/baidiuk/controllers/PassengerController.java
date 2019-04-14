package baidiuk.controllers;

import baidiuk.entities.Travel;
import baidiuk.repository.PassengerRepository;
import baidiuk.entities.Passenger;
import baidiuk.repository.TravelRepository;
import com.fasterxml.jackson.databind.JsonNode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;

@RestController    // This means that this class is a Controller
@RequestMapping(path = "/api") // This means URL's start with /demo (after Application path)
public class PassengerController {
    @Autowired
    private PassengerRepository passengerRepository;
    @Autowired
    private TravelRepository travelRepository;

    @PostMapping(path = "/addPassenger") // Map ONLY GET Requests
    @ResponseBody
    public ResponseEntity addPassenger(@RequestBody JsonNode jsonBody) {

        Passenger newPassenger = new Passenger();

        String name = jsonBody.get("name").asText();
        String surname = jsonBody.get("surname").asText();
        String phoneNumber = jsonBody.get("phoneNumber").asText();
        String address = jsonBody.get("address").asText();
        String comment = jsonBody.get("comment").asText();
        int travelId = jsonBody.get("travelId").asInt();
        Travel travel = travelRepository.findById(travelId).orElse(null);

        if (StringUtils.isEmpty(name) ||
                StringUtils.isEmpty(surname) ||
                StringUtils.isEmpty(phoneNumber) ||
                StringUtils.isEmpty(travelId) ||
                StringUtils.isEmpty(address)) {
            return new ResponseEntity(HttpStatus.BAD_REQUEST);
        }
        newPassenger.setName(name);
        newPassenger.setSurname(surname);
        newPassenger.setPhoneNumber(phoneNumber);
        newPassenger.setAddress(address);
        newPassenger.setComment(comment);
        newPassenger.setTravel(travel);

        passengerRepository.save(newPassenger);
        return ResponseEntity.ok().build();
    }

    @GetMapping(path = "/getAllPassenger")
    @ResponseBody
    public Iterable<Passenger> getAllPassenger() {
        return passengerRepository.findAll();
    }


    @GetMapping(path = "/getPassengerWithTravelId")
    @ResponseBody
    public Iterable<Passenger> getPassengerWithTravelId(@RequestParam String id) {
        return passengerRepository.getPassengerWithTravelId(id);
    }

    @GetMapping(path = "/delPassengerWithId")
    @ResponseBody
    public ResponseEntity delPassengerWithId(@RequestParam int id) {
        passengerRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }


}