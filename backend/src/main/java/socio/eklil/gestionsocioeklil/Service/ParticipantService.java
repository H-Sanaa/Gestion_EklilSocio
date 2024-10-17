package socio.eklil.gestionsocioeklil.Service;

import java.util.List;

import socio.eklil.gestionsocioeklil.Dto.ParticipantDto;


public interface ParticipantService {
    //create a new participant
    ParticipantDto createParticipant(ParticipantDto participantDto);
    //Build Get Participant 
    ParticipantDto getParticipantById(Long participantId);
    //get a list of all the participants
    List<ParticipantDto> getAllParticipant();
    //Update a participant
    ParticipantDto updateParticipant(Long participantId,ParticipantDto updateParticipant);
    //Delete a participant 
    void  deleteParticipant(Long participantId);

}
