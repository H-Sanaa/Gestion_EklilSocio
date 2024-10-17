package socio.eklil.gestionsocioeklil.Controller;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.servlet.http.HttpSession;
import socio.eklil.gestionsocioeklil.Dto.EmployeeDto;

import socio.eklil.gestionsocioeklil.Model.Employee;
import socio.eklil.gestionsocioeklil.Service.EmployeeService;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class EmployeeController {
    @Autowired
    private EmployeeService employeeService;
    //Build Signup Employee REST API

    @PostMapping("/register")
    public ResponseEntity<EmployeeDto>createEmployee( @RequestBody EmployeeDto employeeDto){
      EmployeeDto saveEmployee=employeeService.createEmployee(employeeDto);
        return new ResponseEntity<>(saveEmployee,HttpStatus.CREATED);

    }
    //Build Login Employee REST API
    @PostMapping("/login/{email}/{pdw}")
     public String loginEmployee( @PathVariable("email") String email, @PathVariable("pdw")String pdw, HttpSession session){
      EmployeeDto employee=employeeService.authenticate(email,pdw);
      if(employee != null){
        //if authentication is successful, store the employee in session
        session.setAttribute("LoggedEmployee ", employee);
        return "L'authentification bien fait ! Bienvenue "+employee.getNom_employee();
      }else{
        return "Email ou mot de passe invalide";
      }
      
     }
     @PostMapping("/logout")
     public String logout( HttpSession session){
      session.invalidate();
      return "Vous avez été déconnectés.";
     }
     @GetMapping("/dash")
     public String dashboard( HttpSession session){
      Employee employee=(Employee) session.getAttribute("LoggedEmployee");
      if(employee !=null){
        return "Bienvenu"+employee.getNom_employee();
      }else{
        return "S'il vous plait faire l'authentification";
      }
     }
   

    



}
