import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';

export default function NotFoundPage() {
  return (
    <Layout>
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-4">
        <h1 className="text-9xl font-bold text-white mb-4">404</h1>
        <p className="text-2xl text-zinc-400 mb-8 text-center">
          Even Diogenes couldn't find what you're looking for
        </p>
        <Link
          to="/"
          className="bg-white text-black px-8 py-3 rounded-lg font-medium
            hover:bg-zinc-200 transition-colors transform active:scale-95"
        >
          Return to Barrel
        </Link>
      </div>
    </Layout>
  );
}
