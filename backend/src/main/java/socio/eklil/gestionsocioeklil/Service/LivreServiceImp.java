package socio.eklil.gestionsocioeklil.Service;

import java.util.Base64;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import socio.eklil.gestionsocioeklil.Dto.LivreDto;
import socio.eklil.gestionsocioeklil.Mapper.LivreMapper;
import socio.eklil.gestionsocioeklil.Model.Livre;
import socio.eklil.gestionsocioeklil.Exception.ResourceNotFoundException;
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

    @Override
    public List<LivreDto> getAllLivre() {
     List<Livre> livres=livreRepository.findAll();
     return livres.stream().map((livre)->LivreMapper.mapToLivreDto(livre)).collect(Collectors.toList());
    }

    @Override
    public LivreDto getLivreById(Long livreId) {
      Livre livre=livreRepository.findById(livreId).orElseThrow(()-> new ResourceNotFoundException("Participant n'est pas reconnu avec id= "+livreId));
      return LivreMapper.mapToLivreDto(livre);
      
    }

    @Override
    public LivreDto updateLivre(Long livreId, LivreDto updateLivre) {
      Livre livre=livreRepository.findById(livreId).orElseThrow(()->new ResourceNotFoundException("Livre n'est pas existe avec id="+livreId));
      livre.setNom_livre(updateLivre.getNom_livre());
      livre.setNom_auteur(updateLivre.getNom_auteur());
      livre.setAnee(updateLivre.getAnnee());
      livre.setPrix(null);
      livre.setLivre_code(updateLivre.getLivre_code());
        // Convert photo from String to byte[] if it's Base64 encoded
    if (updateLivre.getPhoto() != null) {
      byte[] photoBytes = Base64.getDecoder().decode(updateLivre.getPhoto());
      livre.setPhoto(photoBytes);
  }
      Livre updaLivreObj=livreRepository.save(livre);




      return LivreMapper.mapToLivreDto(updaLivreObj);
    }

    @Override
    public void deleteLivre(Long livreId) {
      @SuppressWarnings("unused")
      Livre livre=livreRepository.findById(livreId).orElseThrow(()-> new ResourceNotFoundException("Livre n'est pas existe avec id="+livreId));
      livreRepository.deleteById(livreId);
    }

   

}
