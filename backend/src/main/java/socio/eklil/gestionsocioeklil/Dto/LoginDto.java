package socio.eklil.gestionsocioeklil.Dto;

import lombok.AllArgsConstructor;

import lombok.NoArgsConstructor;



@NoArgsConstructor
@AllArgsConstructor

public class LoginDto {
    private String email_employee;
    private String pdw_employee;
    public String getEmail_employee(){
        return this.email_employee;
    }
    public String getPdw_employee(){
        return this.pdw_employee;
    }

}
