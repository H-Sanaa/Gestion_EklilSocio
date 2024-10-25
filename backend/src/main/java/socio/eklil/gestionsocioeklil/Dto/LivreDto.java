package socio.eklil.gestionsocioeklil.Dto;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor

public class LivreDto {
    private Long id_livre;
    private String livre_code;
    private String nom_auteur;
    private String nom_livre;
    private String photo;
    private Long annee;

    
    public Long getId_livre(){
        return this.id_livre;
    }

    public String getLivre_code(){
        return this.livre_code;
    }
    public void setLivre_code(String livre_code){
        this.livre_code=livre_code;
    }
    public String getNom_auteur(){
        return this.nom_auteur;
    }
    public void setNom_auteur(String nom_auteur){
        this.nom_auteur=nom_auteur;
    }
    public String getNom_livre(){
        return this.nom_livre;
    }
    public void setNom_livre(String nom_livre){
        this.nom_livre=nom_livre;
    }
    public String getPhoto(){
        return this.photo;
    }
    public void setPhoto(String photo){
        this.photo=photo;
    }
    public Long getAnnee(){
        return this.annee;
    }
    public void setAnee(Long annee){
        this.annee=annee;
    }






}
