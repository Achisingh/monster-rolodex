import Card from "../card/card.component";

// class CardList extends Component {
//   render() {
//     const { monsters } = this.props;
//     return (
//       <div>
//         {monsters.map((monster) => {
//           const { name, email, id } = monster;
//           return <Card key={id} name={name} email={email} id={id} />;
//         })}
//       </div>
//     );
//   }
// }

import { Monster } from "../../App";

type CardListProps = {
  monsters: Monster[];
};

const CardList = ({ monsters }: CardListProps) => {
  return (
    <div>
      {monsters.map((monster) => {
        return <Card monster={monster} />;
      })}
    </div>
  );
};

export default CardList;
