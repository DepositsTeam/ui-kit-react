import { useState, useEffect } from "react";

export const useFilePicker = (props, file) => {
  const [computedAccepts, setComputedAccepts] = useState("");
  const [internalError, setInternalError] = useState("");
  const [selectedFileName, setSelectedFileName] = useState("");
  const [computedErrorMessage, setComputedErrorMessage] = useState("");

  useEffect(() => {
    if (Array.isArray(props.accepts))
      setComputedAccepts(props.accepts.join(", "));
    else {
      switch (props.accepts) {
        case "image":
          setComputedAccepts(".png, .jpg, .jpeg, .svg, .bmp, .gif");
          break;
        case "document":
          setComputedAccepts(".csv, .xls, .xlsx, .pdf, .doc, .docx");
          break;
        case "csv":
          setComputedAccepts(".csv");
          break;
        default:
          setComputedAccepts(undefined);
      }
    }
  }, [props.accepts]);

  useEffect(() => {
    setComputedErrorMessage(
      internalError
        ? internalError
        : props.errorMessage
        ? props.errorMessage
        : undefined
    );
  }, [internalError, props.errorMessage]);

  const updateName = (e) => {
    let files = e.target.files || e.dataTransfer.files;
    setSelectedFileName(!files ? "" : files[0].name);
    if (files.length > props.maxFiles) {
      setInternalError(
        `You cannot upload more than ${props.maxFiles} file(s) at once`
      );
    } else {
      setInternalError("");
    }
    for (let currentFile of files) {
      if (currentFile.size > props.fileMaxSize * 1000000) {
        setInternalError(
          `You cannot upload a file larger than ${props.fileMaxSize}MB`
        );
      }
    }
    if (internalError.value) {
      const input = file.current.$el;
      input.setAttribute("type", "text");
      input.setAttribute("type", "file");
      setSelectedFileName("");
    } else {
      if (typeof props.onChange === "function") {
        props.onChange(files.length > 1 ? files : files[0]);
      }
    }
  };

  const emptyFile = () => {
    setSelectedFileName("");
    const input = file.current;
    input.setAttribute("type", "text");
    input.setAttribute("type", "file");
    if (typeof props.onCleared === "function") props.onCleared();
  };

  return {
    computedAccepts,
    computedErrorMessage,
    emptyFile,
    updateName,
    selectedFileName,
  };
};
