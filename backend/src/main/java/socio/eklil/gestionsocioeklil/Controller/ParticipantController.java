package socio.eklil.gestionsocioeklil.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import socio.eklil.gestionsocioeklil.Dto.ParticipantDto;

import socio.eklil.gestionsocioeklil.Service.ParticipantService;
@CrossOrigin(origins = "*")
@RestController //Handle HTTP Request
@RequestMapping("/api/participant")
public class ParticipantController {
    @Autowired
    private ParticipantService participantService;
    //Build add participant REST API
    @PostMapping("/ajouter")
   
    public ResponseEntity<ParticipantDto> createParticipant(@RequestBody ParticipantDto participantDto){
        ParticipantDto saveParticipant=participantService.createParticipant(participantDto);
        return new ResponseEntity<>(saveParticipant,HttpStatus.CREATED);
    }
    //Build get participant REST API
    @GetMapping("{id}")
    public ResponseEntity<ParticipantDto>getParticipantById(@PathVariable("id") Long participantId){
       ParticipantDto participantDto= participantService.getParticipantById(participantId);

        return ResponseEntity.ok(participantDto);
    }
    //Buil get all participants REST API
    @GetMapping
    public ResponseEntity<List<ParticipantDto>> getAllParticipant(){
      List<ParticipantDto> participants=participantService.getAllParticipant();
      
        return ResponseEntity.ok(participants);
        
    }
    //Build update  participant REST API 
    @PutMapping("{id}")
    public ResponseEntity<ParticipantDto> updateParticipants(@PathVariable("id")  Long participantId
    ,@RequestBody  ParticipantDto updateParticipant){
      ParticipantDto participantDto=  participantService.updateParticipant(participantId, updateParticipant);

        return ResponseEntity.ok(participantDto);
    }
   
    //Build delete participant REST API
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteParticipant(@PathVariable("id")  Long participantId){
     
        participantService.deleteParticipant(participantId);

        return ResponseEntity.ok("Participant bien supprimer ");
        
    }



}
