import { Imagem, Texto } from "../../atoms";
import { CartaoDeVisita, Doce, Doce2, Produto, Soma } from "../../molecules";

export default function Props() {
  const listaDeDoces = [
    { id: 1, nome: "Chocolate", preco: 5, descricao: "Chocolate ao leite" },
    { id: 2, nome: "Bala", preco: 1, descricao: "Bala de goma" },
    { id: 3, nome: "Biscoito", preco: 2, descricao: "Biscoito de chocolate" },
  ];

  const produtosDeBeleza = [
    {
      id: 1,
      nome: "Shampoo",
      preco: 20,
      imagem:
        "https://img.freepik.com/psd-premium/maqueta-salpicadura-publicidad-botella-blanca_181945-770.jpg",
    },
    {
      id: 2,
      nome: "Condicionador",
      preco: 25,
      imagem:
        "https://img.freepik.com/premium-psd/bottle-with-pump-splashing-advertising-mockup_181945-895.jpg",
    },
    {
      id: 3,
      nome: "Creme para pentear",
      preco: 30,
      imagem:
        "https://img.freepik.com/free-psd/white-plastic-soap-container_176382-1383.jpg?w=2000",
    },
  ];

  return (
    <section>
      <Texto subtitulo="Props" />

      <Imagem
        imagemUrl="https://s1.static.brasilescola.uol.com.br/be/2022/06/paisagem-natural-floresta.jpg"
        textoAlternativo="Foto de uma floresta"
        formato="quadrado"
      />

      <Imagem
        imagemUrl="https://caosplanejado.com/wp-content/uploads/2021/02/cidade-centrada.jpg"
        textoAlternativo="Foto de uma cidade"
        formato="redondo"
      />

      <Texto textoH3="Exercício 1" />
      <p>
        Crie um componente <strong>CartaoDeVisita</strong> que receba as props
        nome, email, telefone e imageUrl e exiba os dados em um cartão de
        visita.
      </p>

      <div className="wrapper">
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
      </div>

      <Texto textoH3="Exercício 2" />
      <p>
        Crie um componente de soma que recebe duas propriedades (números), e que
        retorna uma frase: “A soma dos números é __”
      </p>

      <Soma num1={2} num2={3} />
      <Soma num1={5} num2={-10} />

      <Texto subtitulo="Props + renderização de listas" />

      <div className="wrapper">
        {listaDeDoces.map((doce) => (
          <Doce
            key={doce.id}
            nome={doce.nome}
            preco={doce.preco}
            descricao={doce.descricao}
          />
          // ou
          // <Doce
          //   key={doce.id}
          //   {...doce} // está usando spread operator para passar todas as propriedades do objeto
          // />
        ))}
      </div>

      <p>Podemos utilizar também a desestruturação</p>
      <div className="lista-de-doces">
        {listaDeDoces.map((doce) => (
          <Doce2 key={doce.id} doce={doce} />
        ))}
      </div>

      <Texto textoH3="Exercício" />
      <p>
        Crie um componente <strong>Produto</strong> que recebe como propriedades
        seu nome, preço e imagem. Crie uma lista de produtos com essas
        informações e outras que achar necessário. Renderize a lista de produtos
        utilizando o componente <strong>Produto</strong>.
      </p>

      <div className="wrapper">
        {produtosDeBeleza.map((produto) => (
          <Produto key={produto.id} {...produto} />
        ))}
      </div>
    </section>
  );
}
