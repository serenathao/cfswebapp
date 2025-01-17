import React from 'react';
import { Table, Header, HeaderRow, HeaderCell, Body, Row, Cell, } from '@table-library/react-table-library/table';
import { useTheme } from '@table-library/react-table-library/theme';

const FusionDataTable = ({ tableData }) => {
    const resize = { minWidth: 150 };
    const headers = tableData.length === 0? [] : Object.keys(tableData[0]).map(key => (
        <HeaderCell resize={resize}>{key.replace(/_/g, ' ').replace(/\b\w/g, char => char.toUpperCase())}</HeaderCell>
    ));
    const theme = useTheme({
        Table: `
            --data-table-library_grid-template-columns:  70px 230px 200px 200px 200px 230px 250px 170px 180px 180px 200px 200px 200px 200px 200px 200px 200px 200px 200px minmax(150px, 250px);
        `,
        Row: `
            &:nth-of-type(odd) {
                background-color: #ffbca1;
            }

            &:nth-of-type(even) {
                background-color: #fff;
            }
        `,
        HeaderCell: `
            font-weight: bold;
            padding: 7px;
            border-bottom: 1px solid #ccc;
        `,
        Cell: `
            padding: 7px;
            flex: 1;
            border-bottom: 1px solid #ccc;
        `,
    });
  
    return (
        <div style={{ padding: '20px', overflow: 'auto' }}>
            <Table
                data={{ nodes: tableData }}
                style={{ minHeight: '300px', height: 'auto', border: '1px solid lightgrey', backgroundColor: '#f9f9f9' }}
                theme={theme}
                layout={{ custom: true, horizontalScroll: true }}
            >
                {(tableList) => (
                <>
                    <Header>
                        <HeaderRow>
                            {headers}
                        </HeaderRow>
                    </Header>

                    <Body>
                        {tableList.map((item) => (
                        <Row key={item.id} item={item}>
                            {Object.keys(item).map(k => <Cell>{item[k]}</Cell>)}
                        </Row>
                        ))}
                    </Body>
                </>
                )}
            </Table>
        </div>
    );
  };

export default FusionDataTable;