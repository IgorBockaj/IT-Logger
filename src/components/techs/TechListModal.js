import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TechItem from "./TechItem";
import { getTechs } from "../../actions/techActions";

function TechListModal() {
  const tech = useSelector((state) => state.tech);
  const dispatch = useDispatch();

  const { techs } = tech;

  useEffect(() => {
    dispatch(getTechs());

    // eslint-disable-next-line
  }, []);

  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h4>Technician List</h4>
        <ul className="collection">
          {techs !== null &&
            techs.map((tech) => <TechItem tech={tech} key={tech.id} />)}
        </ul>
      </div>
    </div>
  );
}

export default TechListModal;
