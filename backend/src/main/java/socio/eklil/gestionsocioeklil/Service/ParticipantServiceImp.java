package socio.eklil.gestionsocioeklil.Service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import socio.eklil.gestionsocioeklil.Dto.ParticipantDto;
import socio.eklil.gestionsocioeklil.Exception.ResourceNotFoundException;
import socio.eklil.gestionsocioeklil.Mapper.ParticipantMapper;
import socio.eklil.gestionsocioeklil.Model.Participant;
import socio.eklil.gestionsocioeklil.Repository.ParticipantRepository;
@Service
public class ParticipantServiceImp implements ParticipantService {
 @Autowired
  private ParticipantRepository participantRepository;

    @Override
    public ParticipantDto createParticipant(ParticipantDto participantDto){
      Participant participant=ParticipantMapper.mapToParticipant(participantDto);
      Participant saveParticipant=participantRepository.save(participant);


        return ParticipantMapper.mapToParticipantDto(saveParticipant);
    }

    @Override
    public ParticipantDto getParticipantById(Long participantId) {
     Participant participant=participantRepository.findById(participantId)
      .orElseThrow(()-> new ResourceNotFoundException("Participant n'est pas reconnu avec id= "+participantId));
      return ParticipantMapper.mapToParticipantDto(participant);
      
    }

    @Override
    public List<ParticipantDto> getAllParticipant() {
     List<Participant> participants= participantRepository.findAll();
      return participants.stream().map((participant)->ParticipantMapper.mapToParticipantDto(participant)).collect(Collectors.toList());
    }

    @Override
    public ParticipantDto updateParticipant(Long participantId, ParticipantDto updateParticipant) {
      Participant participant=participantRepository.findById(participantId).orElseThrow(()-> new ResourceNotFoundException("Participant n'est pas existe avec id="+participantId));
   
     participant.setNom(updateParticipant.getNom());
     participant.setPrenom(updateParticipant.getPrenom());
     participant.setEmail(updateParticipant.getEmail());
     participant.setStatu(updateParticipant.getStatu());
     participant.setChoix(updateParticipant.getChoix());
     Participant updateParticipantObj= participantRepository.save(participant);

     
      return ParticipantMapper.mapToParticipantDto(updateParticipantObj);
    }

    @Override
    public void deleteParticipant(Long participantId) {
      @SuppressWarnings("unused")
      Participant participant=participantRepository.findById(participantId).orElseThrow(()-> new ResourceNotFoundException("Participant n'est pas existe avec id="+participantId));
      participantRepository.deleteById(participantId);

     
    }
  }