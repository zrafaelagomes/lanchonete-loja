export default function Footer() {
  return (
    <footer className="bg-[#fff] mt-16">

      <div className="h-[1px] bg-gradient-to-r from-transparent via-[#ff3c00] to-transparent" />

      <div className="px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm">

        <p className="text-[#ff3c00]">
          © {new Date().getFullYear()} Good Burguer. Todos os direitos reservados.
        </p>

        <p className="text-[#ff3c00] mt-2 md:mt-0">
          Desenvolvido por <span className="font-semibold">Rafaela Gomes</span>
        </p>

      </div>
    </footer>
  );
}