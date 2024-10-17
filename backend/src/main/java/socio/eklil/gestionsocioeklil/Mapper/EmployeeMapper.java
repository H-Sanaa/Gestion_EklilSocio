package socio.eklil.gestionsocioeklil.Mapper;

import socio.eklil.gestionsocioeklil.Dto.EmployeeDto;
import socio.eklil.gestionsocioeklil.Model.Employee;

public class EmployeeMapper {
    public static EmployeeDto mapToEmployeeDto(Employee employee){
        return new EmployeeDto(
            employee.getId_employee(),
            employee.getNom_employee(),
            employee.getPrenom_employee(),
            employee.getEmail(),
            employee.getPdw_employee());
    }
    public static Employee mapToEmployee(EmployeeDto employeeDto){
        return new Employee(
            employeeDto.getId_employee(),employeeDto.getNom_employee(),
            employeeDto.getPrenom_employee(),
            employeeDto.getEmail(),
            employeeDto.getPdw_employee());
    }


}
