import { useTheme } from '../contexts/ThemeProvider';
import styled from 'styled-components';

const Card = styled.div`
  position: relative;
  border-radius: 0.375rem;
  border: 1px solid ${props => props.isDark ? '#1f2937' : '#d1d5db'};
  width: 100%;
  background-color: ${props => props.isDark ? props.theme.secundaryDark : 'white'};
  color: ${props => props.isDark ? 'white' : 'black'};
  transition: all 250ms ease;
  overflow: hidden;

  &:hover {
    transform: scale(1.05);
  }
`;

const Tag = styled.div`
  position: absolute;
  top: 0.25rem;
  right: 0.25rem;
  border-radius: 9999px;
  padding: 0 0.5rem;
  background-color: rgba(17, 24, 39, 0.5);
  color: white;
  font-size: 0.875rem;
  font-weight: 600;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 292px;
  border-bottom: 1px solid ${props => props.isDark ? '#1f2937' : '#d1d5db'};
  background-color: white;
  cursor: pointer;
`;

const Image = styled.img`
  aspect-ratio: 1/1;
  object-fit: contain;
  width: 100%;
  height: 100%;
`;

const Details = styled.div`
  margin: 0.75rem 0;
  padding: 0 1.25rem;
`;

const Title = styled.h1`
  margin-bottom: 0.75rem;
  min-height: 3rem;
  font-size: 1rem;
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const Price = styled.h2`
  font-size: 1rem;
