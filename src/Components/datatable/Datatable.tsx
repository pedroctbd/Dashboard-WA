import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { TableBodyContainer, TableHeader, Text } from './style';
import { DatatableProp, Pedido, Produto } from '../models';

interface Column {
    id: 'id' | 'DataCriacao' | 'DataEntrega' | 'Endereco' | 'Equipe' | 'Descricao' | 'PlacaVeiculo';
    label: string;
    minWidth?: number;
    align?: 'right';
    format?: (value: number) => string;
}
interface TableRow {
    pedido: Pedido,
}

const columns: readonly Column[] = [
    { id: 'id', label: 'ID', minWidth: 170 },
    { id: 'DataCriacao', label: 'Data de Criacao', minWidth: 100 },
    { id: 'DataEntrega', label: 'Data de Entrega', minWidth: 100 },
    { id: 'Endereco', label: 'Endereço', minWidth: 100 },
    { id: 'Equipe', label: 'Equipe', minWidth: 100 },
    { id: 'Descricao', label: 'Descrição', minWidth: 100 },
    { id: 'PlacaVeiculo', label: 'Placa do Veiculo', minWidth: 100 },
];

interface Data {
    id: string,
    DataCriacao: string,
    DataEntrega: string,
    Endereco: string
    Equipe: string,
    Descricao: string,
    PlacaVeiculo: string,
}

const createData = (
    id: string,
    DataCriacao: string,
    DataEntrega: string,
    Endereco: string,
    Equipe: string,
    Descricao: string,
    PlacaVeiculo: string,
): Data => {
    return {
        id,
        DataCriacao,
        DataEntrega,
        Endereco,
        Equipe,
        Descricao,
        PlacaVeiculo
    };
}


export interface DataProp {
    data: any;
};


const BasicTable: React.FunctionComponent<DatatableProp> = ({ data }) => {
    const [page, setPage] = useState(0);
    const [rows, setRows]: any = useState();
    const [rowsPerPage, setRowsPerPage] = useState(20);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    const populateTable = (data: any) => {
        let value: any = [];
        data.forEach((element: TableRow, index: number) => {
            value.push(createData(index.toString(),
                element.pedido.dataCriacao,
                element.pedido.dataEntrega,
                element.pedido.endereco,
                element.pedido.equipe.nome,
                element.pedido.equipe.descricao,
                element.pedido.equipe.placaVeiculo,
            ))
        });
        setRows(value);
    };

    useEffect(() => {
        if (data) populateTable(data);
    }, [data]);

    return (
        <>
            {rows && (
                <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                    <TableHeader className="tableHeader">
                        <Text>Histórico de pedidos</Text>
                        <TablePagination
                            rowsPerPageOptions={[10, 25, 100]}
                            component="div"
                            count={rows.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </TableHeader>
                    <TableBodyContainer>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    {columns.map((column) => (
                                        <TableCell
                                            key={column.id}
                                            align={column.align}
                                            style={{ minWidth: column.minWidth }}
                                        >
                                            {column.label}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows ?
                                    rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                        .map((row: any) => {
                                            return (
                                                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                                    {columns.map((column) => {
                                                        const value = row[column.id];
                                                        return (
                                                            <TableCell key={column.id} align={column.align}>
                                                                {column.format && typeof value === 'number'
                                                                    ? column.format(value)
                                                                    : value}
                                                            </TableCell>
                                                        );
                                                    })}
                                                </TableRow>
                                            );
                                        }) : []}
                            </TableBody>
                        </Table>
                    </TableBodyContainer>

                </Paper >
            )}
        </>
    )

}
export default BasicTable;