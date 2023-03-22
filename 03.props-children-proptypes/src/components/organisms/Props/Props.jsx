import { Botao } from "../../atoms";
import { CartaoDeVisita, Doce, Doce2 } from "../../molecules";

export default function Props() {
  const listaDeDoces = [
    { id: 1, nome: "Chocolate", preco: 5, descricao: "Chocolate ao leite" },
    { id: 2, nome: "Bala", preco: 1, descricao: "Bala de goma" },
    { id: 3, nome: "Biscoito", preco: 2, descricao: "Biscoito de chocolate" },
  ];

  return (
    <section>
      <h2>Props</h2>

      <Botao texto="Clique aqui" />
      <Botao texto="Clique aqui 2" danger />

      <h3>Exercício 1</h3>
      <p>
        Crie um componente <strong>CartaoDeVisita</strong> que receba as props nome, email, telefone e imageUrl e exiba os dados em um cartão de visita.
      </p>

      <CartaoDeVisita
        nome="João"
        email="joao@email.com"
        telefone="(11) 99999-9999"
        imageUrl="https://cdn-blog.sallve.com.br/2022/05/a642d825-acne-no-homem-adulto-724x1024.jpg"
      />
      <CartaoDeVisita
        nome="Maria"
        email="maria@email.com"
        telefone="(11) 99999-9999"
      />

      <h2>Props + renderização de listas</h2>
      {listaDeDoces.map((doce) => (
        <Doce
          key={doce.id}
          nome={doce.nome}
          preco={doce.preco}
          descricao={doce.descricao}
        /> // ou <Doce key={doce.id} {...doce} />
      ))}

      <p>Podemos utilizar também a desestruturação</p>
      {listaDeDoces.map((doce) => (
        <Doce2 key={doce.id} doce={doce} />
      ))}

      <h3>Exercício 2</h3>
      <p>
        x
      </p>

    </section>
  );
}
