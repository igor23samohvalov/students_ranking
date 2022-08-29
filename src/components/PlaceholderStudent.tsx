import { Card, CardTitle } from "./styles/StudentPreview.styled";

function PlaceholderStudent() {
  return (
    <Card
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}
    >
      <CardTitle>Студентов нет</CardTitle>
    </Card>
  );
}

export default PlaceholderStudent;
