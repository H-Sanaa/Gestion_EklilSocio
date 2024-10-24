package socio.eklil.gestionsocioeklil.Mapper;

import socio.eklil.gestionsocioeklil.Dto.LivreDto;
import socio.eklil.gestionsocioeklil.Model.Livre;

public class LivreMapper {
    public static LivreDto
    mapToLivreDto(Livre livre){
        return new LivreDto(
         livre.getId_livre(),
         livre.getLivre_code(),
         livre.getNom_auteur(),
         livre.getNom_livre(),
         livre.getPhoto()

        );
    }
    public static Livre
    mapToLivre(LivreDto livreDto){
        return new Livre(
            livreDto.getId_livre(),
            livreDto.getLivre_code(),
            livreDto.getNom_auteur(),
            livreDto.getNom_livre(),
            livreDto.getPhoto(),
           null


        );
    }


}
