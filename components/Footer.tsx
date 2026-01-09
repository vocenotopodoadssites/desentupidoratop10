
import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-red-600 text-white font-black text-2xl px-2 py-1 rounded">TOP 10</div>
              <span className="font-bold text-xl">Desentupidora</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Referência em desentupimentos rápidos, higiênicos e com garantia total. Atendimento humanizado e focado na solução definitiva.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"><Facebook className="w-5 h-5" /></a>
            </div>
          </div>
          
          {/* Contact Col */}
          <div>
            <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-red-600 block"></span>
              Contato
            </h3>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-red-500 shrink-0" />
                <div>
                  <div className="font-bold text-white">(19) 99666-5646</div>
                  <div className="text-xs">Atendimento 24h</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-red-500 shrink-0" />
                <div>contato@desentupidoratop10.com.br</div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-red-500 shrink-0" />
                <div>Rua Exemplo, 123 - Centro<br />São Paulo - SP</div>
              </li>
            </ul>
          </div>
          
          {/* Areas Col */}
          <div>
            <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-red-600 block"></span>
              Áreas Atendidas
            </h3>
            <ul className="grid grid-cols-2 gap-2 text-slate-400 text-sm">
              <li>• Centro</li>
              <li>• Zona Sul</li>
              <li>• Zona Norte</li>
              <li>• Zona Oeste</li>
              <li>• Zona Leste</li>
              <li>• ABC Paulista</li>
              <li>• Guarulhos</li>
              <li>• Osasco</li>
            </ul>
          </div>
          
          {/* Payment Col */}
          <div>
            <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-red-600 block"></span>
              Pagamento
            </h3>
            <p className="text-slate-400 text-sm mb-6">Facilitamos para você com diversas formas de pagamento.</p>
            <div className="flex flex-wrap gap-3">
              <span className="bg-slate-800 px-3 py-1 rounded text-xs font-bold border border-slate-700">PIX</span>
              <span className="bg-slate-800 px-3 py-1 rounded text-xs font-bold border border-slate-700">CARTÃO CRÉDITO</span>
              <span className="bg-slate-800 px-3 py-1 rounded text-xs font-bold border border-slate-700">DÉBITO</span>
              <span className="bg-slate-800 px-3 py-1 rounded text-xs font-bold border border-slate-700">BOLETO</span>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2024 Desentupidora Top 10 - Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white underline">Política de Privacidade</a>
            <a href="#" className="hover:text-white underline">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
