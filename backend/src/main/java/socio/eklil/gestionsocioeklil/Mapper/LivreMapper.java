package socio.eklil.gestionsocioeklil.Mapper;

import java.util.Base64;

import socio.eklil.gestionsocioeklil.Dto.LivreDto;
import socio.eklil.gestionsocioeklil.Model.Livre;

public class LivreMapper {
     
    public static LivreDto
   
    mapToLivreDto(Livre livre){
        // Convert photo byte[] to Base64 String for LivreDto
        String photoBase64 = livre.getPhoto() != null ? Base64.getEncoder().encodeToString(livre.getPhoto()) : null;
        return new LivreDto(
         livre.getId_livre(),
         livre.getLivre_code(),
         livre.getNom_auteur(),
         livre.getNom_livre(),
         photoBase64,
         livre.getAnnee(),
         livre.getPrix()

        );
    }
    public static Livre
    mapToLivre(LivreDto livreDto){
         // Convert photo Base64 String to byte[] for Livre entity
         byte[] photoBytes = livreDto.getPhoto() != null ? Base64.getDecoder().decode(livreDto.getPhoto()) : null;
        return new Livre(
            livreDto.getId_livre(),
            livreDto.getLivre_code(),
            livreDto.getNom_auteur(),
            livreDto.getNom_livre(),
           photoBytes,
            livreDto.getPrix(),
           livreDto.getAnnee()


        );
    }


}
