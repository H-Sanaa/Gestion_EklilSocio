package socio.eklil.gestionsocioeklil.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import socio.eklil.gestionsocioeklil.Model.Participant;
@Repository
public interface ParticipantRepository  extends JpaRepository<Participant,Long>{




}
