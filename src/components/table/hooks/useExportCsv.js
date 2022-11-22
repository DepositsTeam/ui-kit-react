import { ExportToCsv } from "export-to-csv";

export default function useExportCsv(data, generatedCsvName) {
  const options = {
    fieldSeparator: ",",
    quoteStrings: '"',
    decimalSeparator: ".",
    showLabels: true,
    showTitle: true,
    title: generatedCsvName,
    useTextFile: false,
    useBom: true,
    useKeysAsHeaders: true,
  };

  const csvExporter = new ExportToCsv(options);

  const exportCsv = () => {
    return csvExporter.generateCsv(data);
  };
  return { exportCsv };
}
