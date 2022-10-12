import Card from './Card';
import datas from '../datas/datas.json';
import '../styles/ContainerCard.css';

function ContainerCard(){
    return (
        <section className='ContainerCard'>
            
        {
        datas.map((item) => 
        
          <Card
          key={item.id}
          id={item.id}
          cover={item.cover}
          title={item.title}
        />
      
            
            )
          }
          
        </section>
    );
};

export default ContainerCard;