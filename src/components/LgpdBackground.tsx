/**
 * LgpdBackground
 * Fundo corporativo para a página LGPD.
 * Conceitualmente remete a tratamento de dados pessoais:
 * - Base cinza-grafite neutra
 * - Grid técnico discreto (estrutura/governança)
 * - Padrão sutil de binário (0/1) — dados pessoais sendo processados
 * - Linha de "fluxo de dados" diagonal ultra sutil
 * - Glows radiais para profundidade
 * - Vinheta para foco no conteúdo
 */
const LgpdBackground = () => {
  // SVG inline com dígitos binários — codificado para data URI
  const binarySvg = encodeURIComponent(`
    <svg xmlns='http://www.w3.org/2000/svg' width='320' height='320' viewBox='0 0 320 320'>
      <text x='8'   y='24'  font-family='ui-monospace, Menlo, monospace' font-size='12' fill='white' fill-opacity='0.55'>01001100 01000111 01010000 01000100</text>
      <text x='8'   y='52'  font-family='ui-monospace, Menlo, monospace' font-size='12' fill='white' fill-opacity='0.45'>11010010 00110101 10100110 01011001</text>
      <text x='8'   y='80'  font-family='ui-monospace, Menlo, monospace' font-size='12' fill='white' fill-opacity='0.5' >00110100 01010110 01100001 11010010</text>
      <text x='8'   y='108' font-family='ui-monospace, Menlo, monospace' font-