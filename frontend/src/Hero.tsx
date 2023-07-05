export default function Hero({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-col ${className}`}>
      <div className="mb-10 flex items-center justify-center">
        <p className="mr-2 text-4xl font-semibold">FénixGPT</p>
        <p className="text-[27px]">🦖</p>
      </div>
      <p className="mb-3 text-center leading-6 text-black-1000">
        Bem-vindo ao FénixGPT, o teu assistente virtual de apoio à matrícula no
        Iscte Sintra!
      </p>
      <p className="mb-3 text-center leading-6 text-black-1000">
        Este assistente permite ajudar-te na matrícula e inscrição nas Unidades
        Curriculares do curso a que te candidataste <br /> através do nosso
        Sistema de Gestão Académica:{' '}
        <a href={'https://fenix-mais.iscte-iul.pt/'}>Fénix+</a>.
      </p>
      <p className="mb-3 text-center leading-6 text-black-1000">
        Começa por colocar a tua questão na caixa em branco abaixo.
      </p>
    </div>
  );
}
