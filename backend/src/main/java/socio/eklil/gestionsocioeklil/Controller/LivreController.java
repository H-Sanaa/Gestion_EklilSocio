package socio.eklil.gestionsocioeklil.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import socio.eklil.gestionsocioeklil.Dto.LivreDto;
import socio.eklil.gestionsocioeklil.Service.LivreService;

@CrossOrigin(origins="*")
@RestController //handel HTTP Request
@RequestMapping("/api/livre")
public class LivreController {
    @Autowired
    private LivreService livreService;
    //Build REST API to add a new book(livre)
    @PostMapping("/ajouter")
    public ResponseEntity<LivreDto>
    createLivre(@RequestBody LivreDto livreDto){
        LivreDto saveLivre=livreService.createLivre(livreDto);
        return new ResponseEntity<>(saveLivre,HttpStatus.CREATED);
    }





}
