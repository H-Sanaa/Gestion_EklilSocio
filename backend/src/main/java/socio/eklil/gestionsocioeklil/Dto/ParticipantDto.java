package socio.eklil.gestionsocioeklil.Dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor


public class ParticipantDto {
    private Long id;
 
    private String nom;
    private String prenom;
    private String email;
    private String statu;
    private String choix;

}
