import { Card, CardTytle } from "./styles/StudentPreview.styled";

function PlaceholderStudent() {
  return (
    <Card
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}
    >
      <CardTytle>Студентов нет</CardTytle>
    </Card>
  );
}

export default PlaceholderStudent;
