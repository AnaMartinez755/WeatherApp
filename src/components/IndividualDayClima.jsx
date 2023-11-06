const IndividualDayClima = ({unidades,data,day}) => {
  return (
    <div className="individual-dayclima">
      <p style={{ fontWeight: 'bold' }}>{day}</p>
      <p>{data} {unidades}</p>
    </div>
  );
};

export default IndividualDayClima;
