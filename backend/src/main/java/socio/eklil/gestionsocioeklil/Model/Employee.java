package socio.eklil.gestionsocioeklil.Model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "employee")

@AllArgsConstructor
@NoArgsConstructor


public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_employee;
    @Column(name = "nom_employee")
    private String nom_employee;
    @Column(name = "prenom_employee")
    private String prenom_employee;
    @Column(name = "email",nullable = false, unique = true)
    private String email;
    @Column(name = "pdw_employee")
    private String pdw_employee;
    public Long getId_employee(){
        return this.id_employee;
    }
    public String getNom_employee(){
        return this.nom_employee;
    }
    public void setNom_employee(String nom_employee){
        this.nom_employee=nom_employee;
    }
    public String getPrenom_employee(){
        return this.prenom_employee;
    }
    public void setPrenom_employee(String prenom_employee){
        this.prenom_employee=prenom_employee;
    }
    public String getEmail(){
        return this.email;
    }
    public void setEmail_employee(String email){
        this.email=email;
    }
    public String getPdw_employee(){
        return this.pdw_employee;
    }
    public void setPdw_employee(String pdw_employee){
        this.pdw_employee=pdw_employee;
    }


}
