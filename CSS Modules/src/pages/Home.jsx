import ProductCard from '../components/ProductCard';
import ProductCardSkeleton from '../components/skeletons/ProductCardSkeleton';

import styles from './Home.module.css';

import { useState, useEffect } from 'react';

import { useTheme } from '../contexts/ThemeProvider';

export default function Home() {
  const [ loading, setLoading ] = useState(true);

  const { theme } = useTheme();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const products = [
    {
      title: 'PC Gamer Mancer | AMD Ryzen 5 5600 | RX 580 8GB | 16GB DDR4 | SSD 480GB | Fonte 500W 80 Plus',
      price: 2699,
      tag: 'Novo',
      image: 'https://m.media-amazon.com/images/I/61rH3f1ncrL._AC_SX679_.jpg',
    },
    {
      title: 'Havit Headphone Fone de Ouvido H2002d, Gamer, com Microfone, Falante 53mm, Plug 3, 5mm: compatível com XBOX ONE e PS4, HAVIT, HV-H2002d',
      price: 194.89,
      tag: 'Promo',
      image: 'https://m.media-amazon.com/images/I/71i5jjOyOEL._AC_SL1500_.jpg',
    },
    {
      title: 'HyperX Teclado Gamer HyperX Alloy Core RGB, ABNT2, PRETO',
      price: 185.99,
      tag: 'Promo',
      image: 'https://m.media-amazon.com/images/I/51IQ2qI3cdL._AC_SL1000_.jpg',
    },
    {
      title: 'Placa de Vídeo XFX Speedster AMD Radeon RX 6650 XT SWFT 210, 8GB, GDDR6, FSR, Ray Tracing, RX-665X8DFDY',
      price: 1649.90,
      tag: 'Promo',
      image: 'https://img.terabyteshop.com.br/produto/g/placa-de-video-xfx-speedster-amd-radeon-rx-6650-xt-swft-210-8gb-gddr6-fsr-ray-tracing-rx-665x8dfdy_202139.jpg',
    },
    {
      title: 'Processador AMD Ryzen 7 9700X, 3.8GHz (5.5GHz Turbo), 8-Cores 16-Threads, AM5, Sem Cooler, 100-100001404WOF',
      price: 2099.90,
      tag: 'Novo',
      image: 'https://img.terabyteshop.com.br/produto/g/processador-amd-ryzen-7-9700x-38ghz-55ghz-turbo-8-cores-16-threads-am5-sem-cooler-100-100001404wof_204901.jpg',
    },
    {
      title: 'Placa Mãe Gigabyte B550M AORUS Elite, Chipset B550, AMD AM4, mATX, DDR4',
      price: 789.90,
      tag: 'Novo',
      image: 'https://img.terabyteshop.com.br/produto/g/placa-mae-gigabyte-b550m-aorus-elite-chipset-b550-amd-am4-atx-ddr4_110070.png',
    }
  ];

  return (
    <div className={`${styles.container} ${theme === 'dark' && styles.dark}`}>
      <div className={styles.grid}>
        {
          loading 
            ? products.map((_, index) => <ProductCardSkeleton key={index} />) 
            : products.map((product, index) =>  (
                <ProductCard
                  key={index}
                  title={product.title}
                  price={product.price}
                  tag={product.tag}
                  image={product.image}
                />
            ))
        } 
      </div>
    </div> 
  );
}
