import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 text-primary-purple">404 - Страница не найдена</h1>
            <p className="text-lg md:text-xl text-center mb-8">
                Извините, но страница, которую вы ищете, не существует
            </p>
            <Link to="/" className="text-lg md:text-xl underline hover:text-gray-400 text-primary-purple-300">
                Вернуться на главную страницу
            </Link>
        </div>
    );
};

export default NotFound;
