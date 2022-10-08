export interface DoughnutChartProp {
    data: number
}

export interface PieChartProp {
    data: number
}

export interface Pedido {
    Id: number,
    dataEntrega: string,
    dataCriacao: string,
    endereco: string,
    equipe: Equipe
}

export interface Produto {
    Id: number,
    nome: string,
    valor: number,
    descricao: string,
}

export interface Pedido {
    Id: number,
    dataEntrega: string,
    dataCriacao: string,
    endereco: string,
    equipe: Equipe
}

export interface Equipe {
    Id: number,
    nome: string,
    descricao: string,
    placaVeiculo: string,
}

export interface DatatableProp {
   
    data?:{
        Pedido?: Pedido,
        Produtos?: Produto[],
    }[]
}