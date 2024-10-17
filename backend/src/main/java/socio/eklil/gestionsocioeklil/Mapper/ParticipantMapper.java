package socio.eklil.gestionsocioeklil.Mapper;

import socio.eklil.gestionsocioeklil.Dto.ParticipantDto;
import socio.eklil.gestionsocioeklil.Model.Participant;

public class ParticipantMapper {
    public static ParticipantDto mapToParticipantDto(Participant participant){
        return new ParticipantDto(
            participant.getId(),
            participant.getNom(),
            participant.getPrenom(),
            participant.getEmail(),
            participant.getStatu(),
            participant.getChoix());
    }
    public static Participant mapToParticipant(ParticipantDto participantDto){
        return new Participant(
            participantDto.getId(),
            participantDto.getNom(),
            participantDto.getPrenom(),
            participantDto.getEmail(),
            participantDto.getStatu(),
            participantDto.getChoix());
    }

}
