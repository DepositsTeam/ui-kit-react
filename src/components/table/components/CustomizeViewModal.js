import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Modal from "../../modal";
import Card from "../../card";
import Move from "../../icons/Move";
import Box from "../../box";
import Button from "../../button";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import classNames from "../../../utils/classNames";

const CustomizeViewModal = ({
  show,
  onCloseModal,
  onColumnsOrderChanged,
  columns,
  ...props
}) => {
  const [internalColumns, setInternalColumns] = useState([]);

  useEffect(() => {
    setInternalColumns(columns);
  }, [columns]);

  const hydrateColumns = () => {
    onColumnsOrderChanged([...internalColumns]);
    onCloseModal();
  };

  const onDragEnd = (result) => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }
    const columnsCopy = [...internalColumns];
    const movedColumn = columnsCopy.splice(result.source.index, 1)[0];
    columnsCopy.splice(result.destination.index, 0, movedColumn);

    setInternalColumns(columnsCopy);
  };

  const triggerVisibility = (column, index) => {
    const columnsCopy = [...internalColumns];
    columnsCopy[index].visible = !columnsCopy[index].visible;
    setInternalColumns([...columnsCopy]);
  };

  const draggables = internalColumns.map((column, index) => (
    <Draggable
      key={column.dataSelector}
      draggableId={column.dataSelector}
      index={index}
    >
      {(provided, snapshot) => (
        <Box
          marginBottom={"16px"}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Card
            checked={column.visible}
            icon={Move}
            checkbox
            desc={column.display}
            cursor={"move"}
            onChange={() => triggerVisibility(column, index)}
          />
        </Box>
      )}
    </Draggable>
  ));
  return (
    <Modal
      heading={"Customize View"}
      show={show}
      greyContent
      modalWidth="600px"
      roundedBorders
      onCloseModal={onCloseModal}
    >
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <Box
              {...provided.droppableProps}
              className={classNames({
                "mb-12": snapshot.isDraggingOver,
              })}
              ref={provided.innerRef}
            >
              {draggables}
            </Box>
          )}
        </Droppable>
      </DragDropContext>
      <Box display="flex" justifyContent="flex-end">
        <Button
          onClick={hydrateColumns}
          size={"medium"}
          colorScheme={"primary"}
          marginRight={"16px"}
        >
          Save
        </Button>
        <Button onClick={onCloseModal} size={"medium"}>
          Cancel
        </Button>
      </Box>
    </Modal>
  );
};

export default CustomizeViewModal;

CustomizeViewModal.defaultProps = {
  show: false,
};

CustomizeViewModal.propTypes = {
  show: PropTypes.bool,
  onCloseModal: PropTypes.func,
  columns: PropTypes.array,
  columnHashMap: PropTypes.object,
  onColumnsOrderChanged: PropTypes.func,
};
