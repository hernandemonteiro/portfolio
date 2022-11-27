import React, { useContext } from "react";
import Academy from "../../../components/admin/Academy";
import TemplateAdmin from "../../../components/admin/TemplateAdmin";
import ContentTableForm from "../../../components/ui/BaseTableForm/ContentTableForm";
import useAcademy from "../../../hooks/useAcademy";
import usePagination from "../../../hooks/usePagination";
import ViewContext from "../../../providers/viewContext";

export default function AcademyPage() {
  const { setView } = useContext(ViewContext);
  const { pagination, botaoMostrarMais } = usePagination(5, 5);
  const {
    message,
    academyList,
    handleAcademyForm,
    setIdExperience,
    idExperience,
    setCourse,
    course,
    setFoundation,
    foundation,
    setSince,
    since,
    setStatus,
    status,
    deleteAcademy,
  } = useAcademy();

  return (
    <TemplateAdmin>
      <Academy
        message={message}
        academy={academyList}
        pagination={pagination}
        buttonPagination={botaoMostrarMais(academyList.length)}
        TableContent={(element) => (
          <ContentTableForm
            key={element._id}
            description={`${element.title} - ${element.since} - 
      ${element.status} - ${element.foundation}`}
            onClickEdit={() => {
              setIdExperience(element._id);
              setCourse(element.title);
              setFoundation(element.foundation);
              setSince(element.since);
              setStatus(element.status);
              setView(true);
            }}
            onClickTrash={() => deleteAcademy(element._id)}
          />
        )}
        onSubmitForm={handleAcademyForm}
        setIdExperience={(e) => setIdExperience(e.target.value)}
        idExperience={idExperience}
        setCourse={(e) => setCourse(e.target.value)}
        course={course}
        setFoundation={(e) => setFoundation(e.target.value)}
        foundation={foundation}
        setSince={(e) => setSince(e.target.value)}
        since={since}
        setStatus={(e) => setStatus(e.target.value)}
        status={status}
      />
    </TemplateAdmin>
  );
}
