import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Box from "../box";
import Text from "../text";
import TextField from "../text-field";
import Search from "../icons/Search";
import Button from "../button";
import ExternalLink from "../icons/ExternalLink";
import Checkbox from "../checkbox";
import Pagination from "../pagination";
import TableHeadCell from "./components/TableHeadCell";
import "./Table.scss";
import classNames from "../../utils/classNames";
import { getColumnWidth } from "./utils/getColumnWidth";
import useExportCsv from "./hooks/useExportCsv";
import { search as searchItems, filter as filterItems } from "./utils/filter";
import uniqueRandomString from "../../utils/uniqueRandomString";

const Table = ({
  showCheckboxes,
  itemsPerPage,
  paginate,
  paginateRight,
  initialCurrentPage,
  currentPageSiblings,
  asyncPagination,
  columns,
  data,
  search,
  enableCsvExport,
  enableCustomizeView,
  searchPlaceholder,
  generatedCsvName,
  loading,
  checkboxDataSelector,
  buttonActionsAlignment,
  searchAlignment,
  caseSensitiveSearch,
  onPageChange,
  onRowSelected,
  ...props
}) => {
  const [internalCurrentPage, setInternalCurrentPage] = useState();
  const { exportCsv } = useExportCsv(data, generatedCsvName);
  const [processedData, setProcessedData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [columnHashMap, setColumnHashMap] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);

  useEffect(() => {
    setInternalCurrentPage(initialCurrentPage);
  }, []);

  useEffect(() => {
    const hashMap = {};
    columns.forEach((column) => {
      hashMap[column.dataSelector] = column;
    });
    setColumnHashMap(hashMap);
  }, [columns]);

  useEffect(() => {
    let detachedData = [...data];
    if (searchValue) {
      detachedData = searchItems(
        searchValue,
        detachedData,
        columnHashMap,
        caseSensitiveSearch
      );
    }

    setProcessedData(
      detachedData.map((item) => ({
        ...item,
        uuuid: uniqueRandomString(30, 8),
      }))
    );
  }, [data, searchValue, columnHashMap]);

  useEffect(() => {
    if (onRowSelected && typeof onRowSelected === "function") {
      onRowSelected(selectedRows);
    }
  }, [selectedRows, onRowSelected]);

  useEffect(() => {
    if (onPageChange && typeof onPageChange === "function") {
      onPageChange(internalCurrentPage);
    }
  }, [internalCurrentPage, onPageChange]);

  const filteredColumns = columns.filter((column) => column.visible !== false);

  const paginatedData =
    paginate && !asyncPagination
      ? [...processedData].splice(
          (internalCurrentPage - 1) * itemsPerPage,
          itemsPerPage
        )
      : [...processedData];

  const mappedHeadCells = filteredColumns.map((visibleColumn, index) => (
    <Box
      is={"td"}
      key={`${index}-heading-cell`}
      className={"ui-table__heading-cell"}
      style={{
        ...getColumnWidth(visibleColumn),
      }}
    >
      <TableHeadCell column={visibleColumn} />
    </Box>
  ));

  const handlePageChange = (page) => {
    setInternalCurrentPage(page);
  };

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const toggleSelectedRows = (uuuid) => {
    let newSelectedRows = [...selectedRows];
    if (newSelectedRows.includes(uuuid)) {
      newSelectedRows.splice(newSelectedRows.indexOf(uuuid), 1);
    } else {
      newSelectedRows.push(uuuid);
    }
    setSelectedRows(newSelectedRows);
  };

  const toggleAllRows = () => {
    if (selectedRows.length === paginatedData.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(paginatedData.map((datum) => datum.uuuid));
    }
  };

  const mappedRows = paginatedData.map((datum, index) => (
    <Box
      is={"tr"}
      className={classNames({
        "ui-table__body-row": true,
        checked: selectedRows.includes(datum[checkboxDataSelector]),
      })}
      key={`${index}-row`}
    >
      {showCheckboxes && (
        <Box
          is={"td"}
          className={"ui-table__body-cell is-checkbox"}
          style={{
            ...getColumnWidth(null, true),
          }}
        >
          <Checkbox
            value={datum.uuuid}
            checked={selectedRows.includes(datum.uuuid)}
            onChange={() => toggleSelectedRows(datum.uuuid)}
          />
        </Box>
      )}
      {filteredColumns.map((column, jindex) => (
        <Box
          is={"td"}
          key={`${jindex}-${index}-cell`}
          className={"ui-table__body-cell"}
          style={{
            ...getColumnWidth(column),
          }}
        >
          {typeof datum[column.dataSelector] === "string" ? (
            <Text
              fontFace={"circularSTD"}
              marginY={0}
              className={"ui-table__body-cell-text"}
            >
              {datum[column.dataSelector]}
            </Text>
          ) : (
            datum[column.dataSelector]
          )}
        </Box>
      ))}
    </Box>
  ));

  const buttonActionsEnabled = enableCustomizeView && enableCsvExport;

  return (
    <Box className={"ui-table__container"}>
      <Box className={"ui-table__header"}>
        {search && (
          <Box
            className={classNames({
              "ui-table__header__search-wrapper": true,
              [searchAlignment]: buttonActionsEnabled ? false : searchAlignment,
            })}
          >
            <TextField
              leftIcon={Search}
              placeholder={"Placeholder"}
              size={"large"}
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </Box>
        )}
        <Box
          className={classNames({
            "ui-table__header-btns": true,
            [buttonActionsAlignment]: search ? false : buttonActionsAlignment,
          })}
        >
          {enableCustomizeView && (
            <Button size={"medium"}>Customize view</Button>
          )}
          {enableCsvExport && (
            <Button leftIcon={ExternalLink} size={"medium"} onClick={exportCsv}>
              Export
            </Button>
          )}
        </Box>
      </Box>
      <Box className={"ui-table__wrapper"}>
        <Box is={"table"} className={"ui-table"}>
          <Box is={"thead"} className={"ui-table__heading"}>
            <Box is={"tr"} className={"ui-table__heading-row"}>
              {showCheckboxes && (
                <Box
                  is={"td"}
                  className={"ui-table__heading-cell is-checkbox"}
                  style={{
                    ...getColumnWidth(null, true),
                  }}
                >
                  <Checkbox
                    checked={selectedRows.length === paginatedData.length}
                    onChange={toggleAllRows}
                  />
                </Box>
              )}
              {mappedHeadCells}
            </Box>
          </Box>
          <Box is={"tbody"} className={"ui-table__body"}>
            {mappedRows}
          </Box>
        </Box>
      </Box>
      {paginate && (
        <Box
          className={classNames({
            "ui-table__pagination": true,
            right: paginateRight,
          })}
          marginTop={"1rem"}
        >
          <Pagination
            currentPage={internalCurrentPage}
            currentPageSiblings={currentPageSiblings}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </Box>
      )}
    </Box>
  );
};

