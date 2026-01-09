
import React from 'react';
import { Phone, Clock } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-red-600 text-white font-black text-xl px-2 py-1 rounded">TOP 10</div>
          <span className="font-bold text-gray-800 text-lg hidden sm:block">Desentupidora</span>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-2 text-sm font-medium text-gray-600">
            <Clock className="w-4 h-4 text-red-600" />
            <span>Atendimento 24h</span>
          </div>
          <a 
            href="tel:+5519996665646" 
            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full font-bold transition-colors text-sm sm:text-base"
          >
            <Phone className="w-4 h-4" />
            <span>Ligar Agora</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
