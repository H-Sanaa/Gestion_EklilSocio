package socio.eklil.gestionsocioeklil.Repository;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import socio.eklil.gestionsocioeklil.Model.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee,Long>{

    Employee findByEmail(String email);
    


}
