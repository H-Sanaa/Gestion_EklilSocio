package socio.eklil.gestionsocioeklil.Service;
import socio.eklil.gestionsocioeklil.Dto.EmployeeDto;


public interface EmployeeService {
    
    //create a new Employee (Register)
    EmployeeDto createEmployee(EmployeeDto employeeDto);
//     //Login Employee
   String  loginEmployee(String email,String pdw);

   // Authenticate user by checking username and password
     EmployeeDto authenticate(String email,String pdw) ;
        
    


}
