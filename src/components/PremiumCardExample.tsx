'use client';

import PremiumCard from './PremiumCard';
import { 
  Droplets, 
  Leaf, 
  Award, 
  Shield, 
  Sparkles, 
  Heart,
  Hexagon,
  Flower,
  Sun,
  Star,
  CheckCircle,
  Zap
} from 'lucide-react';

export default function PremiumCardExample() {
  return (
    <div className="min-h-screen bg-black p-8 md:p-16">
      
      {/* Example 1: Por Que Escolher Nosso Mel */}
      <section className="mb-24">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Por Que Escolher Nosso Mel</h2>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <PremiumCard
            number="01"
            icon={Droplets}
            title="Mel 100% Puro"
            description="Mel puro e natural, sem aditivos ou processamentos industriais, mantendo todas as propriedades benéficas."
            delay={0}
          />
          <PremiumCard
            number="02"
            icon={Leaf}
            title="Sustentável"
            description="Produção sustentável que respeita o meio ambiente e promove a preservação das abelhas."
            delay={0.1}
          />
          <PremiumCard
            number="03"
            icon={Award}
            title="Tradicional"
            description="Técnicas tradicionais de apicultura passadas de geração em geração."
            delay={0.2}
          />
          <PremiumCard
            number="04"
            icon={Shield}
            title="Qualidade Garantida"
            description="Rigorosos controles de qualidade em cada etapa do processo produtivo."
            delay={0.3}
          />
        </div>
      </section>

      {/* Example 2: Nossos Produtos */}
      <section className="mb-24">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Nossos Produtos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <PremiumCard
            number="01"
            icon={Flower}
            title="Mel Silvestre"
            description="Mel coletado de flores silvestres, com sabor único e propriedades terapêuticas."
            delay={0}
          />
          <PremiumCard
            number="02"
            icon={Leaf}
            title="Mel Orgânico"
            description="Mel certificado orgânico, produzido sem pesticidas ou químicos sintéticos."
            delay={0.1}
          />
          <PremiumCard
            number="03"
            icon={Sparkles}
            title="Mel Premium"
            description="Seleção especial dos melhores méis, com características excepcionais."
            delay={0.2}
          />
        </div>
      </section>

      {/* Example 3: Nosso Processo */}
      <section className="mb-24">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Nosso Processo</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <PremiumCard
            number="01"
            icon={Hexagon}
            title="Extração Artesanal"
            description="Processo manual de extração que preserva a qualidade e integridade do mel."
            delay={0}
          />
          <PremiumCard
            number="02"
            icon={Droplets}
            title="Filtragem Natural"
            description="Filtragem natural sem aquecimento, mantendo todos os nutrientes e enzimas."
            delay={0.1}
          />
          <PremiumCard
            number="03"
            icon={Star}
            title="Envase Premium"
            description="Envase em recipientes de alta qualidade que preservam as características do mel."
            delay={0.2}
          />
        </div>
      </section>

      {/* Example 4: Benefícios do Mel */}
      <section className="mb-24">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Benefícios do Mel</h2>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <PremiumCard
            number="01"
            icon={Heart}
            title="Saúde Cardiovascular"
            description="Propriedades antioxidantes que ajudam a proteger o coração."
            delay={0}
          />
          <PremiumCard
            number="02"
            icon={Zap}
            title="Energia Natural"
            description="Fonte natural de energia rápida e sustentada para o corpo."
            delay={0.1}
          />
          <PremiumCard
            number="03"
            icon={Shield}
            title="Sistema Imunológico"
            description="Fortalece o sistema imunológico com propriedades antibacterianas."
            delay={0.2}
          />
          <PremiumCard
            number="04"
            icon={Sparkles}
            title="Pele Saudável"
            description="Propriedades hidratantes e cicatrizantes para a pele."
            delay={0.3}
          />
        </div>
      </section>

      {/* Example 5: Qualidade e Certificações */}
      <section className="mb-24">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Qualidade e Certificações</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <PremiumCard
            number="01"
            icon={CheckCircle}
            title="Certificação Orgânica"
            description="Certificado por órgãos reguladores como produto orgânico de qualidade."
            delay={0}
          />
          <PremiumCard
            number="02"
            icon={Award}
            title="ISO 9001"
            description="Sistema de gestão de qualidade certificado internacionalmente."
            delay={0.1}
          />
          <PremiumCard
            number="03"
            icon={Star}
            title="Selo de Qualidade"
            description="Reconhecimento por instituições especializadas em produtos apícolas."
            delay={0.2}
          />
        </div>
      </section>

      {/* Example 6: Sustentabilidade */}
      <section className="mb-24">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Sustentabilidade</h2>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <PremiumCard
            number="01"
            icon={Hexagon}
            title="Preservação das Abelhas"
            description="Práticas que garantem a saúde e sobrevivência das colmeias."
            delay={0}
          />
          <PremiumCard
            number="02"
            icon={Leaf}
            title="Agricultura Regenerativa"
            description="Parcerias com agricultores que promovem práticas regenerativas."
            delay={0.1}
          />
          <PremiumCard
            number="03"
            icon={Sun}
            title="Energia Renovável"
            description="Uso de energia solar em nossas instalações de produção."
            delay={0.2}
          />
          <PremiumCard
            number="04"
            icon={Heart}
            title="Comunidade Local"
            description="Apoio e desenvolvimento das comunidades locais apícolas."
            delay={0.3}
          />
        </div>
      </section>

    </div>
  );
}
