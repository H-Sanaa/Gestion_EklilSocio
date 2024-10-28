package socio.eklil.gestionsocioeklil.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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

    //Build get all the books REST API
    @GetMapping
    public ResponseEntity<List<LivreDto>> getAllLivre(){
        List<LivreDto> livres=livreService.getAllLivre();
        return ResponseEntity.ok(livres);

    }

    //REST API get 
    @GetMapping("{id}")
    public ResponseEntity<LivreDto>getLivreById(@PathVariable("id") Long livreId){
        LivreDto livreDto=livreService.getLivreById(livreId);
        return ResponseEntity.ok(livreDto);
    }

    //Build update book REST API
    @PutMapping("{id}")
    public ResponseEntity<LivreDto>updateLivre(
        @PathVariable("id") Long livreId,
        @RequestBody LivreDto updateLivre){
        LivreDto livreDto=livreService.updateLivre(livreId, updateLivre);
        return ResponseEntity.ok(livreDto);
    }

    //Build delete book REST API
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteLivre(
        @PathVariable("id") Long livreId){
    livreService.deleteLivre(livreId);
    return ResponseEntity.ok("Le livre bien Supprimer");
    }






}
