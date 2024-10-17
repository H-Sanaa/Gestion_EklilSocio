package socio.eklil.gestionsocioeklil.Model;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="participant")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor


public class Participant {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="nom")
    private String nom;
    @Column(name="prenom")
    private String prenom;
    @Column(name="email",nullable = false,unique = true)
    private String email;
    @Column(name="statu")
    private String statu;
    @Column(name="choix")
    private String choix;
}
