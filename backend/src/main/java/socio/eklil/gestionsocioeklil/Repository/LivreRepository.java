package socio.eklil.gestionsocioeklil.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import socio.eklil.gestionsocioeklil.Model.Livre;


@Repository
public interface LivreRepository extends JpaRepository<Livre,Long>{




}