`;

const Rating = styled.div`
  display: flex;
  margin: 0.75rem 0;

  svg {
    fill: #eab308;
    cursor: pointer;
    width: 20px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Button = styled.button`
  border-radius: 9999px;
  border: 0;
  padding: 0.5rem 0.75rem;
  background-color: #6366f1;
  color: white;
  transition: all 250ms ease;
  cursor: pointer;

  &:hover {
    background-color: #4f46e5;
  }
`;

export default function ProductCard({ title, price, tag, image }) {
  const { theme } = useTheme();

  return (
    <Card isDark={theme === 'dark'}>
      <Tag>
        {tag}
      </Tag>
      <ImageContainer isDark={theme === 'dark'}>
        <Image 
          src={image}
          alt={title} 
          loading="lazy"
        />
      </ImageContainer>
      <Details>
        <Title>
          {title}
        </Title>
        <Price>
          R${Number.parseFloat(price).toFixed(2)}
        </Price>
        <Rating>
          <svg width="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
            <path d="M320.1 32C329.1 32 337.4 37.1 341.5 45.1L415 189.3L574.9 214.7C583.8 216.1 591.2 222.4 594 231C596.8 239.6 594.5 249 588.2 255.4L473.7 369.9L499 529.8C500.4 538.7 496.7 547.7 489.4 553C482.1 558.3 472.4 559.1 464.4 555L320.1 481.6L175.8 555C167.8 559.1 158.1 558.3 150.8 553C143.5 547.7 139.8 538.8 141.2 529.8L166.4 369.9L52 255.4C45.6 249 43.4 239.6 46.2 231C49 222.4 56.3 216.1 65.3 214.7L225.2 189.3L298.8 45.1C302.9 37.1 311.2 32 320.2 32zM320.1 108.8L262.3 222C258.8 228.8 252.3 233.6 244.7 234.8L119.2 254.8L209 344.7C214.4 350.1 216.9 357.8 215.7 365.4L195.9 490.9L309.2 433.3C316 429.8 324.1 429.8 331 433.3L444.3 490.9L424.5 365.4C423.3 357.8 425.8 350.1 431.2 344.7L521 254.8L395.5 234.8C387.9 233.6 381.4 228.8 377.9 222L320.1 108.8z"/>
          </svg> 
          <svg width="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
            <path d="M320.1 32C329.1 32 337.4 37.1 341.5 45.1L415 189.3L574.9 214.7C583.8 216.1 591.2 222.4 594 231C596.8 239.6 594.5 249 588.2 255.4L473.7 369.9L499 529.8C500.4 538.7 496.7 547.7 489.4 553C482.1 558.3 472.4 559.1 464.4 555L320.1 481.6L175.8 555C167.8 559.1 158.1 558.3 150.8 553C143.5 547.7 139.8 538.8 141.2 529.8L166.4 369.9L52 255.4C45.6 249 43.4 239.6 46.2 231C49 222.4 56.3 216.1 65.3 214.7L225.2 189.3L298.8 45.1C302.9 37.1 311.2 32 320.2 32zM320.1 108.8L262.3 222C258.8 228.8 252.3 233.6 244.7 234.8L119.2 254.8L209 344.7C214.4 350.1 216.9 357.8 215.7 365.4L195.9 490.9L309.2 433.3C316 429.8 324.1 429.8 331 433.3L444.3 490.9L424.5 365.4C423.3 357.8 425.8 350.1 431.2 344.7L521 254.8L395.5 234.8C387.9 233.6 381.4 228.8 377.9 222L320.1 108.8z"/>
          </svg>
          <svg width="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
            <path d="M320.1 32C329.1 32 337.4 37.1 341.5 45.1L415 189.3L574.9 214.7C583.8 216.1 591.2 222.4 594 231C596.8 239.6 594.5 249 588.2 255.4L473.7 369.9L499 529.8C500.4 538.7 496.7 547.7 489.4 553C482.1 558.3 472.4 559.1 464.4 555L320.1 481.6L175.8 555C167.8 559.1 158.1 558.3 150.8 553C143.5 547.7 139.8 538.8 141.2 529.8L166.4 369.9L52 255.4C45.6 249 43.4 239.6 46.2 231C49 222.4 56.3 216.1 65.3 214.7L225.2 189.3L298.8 45.1C302.9 37.1 311.2 32 320.2 32zM320.1 108.8L262.3 222C258.8 228.8 252.3 233.6 244.7 234.8L119.2 254.8L209 344.7C214.4 350.1 216.9 357.8 215.7 365.4L195.9 490.9L309.2 433.3C316 429.8 324.1 429.8 331 433.3L444.3 490.9L424.5 365.4C423.3 357.8 425.8 350.1 431.2 344.7L521 254.8L395.5 234.8C387.9 233.6 381.4 228.8 377.9 222L320.1 108.8z"/>
          </svg>
          <svg width="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
            <path d="M320.1 32C329.1 32 337.4 37.1 341.5 45.1L415 189.3L574.9 214.7C583.8 216.1 591.2 222.4 594 231C596.8 239.6 594.5 249 588.2 255.4L473.7 369.9L499 529.8C500.4 538.7 496.7 547.7 489.4 553C482.1 558.3 472.4 559.1 464.4 555L320.1 481.6L175.8 555C167.8 559.1 158.1 558.3 150.8 553C143.5 547.7 139.8 538.8 141.2 529.8L166.4 369.9L52 255.4C45.6 249 43.4 239.6 46.2 231C49 222.4 56.3 216.1 65.3 214.7L225.2 189.3L298.8 45.1C302.9 37.1 311.2 32 320.2 32zM320.1 108.8L262.3 222C258.8 228.8 252.3 233.6 244.7 234.8L119.2 254.8L209 344.7C214.4 350.1 216.9 357.8 215.7 365.4L195.9 490.9L309.2 433.3C316 429.8 324.1 429.8 331 433.3L444.3 490.9L424.5 365.4C423.3 357.8 425.8 350.1 431.2 344.7L521 254.8L395.5 234.8C387.9 233.6 381.4 228.8 377.9 222L320.1 108.8z"/>
          </svg>
          <svg width="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
            <path d="M320.1 32C329.1 32 337.4 37.1 341.5 45.1L415 189.3L574.9 214.7C583.8 216.1 591.2 222.4 594 231C596.8 239.6 594.5 249 588.2 255.4L473.7 369.9L499 529.8C500.4 538.7 496.7 547.7 489.4 553C482.1 558.3 472.4 559.1 464.4 555L320.1 481.6L175.8 555C167.8 559.1 158.1 558.3 150.8 553C143.5 547.7 139.8 538.8 141.2 529.8L166.4 369.9L52 255.4C45.6 249 43.4 239.6 46.2 231C49 222.4 56.3 216.1 65.3 214.7L225.2 189.3L298.8 45.1C302.9 37.1 311.2 32 320.2 32zM320.1 108.8L262.3 222C258.8 228.8 252.3 233.6 244.7 234.8L119.2 254.8L209 344.7C214.4 350.1 216.9 357.8 215.7 365.4L195.9 490.9L309.2 433.3C316 429.8 324.1 429.8 331 433.3L444.3 490.9L424.5 365.4C423.3 357.8 425.8 350.1 431.2 344.7L521 254.8L395.5 234.8C387.9 233.6 381.4 228.8 377.9 222L320.1 108.8z"/>
          </svg>
        </Rating>
        <ButtonContainer>
          <Button 
            aria-label="Add product to cart"
          >
            Add to cart
          </Button>
        </ButtonContainer>
      </Details> 
    </Card>  
  );
}
