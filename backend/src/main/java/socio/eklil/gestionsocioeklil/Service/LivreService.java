package socio.eklil.gestionsocioeklil.Service;

import java.util.List;

import socio.eklil.gestionsocioeklil.Dto.LivreDto;

public interface LivreService {

    //create a new book(livre)
    LivreDto createLivre(LivreDto livreDto);

    //get a list of all the books
    List<LivreDto> getAllLivre();
    
    //build get livre
    LivreDto getLivreById(Long livreId);

    //Update a book
    LivreDto updateLivre(Long livreId,LivreDto updateLivre);
    //Delete a book
    void deleteLivre(Long livreId);




}
