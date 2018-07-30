import React, { Component, Fragment } from "react";
import { render } from "react-dom";
import Header from "./Header";
import Post from "./Post";
import path from "path";

class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        nome: "Sávio Rezende Scaglioni",
        texto:
          " Ainda sim é possível utilizar termos técnicos, desde que explicados corretamente e contextualizados. Inclusive, se você é capaz de explicar conceitos complexos com palavras simples, isso é um ótimo indicador de domínio do assunto e relevância do conteúdo.",
        hora: "10 min",
        imagem: path.join(__dirname, "imgs", "avatar.png")
      },
      {
        id: 2,
        nome: "Higor Rezende Scaglioni",
        texto:
          " Claro que, ao produzir conteúdo para um cliente, é preciso verificar as instruções do pitch em relação a termos específicos. Afinal, muitas estratégias de marketing de conteúdo buscam aumentar gradualmente os conhecimentos do leitor sobre o tema tratado, até os mais leigos.",
        hora: "5 min",
        imagem: path.join(__dirname, "imgs", "avatar5.png")
      },
      {
        id: 3,
        nome: "Otair Jose",
        texto:
          " Por fim, se você quer mesmo produzir um conteúdo avançado, não é preciso temer o uso de termos mais técnicos e específicos da área. Muitas vezes, é justamente isso que você precisa para estabelecer sua autoridade e reputação online!",
        hora: "2 min",
        imagem: path.join(__dirname, "imgs", "avatar04.png")
      }
    ]
  };

  render() {
    return [<Header />, <Post data={this.state.posts} />];
  }
}
render(<App />, document.getElementById("app"));
