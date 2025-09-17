import { useTheme } from '../../contexts/ThemeProvider';

export default function ProductCardSkeleton() {
  const { theme } = useTheme();

  return (
    <div className={`skeleton-card ${theme}`}>
      <div className="skeleton-image"></div>
      <div className="skeleton-details">
        <h1 className="skeleton-title">
          <div className="skeleton-title-line"></div>
          <div className="skeleton-title-line short"></div>
        </h1>
        <h2 className="skeleton-price"></h2>
        <div className="skeleton-rating"></div> 
        <div className="skeleton-button-container">
          <div className="skeleton-button"></div>
        </div>
      </div> 
    </div>
  );
}
