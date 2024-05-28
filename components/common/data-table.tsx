import React from 'react';
import { Table } from 'antd';
import type { ColumnsType, TablePaginationConfig } from 'antd/es/table';

type Props = {
  columns: ColumnsType<Record<string, unknown>>;
  data: Record<string, unknown>[];
  pagination?: false | TablePaginationConfig | undefined;
  rowClassName?:() => string
};

export function DataTable(props: Props) {
  const { columns, data, pagination,rowClassName } = props;

  return <Table rowClassName={rowClassName} columns={columns} dataSource={data} pagination={pagination} />;
}
