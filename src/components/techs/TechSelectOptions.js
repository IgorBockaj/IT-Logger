import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTechs } from "../../actions/techActions";

function TechSelectOptions() {
  const dispatch = useDispatch();
  const tech = useSelector((state) => state.tech);

  const { techs } = tech;

  useEffect(() => {
    dispatch(getTechs());
    // eslint-disable-next-line
  }, []);

  return (
    techs !== null &&
    techs.map((t) => (
      <option key={t.id} value={`${t.firstName} ${t.lastName}`}>
        {t.firstName} {t.lastName}
      </option>
    ))
  );
}

export default TechSelectOptions;
