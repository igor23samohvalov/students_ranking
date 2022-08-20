import IStudent from "../Types/IStudent";
import Button from "./styles/Button.styled";
import { Card, CardBlock, CardImg } from "./styles/StudentPreview.styled";

function StudentPreview(student: IStudent) {
  const { surname, name, ranking, rating } = student;

  return (
    <Card>
      <CardBlock>
        <CardImg src="./imgs/avatar_placeholder.png" alt="avatar" />
      </CardBlock>
      <CardBlock>
        <h3>
          {surname} {name}
        </h3>
        <h4>Rank: {ranking}</h4>
        <p>Rating: {rating}</p>
      </CardBlock>
      <CardBlock>
        <Button>Редактировать</Button>
        <Button>Удалить</Button>
      </CardBlock>
    </Card>
  );
}

export default StudentPreview;
