import { Link } from 'react-router-dom';
import styles from './CountryCard.module.css';

export function CountryCard({ country, isFavorite, onToggleFavorite }) {
  const flagUrl = country.flags?.svg || country.flags?.png;
  const name = country.name?.common || "Desconhecido";
  const capital = country.capital?.[0] || "Sem capital";

  return (
    <div className={styles['country-card']}>
      <div className={styles['image-container']}>
        <img src={flagUrl} alt={`Bandeira de ${name}`} />
        
        <button 
          className={styles['favorite-btn']}
          onClick={(e) => {
            e.preventDefault();
            onToggleFavorite(country);
          }}
          title={isFavorite ? "Remover dos Favoritos" : "Adicionar aos Favoritos"}
        >
          {isFavorite ? '★' : '☆'}
        </button>

        <div className={styles.overlay}>
          <h3>{name}</h3>
          <p>📍 {capital}</p>
          <Link to={`/pais/${country.cca3}`} className={styles['details-btn']}>
            Ver Detalhes
          </Link>
        </div>
      </div>
    </div>
  );
}

