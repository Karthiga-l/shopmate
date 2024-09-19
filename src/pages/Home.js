import { ProductCard } from '../components';
import { useTitle } from '../hooks/useTitle';

export const Home = () => {
  useTitle('Home');
  return (
    <main>
      <section className="products">
        <ProductCard />
      </section>
    </main>
  );
};
