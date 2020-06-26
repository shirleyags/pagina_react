import React, {Component} from "react";

const TableHead = () =>{
    return(
        <thead>
        <tr>
          <th>Autores</th>
          <th>Livros</th>
          <th>Preços</th>
          <th>Remover</th>
        </tr>
      </thead>
    );
  
  }

  const TableBody = props =>{

        const linhas = props.autores.map((linha, posicao)=>{
            return (
                <tr key={posicao}>
                    <th>{linha.nome}</th>
                    <th>{linha.livro}</th>
                    <th>{linha.preco}</th>
                    <th><button>Remover</button></th>
                </tr>

            );
        });
    return(

    <tbody>{linhas}</tbody>

    );
  
  }


class Tabela extends Component{


    render(){
        const {autores} = this.props; // Chamando o componente (lista/array) de autores.

       
        return(
            <table>
                 <TableHead/>
                 <TableBody autores={ autores }/>
           
          </table>
        );
    }

}

export default Tabela;