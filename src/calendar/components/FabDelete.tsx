import { useCalendarStore, useUiStore } from "../../hooks";

export const FabDelete = () => {
  const { onDeletingEvent, activeEvent, hasEventSelected } = useCalendarStore();
  const { closeDateModal } = useUiStore();

  const handleDeleteEvent = () => {
    console.log("activeEnnet", activeEvent._id);
    onDeletingEvent(activeEvent._id);

    closeDateModal();
  };

  return (
    <>
      {hasEventSelected && (
        <button className="btn btn-primary btn-fab-delete" onClick={() => handleDeleteEvent()}>
          <i className="fas fa-trash-alt"></i>
        </button>
      )}
    </>
  );
};
