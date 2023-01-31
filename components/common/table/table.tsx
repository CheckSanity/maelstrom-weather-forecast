import './table.styles.scss'

import * as React from 'react'
import { get } from 'lodash'

export interface IColumnType<T> {
  key: string
  title: string
  dataIndex: string
  colSpan?: number
  render?: (column: IColumnType<T>, item: T) => void
  width?: string
  align?: 'left' | 'center' | 'right'
}

export interface Props<T> {
  data: T[]
  columns: IColumnType<T>[]
}

export function Table<T>({ data, columns }: Props<T>): JSX.Element {
  return (
    <div className={`table-wrapper`}>
      <div className={`table`}>
        <div className={`table-container`}>
          <div className={`table-content`}>
            <table className={`table-layout`}>
              <thead className={`table-head`}>
                <TableHeader columns={columns} />
              </thead>
              <tbody className={`table-body`}>
                <TableRow data={data} columns={columns} />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export interface HeaderProps<T> {
  columns: IColumnType<T>[]
}

function TableHeader<T>({ columns }: HeaderProps<T>): JSX.Element {
  return (
    <tr>
      {columns.map((column, columnIndex) => (
        <th
          className={`table-cell`}
          colSpan={column.colSpan}
          style={{ width: column.width, textAlign: column.align }}
          key={`table-head-cell-${columnIndex}`}
        >
          {column.title}
        </th>
      ))}
    </tr>
  )
}

export function TableRow<T>({ data, columns }: Props<T>): JSX.Element {
  return (
    <>
      {data.map((item, itemIndex) => (
        <tr key={`table-body-${itemIndex}`}>
          {columns.map((column, columnIndex) => (
            <TableRowCell
              key={`table-row-cell-${columnIndex}`}
              item={item}
              column={column}
            />
          ))}
        </tr>
      ))}
    </>
  )
}

interface CellProps<T> {
  item: T
  column: IColumnType<T>
}

export function TableRowCell<T>({ item, column }: CellProps<T>): JSX.Element {
  const value = get(item, column.dataIndex)
  return (
    <td
      className={`table-cell`}
      colSpan={column.colSpan}
      style={{ textAlign: column.align }}
    >
      {column.render ? column.render(column, item) : value}
    </td>
  )
}
