import Card from './components/Card/Card';
import data from './data/data.json'; 
import cardImage from './assets/card-image.png'; 

const App = () => {
  return (
    <>
      {/* NOTE: Вариант без chidren: */}
      {data.map((item) => (
        <Card key={item.id} item={item} />
      ))}

      {/* NOTE: Вариант с chidren: */}
      <Card item={{...data[0], title: "Card title 8", text: "This is a card with children!!!"}}>
        <img className="card__img" src={cardImage} alt="card not found" />
      </Card>
    </>
  );
};

export default App;
