export default async function Home() {
  interface ProdutoDetalhes {
    marca: string;
    cor: string;
  }

  type Venda = [string, number, string, ProdutoDetalhes];

  const responseFetchVendas = await fetch(
    "https://api.origamid.dev/json/vendas.json"
  );
  const vendasData: Venda[] = await responseFetchVendas.json();

  const totalVendas = vendasData.reduce((acc, venda) => acc + venda[1], 0);

  return <h2>Total Vendas: {totalVendas}</h2>;
}
