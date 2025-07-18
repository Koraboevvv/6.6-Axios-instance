import React from 'react'
import { Link } from 'react-router-dom'
import { FaInstagram, FaFacebook, FaTelegramPlane, FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 pt-10 pb-6 mt-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        <div>
          <h2 className="text-xl font-bold mb-4 text-white">Logoo</h2>
          <p className="text-sm text-gray-400">
            Качественные решения для вашего веб-пространства. Быстро. Стильно. Надёжно.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Навигация</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-amber-400">Главная</Link></li>
            <li><Link to="/about" className="hover:text-amber-400">О нас</Link></li>
            <li><Link to="/contact" className="hover:text-amber-400">Контакты</Link></li>
            <li><Link to="/help" className="hover:text-amber-400">Помощь</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Поддержка</h3>
          <ul className="space-y-2">
            <li><Link to="/faq" className="hover:text-amber-400">FAQ</Link></li>
            <li><Link to="/terms" className="hover:text-amber-400">Условия использования</Link></li>
            <li><Link to="/privacy" className="hover:text-amber-400">Политика конфиденциальности</Link></li>
            <li><Link to="/login" className="hover:text-amber-400">Войти</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Мы в соцсетях</h3>
          <div className="flex gap-4 text-xl">
            <a href="https://instagram.com" target="_blank" className="hover:text-pink-500"><FaInstagram /></a>
            <a href="https://facebook.com" target="_blank" className="hover:text-blue-500"><FaFacebook /></a>
            <a href="https://t.me" target="_blank" className="hover:text-cyan-400"><FaTelegramPlane /></a>
            <a href="https://github.com" target="_blank" className="hover:text-white"><FaGithub /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Logoo. Все права защищены.
      </div>
    </footer>
  )
}

export default Footer
