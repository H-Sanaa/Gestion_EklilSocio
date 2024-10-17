package socio.eklil.gestionsocioeklil.Service;


import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;
import socio.eklil.gestionsocioeklil.Dto.EmployeeDto;

import socio.eklil.gestionsocioeklil.Mapper.EmployeeMapper;
import socio.eklil.gestionsocioeklil.Model.Employee;
import socio.eklil.gestionsocioeklil.Repository.EmployeeRepository;


@Service
public class EmployeeServiceImp implements EmployeeService{
        @Autowired
        private EmployeeRepository employeeRepository;
       
        @Override
        public EmployeeDto createEmployee(EmployeeDto employeeDto) {
            Employee employee=EmployeeMapper.mapToEmployee(employeeDto);
            Employee saveEmloyee=employeeRepository.save(employee);
            return EmployeeMapper.mapToEmployeeDto(saveEmloyee);
     }

        @Override
        public String  loginEmployee(String email,String pdw) {
            Employee employee=employeeRepository.findByEmail(email);
            if(employee !=null && employee.getPdw_employee().equals(pdw)){
                return EmployeeMapper.mapToEmployeeDto(employee).toString();
            }
            return null;
        }

        @Override
        public EmployeeDto authenticate(String email,String pdw) {
            Employee employee = employeeRepository.findByEmail(email);

            if (employee != null && employee.getPdw_employee().equals(pdw)) {
                return EmployeeMapper.mapToEmployeeDto(employee);
            }
            return null;
        }
        }

       
        
      
       
        
      
    
   


