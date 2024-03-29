import { useState } from "react";
import { Standard } from "../../components/templates";
import { UnitRegister, UnitList } from "../../components/organisms";

export default function Units() {
  const [openUnitRegister, setOpenUnitRegister] = useState(false);
  const [unitSelected, setUnitSelected] = useState(null);

  return (
    <Standard title="Unidades">
      {openUnitRegister ? (
        <UnitRegister
          setOpenUnitRegister={setOpenUnitRegister}
          unitSelected={unitSelected}
        />
      ) : (
        <UnitList
          setOpenUnitRegister={setOpenUnitRegister}
          setUnitSelected={setUnitSelected}
        />
      )}
    </Standard>
  );
}
