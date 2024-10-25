package socio.eklil.gestionsocioeklil.Model;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;

import lombok.NoArgsConstructor;


@Entity
@Table(name="livre")
@NoArgsConstructor
@AllArgsConstructor

public class Livre {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_livre;
    @Column(name="livre_code")
    private String livre_code;

    @Column(name="nom_auteur")
    private String nom_auteur;

    @Column(name="nom_livre")
    private String nom_livre;
   // For storing the image
    @Lob // Large Object annotation for binary data
    private byte[] photo;

    @Column (name ="prix")
    private Long prix;

    @Column (name="annee")
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
    public byte[] getPhoto(){
        return this.photo;
    }
    public void setPhoto(byte[] photo){
        this.photo=photo;
    }

    public Long getPrix(){
        return this.prix;
    }
    public void setPrix(Long prix){
        this.prix=prix;
    }

    public Long getAnnee(){
        return this.annee;
    }
    public void setAnee(Long annee){
        this.annee=annee;
    }




    

}
