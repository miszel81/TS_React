const EventComponent: React.FC = () => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };

  const onDragStart = (event:React.DragEvent<HTMLDivElement> ) => {
      console.log(event)
  }
  return (
    <div>
      <input onChange={onChange} />
      <div onDragStart={onDragStart}>Drag ME</div>
    </div>
  );
};

export default EventComponent;
