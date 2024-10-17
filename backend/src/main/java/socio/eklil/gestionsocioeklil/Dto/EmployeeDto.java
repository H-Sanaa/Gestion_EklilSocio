package socio.eklil.gestionsocioeklil.Dto;

import lombok.AllArgsConstructor;

import lombok.NoArgsConstructor;



@NoArgsConstructor
@AllArgsConstructor

public class EmployeeDto {

    private Long id_employee;
    private String nom_employee;
    private String prenom_employee;
    private String email;
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
    public void setEmail(String email){
        this.email=email;
    }
    public String getPdw_employee(){
        return this.pdw_employee;
    }
    public void setPdw_employee(String pdw_employee){
        this.pdw_employee=pdw_employee;
    }

}
