import { useAppSelector } from "../hooks/reduxHooks";
import Entry from "./Entry";
import { ListLoader } from "./styles/Loader";

type EntriesListProps = {
  showRemoveEntry: React.Dispatch<React.SetStateAction<any>>;
  showEditEntry: React.Dispatch<React.SetStateAction<any>>;
  id: string | undefined;
};

function EntriesList({ showEditEntry, showRemoveEntry, id }: EntriesListProps) {
  const entries = useAppSelector((state) =>
    state.entries.list.filter((e) => e.studentId === id),
  );
  const loading = useAppSelector((state) => state.entries.loading);

  if (loading) return <ListLoader />;
  if (entries.length === 0) return <h4>Нет записей</h4>;

  return (
    <>
      {entries.map((e) => (
        <Entry
          key={id}
          data={e}
          showEditEntry={showEditEntry}
          showRemoveEntry={showRemoveEntry}
        />
      ))}
    </>
  );
}

export default EntriesList;
