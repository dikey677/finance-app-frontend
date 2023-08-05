import React, { useMemo, Fragment } from "react";
import { useTable } from "react-table";
import { ReactComponent as Vector } from "../image/SVG/MobileVector.svg";
import { ReactComponent as VectorTable } from "../image/SVG/VectorTable.svg";
import { ReactComponent as VectorDesktop } from "../image/SVG/VectorDesktop.svg";
import Media from "react-media";

const TableCurrency = ({ columns, data }) => {
  const { getTableProps, headerGroups, rows, prepareRow, getTableBodyProps } =
    useTable({
      columns,
      data,
    });

  return (
    <>
      <Media
        queries={{
          small: "(min-width: 320px) and (max-width: 767px)",
          medium: "(min-width: 768px) and (max-width: 1199px)",
          large: "(min-width: 1200px)",
        }}
      >
        {(matches) => (
          <Fragment>
            {matches.small && (
              <>
                <table
                  {...getTableProps()}
                  style={{
                    margin: "30px auto",
                    width: "280px",
                    height: "174px",
                    background: "#4A56E2",
                    borderCollapse: "collapse",
                    borderRadius: "30px",
                    position: "relative",
                  }}
                >
                  <thead
                    style={{
                      background: "#6e78e8",
                      height: "50px",
                      borderRadius: "30px 30px 0 0",
                      display: "table-cell",
                    }}
                  >
                    {headerGroups.map((headerGroup) => (
                      <tr
                        {...headerGroup.getHeaderGroupProps()}
                        style={{
                          display: "flex",
                          width: "73px",
                          height: "27px",
                        }}
                      >
                        {headerGroup.headers.map((column) => (
                          <th
                            {...column.getHeaderProps()}
                            style={{
                              fontStyle: "normal",
                              fontWeight: "700",
                              fontSize: "16.5px",
                              lineHeight: "27px",
                              textAlign: "center",
                              color: "#FFFFFF",
                              marginLeft: "20px",
                            }}
                          >
                            {column.render("Header")}
                          </th>
                        ))}
                      </tr>
                    ))}
                  </thead>
                  <tbody
                    {...getTableBodyProps()}
                    style={{
                      display: "table-row",
                    }}
                  >
                    {rows.map((row) => {
                      prepareRow(row);
                      return (
                        <tr
                          {...row.getRowProps()}
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            margin: "10px 20px",
                            alignItems: "center",
                          }}
                        >
                          {row.cells.map((cell) => {
                            return (
                              <td
                                {...cell.getCellProps()}
                                style={{
                                  fontStyle: "normal",
                                  fontWeight: "400",
                                  fontSize: "16px",
                                  lineHeight: "24px",
                                  color: "#FFFFFF",
                                }}
                              >
                                {cell.render("Cell")}
                              </td>
                            );
                          })}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                <Vector
                  style={{
                    position: "absolute",
                    left: "19px",
                    top: "226px",
                  }}
                />
              </>
            )}
            {matches.medium && (
              <>
                {" "}
                <table
                  {...getTableProps()}
                  style={{
                    maxWidth: "334px",
                    width: "100%",

                    height: "111px",
                    background: "#4A56E2",
                    borderCollapse: "collapse",
                    borderRadius: "30px",
                    position: "relative",
                  }}
                >
                  <thead
                    style={{
                      background: "#6e78e8",
                      height: "50px",
                      borderRadius: "30px 30px 0 0",
                      display: "flex",
                      padding: "11px 20px 12px 20px",
                      flexDirection: "column-reverse",
                    }}
                  >
                    {headerGroups.map((headerGroup) => (
                      <tr
                        {...headerGroup.getHeaderGroupProps()}
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        {headerGroup.headers.map((column) => (
                          <th
                            {...column.getHeaderProps()}
                            style={{
                              fontStyle: "normal",
                              fontWeight: "700",
                              fontSize: "16.5px",
                              lineHeight: "27px",
                              textAlign: "center",
                              color: "#FFFFFF",
                            }}
                          >
                            {column.render("Header")}
                          </th>
                        ))}
                      </tr>
                    ))}
                  </thead>
                  <tbody
                    {...getTableBodyProps()}
                    style={{
                      display: "table-row",
                    }}
                  >
                    {rows.map((row) => {
                      prepareRow(row);
                      return (
                        <tr
                          {...row.getRowProps()}
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            margin: "10px 20px",
                            alignItems: "center",
                          }}
                        >
                          {row.cells.map((cell) => {
                            return (
                              <td
                                {...cell.getCellProps()}
                                style={{
                                  fontStyle: "normal",
                                  fontWeight: "400",
                                  fontSize: "16px",
                                  lineHeight: "24px",
                                  color: "#FFFFFF",
                                }}
                              >
                                {cell.render("Cell")}
                              </td>
                            );
                          })}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                <VectorTable
                  style={{
                    position: "absolute",
                    top: "163px",
                  }}
                />
              </>
            )}
            {matches.large && (
              <>
                {" "}
                <table
                  {...getTableProps()}
                  style={{
                    position: "relative",
                    margin: "30px auto",
                    width: "348px",
                    height: "347px",
                    background: "#4A56E2",
                    borderCollapse: "collapse",
                    borderRadius: "30px",
                  }}
                >
                  <thead
                    style={{
                      display: "flex",
                      alignItems: "center",
                      background: "#6e78e8",
                      height: "50px",
                      borderRadius: "30px 30px 0 0",

                      justifyContent: "space-between",
                    }}
                  >
                    {headerGroups.map((headerGroup) => (
                      <tr
                        {...headerGroup.getHeaderGroupProps()}
                        style={{
                          display: "flex",
                          width: "348px",
                          paddingLeft: "30px",
                          paddingRight: "30px",
                          justifyContent: "space-between",
                        }}
                      >
                        {headerGroup.headers.map((column) => (
                          <th
                            {...column.getHeaderProps()}
                            style={{
                              fontStyle: "normal",
                              fontWeight: "700",
                              fontSize: "16.5px",
                              lineHeight: "27px",
                              textAlign: "center",
                              color: "#FFFFFF",
                            }}
                          >
                            {column.render("Header")}
                          </th>
                        ))}
                      </tr>
                    ))}
                  </thead>
                  <tbody
                    {...getTableBodyProps()}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    {rows.map((row) => {
                      prepareRow(row);
                      return (
                        <tr
                          {...row.getRowProps()}
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            margin: "12px 30px",
                            alignItems: "center",
                          }}
                        >
                          {row.cells.map((cell) => {
                            return (
                              <td
                                {...cell.getCellProps()}
                                style={{
                                  fontStyle: "normal",
                                  fontWeight: "400",
                                  fontSize: "16px",
                                  lineHeight: "24px",
                                  color: "#FFFFFF",
                                }}
                              >
                                {cell.render("Cell")}
                              </td>
                            );
                          })}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                <VectorDesktop
                  style={{
                    position: "absolute",
                    left: "86px",
                    top: "447px",
                  }}
                />
              </>
            )}
          </Fragment>
        )}
      </Media>
    </>
  );
};

const Currency = () => {
  const columns = useMemo(
    () => [
      {
        Header: "Валюта",
        accessor: "currency",
      },
      {
        Header: "Покупка",
        accessor: "buy",
      },
      {
        Header: "Продажа",
        accessor: "sell",
      },
    ],
    []
  );

  const data = useMemo(
    () => [
      { currency: "USD", buy: "27.55", sell: "27.65" },
      { currency: "EUR", buy: "30.55", sell: "31.65" },
      { currency: "RUB", buy: "29.05", sell: "33.75" },
    ],
    []
  );

  return <TableCurrency columns={columns} data={data} />;
};

export default Currency;
