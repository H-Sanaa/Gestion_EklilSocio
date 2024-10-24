package socio.eklil.gestionsocioeklil.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import socio.eklil.gestionsocioeklil.Dto.LivreDto;
import socio.eklil.gestionsocioeklil.Mapper.LivreMapper;
import socio.eklil.gestionsocioeklil.Model.Livre;
import socio.eklil.gestionsocioeklil.Repository.LivreRepository;


@Service
public class LivreServiceImp implements LivreService  {

    @Autowired
   private LivreRepository livreRepository;

    @Override
    public LivreDto createLivre(LivreDto livreDto) {
      Livre livre=LivreMapper.mapToLivre(livreDto);
     Livre saveLivre=livreRepository.save(livre);
     return LivreMapper.mapToLivreDto(saveLivre);
    }

}