export default Table;

Table.propTypes = {
  showCheckboxes: PropTypes.bool,
  itemsPerPage: PropTypes.number,
  paginate: PropTypes.bool,
  paginateRight: PropTypes.bool,
  currentPage: PropTypes.number,
  currentPageSiblings: PropTypes.number,
  asyncPagination: PropTypes.bool,
  columns: PropTypes.array,
  data: PropTypes.array,
  search: PropTypes.bool,
  enableCsvExport: PropTypes.bool,
  enableCustomizeView: PropTypes.bool,
  searchPlaceholder: PropTypes.string,
  generatedCsvName: PropTypes.string,
  loading: PropTypes.bool,
  checkboxDataSelector: PropTypes.string,
  buttonActionsAlignment: PropTypes.oneOf(["left", "right"]),
  searchAlignment: PropTypes.oneOf(["left", "right"]),
  onPageChange: PropTypes.func,
  caseSensitiveSearch: PropTypes.bool,
  onRowSelected: PropTypes.func,
};

Table.defaultProps = {
  itemsPerPage: 10,
  showCheckboxes: false,
  paginate: false,
  paginateRight: false,
  currentPage: 1,
  currentPageSiblings: 3,
  asyncPagination: false,
  generatedCsvName: "Exported CSV",
  searchPlaceholder: "Search",
  checkboxDataSelector: "uuuid",
  buttonActionsAlignment: "left",
  searchAlignment: "left",
  caseSensitiveSearch: false,
};
