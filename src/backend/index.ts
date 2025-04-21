import excluirCliente from "./cliente/excluirCliente";
import obterTodos from "./cliente/obterTodos";
import salvarCliente from "./cliente/salvarCliente";
import salvarVenda from "./venda/salvarVenda";
import obterTodasVendas from "./venda/obterTodos";
import excluirVenda from "./venda/excluirVenda";
import salvarReceita from "./receita/salvarReceita";
import obterTodasReceitas from "./receita/obterTodos";
import excluirReceita from "./receita/excluirReceita";
import obterPorIdCliente from "./cliente/obterPorId";
import obterPorIdVenda from "./venda/obterPorId";
import obterPorIdReceita from "./receita/obterPorId";
import obterVendasClientes from "./venda/obterVendasPorCliente";
import obterReceitasClientes from "./receita/obterReceitasPorCliente";



// Padrão Facade
export default class Backend {
    static readonly clientes = {
        salvar: salvarCliente,
        obter: obterTodos,
        excluir: excluirCliente,
        obterPorId: obterPorIdCliente,
    };

    static readonly vendas = {
        salvar: salvarVenda,
        obter: obterTodasVendas,
        excluir: excluirVenda,
        obterPorId: obterPorIdVenda,
        obterVendasClientes: obterVendasClientes,
    };

    static readonly receitas = {
        salvar: salvarReceita,
        obter: obterTodasReceitas,
        excluir: excluirReceita,
        obterPorId: obterPorIdReceita,
        obterReceitasClientes: obterReceitasClientes,
    };
}
